import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Favicons */}
          <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png" />
          <link rel="manifest" href="assets/favicon/site.webmanifest" />
          <link rel="mask-icon" href="assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          {/* Google Fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          {/* Google Icons */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
