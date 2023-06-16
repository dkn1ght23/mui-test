import React, { useState, useEffect, createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./theme";

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextProps {
  theme: "light" | "dark";
  primaryColor: string;
  toggleTheme: () => void;
  togglePrimaryColor: (color: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  primaryColor: "#FF0000",
  theme: "light",
  togglePrimaryColor: () => {},
  toggleTheme: () => {},
});

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [primaryColor, setPrimaryColor] = useState<string>("#FF0000");
  const { lightTheme, darkTheme } = customTheme(primaryColor);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme === "dark" ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const togglePrimaryColor = (color: string) => {
    console.log("hamaisi re bhai", color);

    setPrimaryColor(color);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, primaryColor, togglePrimaryColor }}
    >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
