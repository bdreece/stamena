import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0';
import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps<UserProfile> =
  withPageAuthRequired();

const Profile: NextPage<UserProfile> = ({ user }) => {
  return (
    <div className="flex">
      <ul className="menu bg-base-100 w-56 p-2 rounded-box">
        <li className="menu-title">
          <span>Category</span>
        </li>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li className="menu-title">
          <span>Category</span>
        </li>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
