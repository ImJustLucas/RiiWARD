import "remixicon/fonts/remixicon.css";

import React from "react";
import GlobalStyle from "@components/GlobalStyle";
import { GlobalThemeProvider } from "@contexts/GlobalTheme";
import { AppLayout } from "@layouts/AppLayout";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalThemeProvider>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover, height=device-height"
        />
        <title>RiiWARD</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <AppLayout>
        <GlobalStyle />
        <Component {...pageProps} />
        <Toaster richColors={true} closeButton />
      </AppLayout>
    </GlobalThemeProvider>
  );
}
