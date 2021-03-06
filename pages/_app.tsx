import type { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

import ym from 'react-yandex-metrika';

Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window !== 'undefined') {
    ym('hit', url);
  }
});

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Топ Маркетплейс - топ апп</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://mc.yandex.ru" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <meta property="og:locale" content="ru_RU" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
