import React from "react";
import Nav from "../components/Nav";
import "../styles/styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Quicksand:wght@300&family=Roboto+Mono:wght@500&family=Roboto:wght@100;400&display=swap" rel="stylesheet"/>
      </Head>
      <Nav/>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
