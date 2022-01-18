// react
import { FC } from 'react';

// next
import Head from 'next/head';

// material ui
import { Container } from '@mui/material';

// organisms
import { Header, Footer } from '@organisms/index';

export const AppLayout: FC = ({ children }) => (
  <>
    <Head>
      {/* Viewport */}
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <title>Pabau Assignment | Fitim Bytyqi</title>
    </Head>

    <Header />

    <Container maxWidth="lg">{children}</Container>

    <Footer />
  </>
);
