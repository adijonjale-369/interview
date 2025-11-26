import * as React from 'react';

import Head from 'next/head';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import DashboardProvider from '../context/DashboardContext';

const theme = createTheme({
  palette: {
    mode: 'light'
  }
});

export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DashboardProvider>
          <Component {...pageProps} />
        </DashboardProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
