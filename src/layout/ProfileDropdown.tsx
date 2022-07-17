import Link from 'next/link';
import Image from 'next/image';

import { signOut } from 'next-auth/react';

interface ProfileDropdownProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ user }) => {
  return (
    <div className="dropdown dropdown-end p-2 pb-1 rounded-lg">
      <label tabIndex={0}>
        {user.image ? (
          <div className="avatar">
            <div className="mask mask-squircle">
              <Image src={user.image} height={32} width={32} alt="Menu" />
            </div>
          </div>
        ) : (
          <button className="btn btn-primary display">Profile</button>
        )}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box justify-items-stretch gap-2 w-52 mt-48"
      >
        <li>
          <Link href="/dashboard">
            <div className="flex-1 btn btn-secondary display">Dashboard</div>
          </Link>
        </li>
        <li>
          <button
            className="flex-1 btn btn-warning display"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
