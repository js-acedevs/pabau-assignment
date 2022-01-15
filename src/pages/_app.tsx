// apollo client
import { ApolloProvider } from '@apollo/client';

// emotion react
import { CacheProvider, EmotionCache } from '@emotion/react';

// material ui
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// next
import type { AppProps } from 'next/app';
import Head from 'next/head';

// react
import { FC } from 'react';

// graphql
import { client as apolloClient } from '@graphql/client';

// emotion
import { createEmotionCache } from '../materialui/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// theme
import { theme } from '../materialui/theme';

// styles
import '../styles/main.css';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  </CacheProvider>
);

export default MyApp;
