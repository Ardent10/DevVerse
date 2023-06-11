import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import createEmotionCache from "../src/createEmotionCache";
import { AppStateProvider, globalReducers, initialState } from "../src/store";
import theme from "../src/theme";
// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "../src/config/apolloclient";
import "../styles/index.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>DevVerse | Developer's Social Network.</title>
        <link rel="shortcut icon" href="/logo2.png" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppStateProvider reducer={globalReducers} initialState={initialState}>
        {/* <ApolloProvider client={apolloClient}> */}
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
        {/* </ApolloProvider> */}
      </AppStateProvider>
    </CacheProvider>
  );
}
