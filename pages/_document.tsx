import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Photos taken by Azuelle."
          />
          <meta property="og:site_name" content="gallery.azuelle.cc" />
          <meta
            property="og:description"
            content="Photos taken by Azuelle."
          />
          <meta property="og:title" content="Gallery | Azuelle" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Gallery | Azuelle" />
          <meta
            name="twitter:description"
            content="Photos taken by Azuelle."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
