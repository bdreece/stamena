import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0';
import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import { getSupabase } from 'utils/supabase.client';

export const getServerSideProps: GetServerSideProps<UserProfile> =
  withPageAuthRequired();

const Dashboard: NextPage<{ user: UserProfile }> = ({ user }) => {
  return <div className="flex flex-wrap"></div>;
};

export default Dashboard;
