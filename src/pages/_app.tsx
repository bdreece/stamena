import type { AppType } from "next/dist/shared/lib/utils";
import { UserProvider } from '@auth0/nextjs-auth0';

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
  );
};

export default MyApp;
