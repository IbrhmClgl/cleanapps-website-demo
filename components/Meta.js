import Head from "next/head";
import React from "react";

const Meta = ({
  pageTitle = "",
  description = "",
  cLink = "",
  favicon = "/favicon.ico",
  locale = "de-DE",
  graphImg = "https://res.cloudinary.com/dxmshww1c/image/upload/v1679509017/Clean-Apps/Logo/logo-no-bg_nprv2c.svg",
}) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={cLink} />
      <link rel="icon" href={favicon} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      {/* <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self'; img-src https://*; child-src 'none';"
      /> */}
      {/* <meta name="referrer" content="strict-origin-when-cross-origin" /> */}

      {/* <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'; child-src vitals.vercel-insights.com;"
        // content="default-src 'self'; style-src 'self' 'unsafe-inline'; img-src https://*; child-src vitals.vercel-insights.com;"
      /> */}

      {/* ---- Graph meta ---- */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={cLink} />

      <meta property="og:image" content={graphImg} />
      <meta property="og:locale" content={locale} />
    </Head>
  );
};

export default Meta;
