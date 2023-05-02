import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
// import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return {
  //     ...initialProps,
  //     styles: React.Children.toArray([initialProps.styles]),
  //   };
  // }

  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="copyright" content="Copyright (c) Musica (9ice__guy)" />
          <meta name="googlebot" content="index, follow" />
          <meta name="publisher" content="https://muzica.vercel.app" />
          <meta name="msapplication-tap-highlight" content="no" />
          <link rel="icon" href="/logo.svg" />
          <meta name="title" content="Musica" />
          <meta
            name="description"
            content="Musica is an online music streaming platform, you have a radio feature available, you can upload your own music and add music albums to collections"
          />
          <meta
            name="keywords"
            content="music, sportify, audiomack, songs,player, music sites, nusica, muzica"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Emmanuel Ufere (9ice__guy)" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://muzica.vercel.app/" />
          <meta
            property="og:title"
            content="Musica - You #1 online musica streaming plaform"
          />
          <meta
            property="og:description"
            content="Musica is an online music streaming platform, you have a radio feature available, you can upload your own music and add music albums to collections"
          />
          <meta
            property="og:image"
            content="https://muzica.vercel.app/Banner.png"
          />

          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="@Musica" />
          <meta property="twitter:creator" content="9ice_guy" />
          <meta property="twitter:url" content="https://muzica.vercel.app/" />
          <meta
            property="twitter:title"
            content="Musica - You #1 online musica streaming plaform"
          />
          <meta
            property="twitter:description"
            content="Musica is an online music streaming platform, you have a radio feature available, you can upload your own music and add music albums to collections"
          />
          <meta
            property="twitter:image"
            content="https://muzica.app/Banner.png"
          />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Musica" />
          <meta name="theme-color" content="#1e293b" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-title" content="Musica" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#1e293b"
          />
        </Head>
        <body className="page-wrapper dark:bg-black bg-slate-50 dark:text-gray-light">
          <Main />
          <NextScript className="container m-auto" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
