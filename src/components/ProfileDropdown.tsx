import type { UserProfile } from '@auth0/nextjs-auth0';
import Image from 'next/image';

const ProfileDropdown: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0}>
        {user.picture ? (
          <div className="avatar">
            <div className="mask mask-squircle">
              <Image src={user.picture} height={32} width={32} alt="Menu" />
            </div>
          </div>
        ) : (
          <button className="btn btn-primary display">Profile</button>
        )}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-48"
      >
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

export default ProfileDropdown;
