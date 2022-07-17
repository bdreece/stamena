import type { AppType } from 'next/dist/shared/lib/utils';
import { UserProvider } from '@auth0/nextjs-auth0';

import '../styles/globals.css';
import Layout from 'layout/layout';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
};

export default MyApp;
