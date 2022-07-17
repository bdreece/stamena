import type { UserProfile } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import Image from 'next/image';

interface ProfileDropdownProps {
  user: UserProfile;
  end?: boolean;
  label?: string;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  user,
  end,
  label,
}) => {
  return (
    <div className={end ? 'dropdown dropdown-end' : 'dropdown'}>
      <label tabIndex={0}>
        {user.picture ? (
          <div className="flex justify-around">
            <div className="avatar">
              <div className="mask mask-squircle">
                <Image src={user.picture} height={32} width={32} alt="Menu" />
              </div>
            </div>
            {label ? <p className="ml-2 display">{label}</p> : <div />}
          </div>
        ) : (
          <button className="btn btn-primary display">
            {label ? label : 'Profile'}
          </button>
        )}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-48"
      >
        <li>
          <Link className="display" href="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="display" href="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="display" href="/api/auth/logout">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
