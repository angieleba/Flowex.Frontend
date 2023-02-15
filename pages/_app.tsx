import 'styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import theme from 'theme';
import Layout from 'components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Flowex</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <ToastContainer />
    </ChakraProvider>
  );
}

export default MyApp;
