"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type TTheme = "light" | "dark";

type TContext = {
  theme: TTheme;
  setTheme: Dispatch<SetStateAction<TTheme>>;
};

export const ThemeContext = createContext<TContext>({
  theme: "dark",
  setTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const localTheme =
    typeof window !== "undefined"
      ? (window.localStorage.getItem("theme") as TTheme)
      : null;

  const [theme, setTheme] = useState<TTheme>(localTheme ?? "dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
