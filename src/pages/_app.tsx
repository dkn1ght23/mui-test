import { AppProps } from "next/app";

import { CssBaseline } from "@mui/material";
import { CustomThemeProvider } from "../styles/CustomThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}
