import Admin from "@models/Admin";
import connectDB from "@utils/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        await connectDB();
        try {
          const admin = await Admin.findOne({ email: credentials?.email });
          if (admin) {
            // check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials?.password as string,
              admin.password
            );
            if (isPasswordCorrect) {
              return admin;
            } else {
              throw new Error("Invalid Credential!");
            }
          } else {
            throw new Error("Admin not found with this credential");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
