// import "@/styles/globals.css";
import MuiThemeProvider from "@/mui-theme/MuiThemeProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <MuiThemeProvider>
    <Component {...pageProps} />
    </MuiThemeProvider>
    );
}
