import Head from "next/head";   

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Project Name</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        {/* favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
