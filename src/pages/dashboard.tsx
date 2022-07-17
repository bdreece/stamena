import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';

import PlantsView from 'components/dashboard/PlantsView';
import ProfileView from 'components/dashboard/ProfileView';
import SettingsView from 'components/dashboard/SettingsView';
import { useSession } from 'next-auth/react';
import {
  Session,
  unstable_getServerSession as getServerSession,
} from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

enum Tab {
  PLANTS,
  PROFILE,
  SETTINGS,
}

export const getServerSideProps: GetServerSideProps<{
  session: Session;
}> = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

const Dashboard: NextPage<{ session: Session }> = ({ session }) => {
  const [tab, setTab] = useState(Tab.PLANTS);
  const { user } = session;
  return (
    <div className="flex flex-col">
      <div className="flex-0 tabs justify-center">
        <button
          className={`tab tab-bordered tab-lg ${
            tab == Tab.PLANTS ? 'tab-active' : ''
          }`}
          onClick={() => setTab(Tab.PLANTS)}
        >
          Plants
        </button>
        <button
          className={`tab tab-bordered tab-lg ${
            tab == Tab.PROFILE ? 'tab-active' : ''
          }`}
          onClick={() => setTab(Tab.PROFILE)}
        >
          Profile
        </button>
        <button
          className={`tab tab-bordered tab-lg ${
            tab == Tab.SETTINGS ? 'tab-active' : ''
          }`}
          onClick={() => setTab(Tab.SETTINGS)}
        >
          Settings
        </button>
      </div>
      <div className="flex-1">
        {tab == Tab.PLANTS ? (
          <PlantsView />
        ) : tab == Tab.PROFILE ? (
          <ProfileView />
        ) : (
          <SettingsView />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
