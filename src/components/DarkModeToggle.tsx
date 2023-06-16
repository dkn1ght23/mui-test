import React, { useContext } from "react";
import { IconButton, Switch } from "@mui/material";
import { ThemeContext } from "../styles/CustomThemeProvider";

function DarkModeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  console.log(theme, "theme");

  return (
    <div>
      <IconButton color="inherit" onClick={toggleTheme}>
        {isDarkMode ? "dark" : "light"}
      </IconButton>
    </div>
  );
}

export default DarkModeToggle;
