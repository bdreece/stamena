import Link from 'next/link';

import { useUser } from '@auth0/nextjs-auth0';

import SearchBar from 'components/SearchBar';
import Navbar from 'layout/Navbar';
import Drawer from 'layout/Drawer';
import Footer from 'layout/Footer';
import ProfileDropdown from 'layout/ProfileDropdown';

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useUser();

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar>
          <SearchBar searchFunc={() => {}} key={0} />
          <Link href="/leaderboard" key={1}>
            <div className="btn btn-primary rounded-lg display">
              Leaderboard
            </div>
          </Link>
          {user ? (
            <ProfileDropdown user={user} end />
          ) : (
            <Link href="/api/auth/login">
              <div className="btn btn-success text-light rounded-lg display">
                Log In
              </div>
            </Link>
          )}
        </Navbar>
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
      <div className="drawer-side">
        <Drawer>
          <SearchBar searchFunc={() => {}} />
          <Link href="/leaderboard" key={1}>
            <div className="btn btn-primary rounded-lg display">
              Leaderboard
            </div>
          </Link>
          {user ? (
            <ProfileDropdown
              user={user}
              label={user.name ?? undefined}
              end={false}
            />
          ) : (
            <Link href="/api/auth/login">
              <div className="btn btn-success text-light rounded-lg display">
                Log In
              </div>
            </Link>
          )}
        </Drawer>
      </div>
    </div>
  );
};

export default Layout;