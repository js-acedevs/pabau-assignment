// next
import type { AppProps } from 'next/app';

// apollo client
import { ApolloProvider } from '@apollo/client';

// materialui
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// graphql
import { client as apolloClient } from '@graphql/client';

// styles
import '../styles/main.scss';

// theme
import { theme } from '@materialui/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </ApolloProvider>
);

export default MyApp;
