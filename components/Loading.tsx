import Typography from "@components/Typography";

const Loading = ({ loadingText }: { loadingText: string }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex justify-center items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={"animate-spin w-6 stroke-primary-600 duration-500"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        <Typography size="body1/semi-bold" className="capitalize">
          {loadingText}...
        </Typography>
      </div>
    </div>
  );
};

export default Loading;
