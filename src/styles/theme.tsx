import { createTheme } from "@mui/material/styles";

import { useContext } from "react";
import { ThemeContext } from "./CustomThemeProvider";

const theme = (primaryColor: string) => {
  // const { primaryColor } = useContext(ThemeContext);
  console.log(primaryColor, "primary color");

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      // ...other light theme configuration
      primary: {
        main: primaryColor,
        light: "#FF6347",
        dark: "#800000",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: "#FF0000",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: primaryColor,
      },
      // ...other dark theme configuration
    },
  });
  return {
    darkTheme,
    lightTheme,
  };
};

export default theme;
