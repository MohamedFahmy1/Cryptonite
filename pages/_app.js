import { Fragment, useState, useEffect } from "react";
import "../dist/css/styles.css";
import Router from "next/router";
import Head from "next/head";

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Cryptonite</title>
      </Head>
      {loading ? (
        <div className="loadingPage">
          <span className="loader"></span>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </Fragment>
  );
}
export default App;
