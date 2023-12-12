"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type TContext = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<TContext>({
  theme: "light",
  setTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const localTheme =
    typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;

  const [theme, setTheme] = useState<string>(localTheme ?? "light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
