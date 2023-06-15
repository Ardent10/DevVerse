import { CacheProvider, EmotionCache } from "@emotion/react";
import { ColorModeContextProvider } from "@modules/common/DarkMode";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import createEmotionCache from "../src/createEmotionCache";
import { AppStateProvider, globalReducers, initialState } from "../src/store";
import "../styles/index.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [appMode, setAppMode] = useState("light");
  function handleAppMode() {
    setAppMode((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>DevVerse | Developer's Social Network.</title>
        <link rel="shortcut icon" href="/logo2.png" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppStateProvider reducer={globalReducers} initialState={initialState}>
        {/* <ThemeProvider theme={theme}> */}
        <ColorModeContextProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ColorModeContextProvider>
        {/* </ThemeProvider> */}
      </AppStateProvider>
    </CacheProvider>
  );
}
