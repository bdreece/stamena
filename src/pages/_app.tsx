import type { AppType } from 'next/dist/shared/lib/utils';
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';
import Layout from 'layout/layout';

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
