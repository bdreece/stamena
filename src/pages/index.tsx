import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession } from 'next-auth/react';

import LandingHero from 'components/landing/LandingHero';
import LandingFeed from 'components/landing/LandingFeed';

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Stamena</title>
        <meta name="description" content="Finally, competitive plant care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session ? <LandingFeed user={session.user} /> : <LandingHero />}
    </>
  );
};

export default Home;
