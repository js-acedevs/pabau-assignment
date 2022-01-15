// apollo client
import { ApolloProvider } from '@apollo/client';

// next
import type { AppProps } from 'next/app';

// graphql
import { client as apolloClient } from '@graphql/client';

// styles
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
