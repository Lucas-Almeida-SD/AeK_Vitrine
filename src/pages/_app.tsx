import React from 'react';
import type { AppProps } from 'next/app';

import '@/styles/globals.scss';
import '@/styles/Login.scss';
import '@/styles/InputText.scss';
import '@/styles/Button.scss';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
