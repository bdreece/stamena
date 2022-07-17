import type { NextPage } from 'next';

import Head from 'next/head';

import { useUser } from '@auth0/nextjs-auth0';

import LandingHero from 'components/landing/LandingHero';
import LandingFeed from 'components/landing/LandingFeed';

const Home: NextPage = () => {
  const { user } = useUser();
  return (
    <>
      <Head>
        <title>Stamena</title>
        <meta name="description" content="Finally, competitive plant care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? <LandingFeed user={user} /> : <LandingHero />}
    </>
  );
};

export default Home;
