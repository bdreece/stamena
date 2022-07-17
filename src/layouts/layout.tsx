import { useUser } from '@auth0/nextjs-auth0';

import Navbar from 'components/Navbar';
import Drawer from 'components/Drawer';
import SearchBar from 'components/SearchBar';
import Link from 'next/link';
import Footer from 'components/Footer';
import ProfileDropdown from 'components/ProfileDropdown';

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
            <ProfileDropdown user={user} />
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
          <SearchBar searchFunc={() => {}} key={0} />
          <Link href="/leaderboard" key={1}>
            <div className="btn btn-primary rounded-lg display">
              Leaderboard
            </div>
          </Link>
          <Link href={!user ? '/api/auth/login' : '/api/auth/logout'} key={2}>
            <div className="btn btn-success text-light rounded-lg display">
              {!user ? 'Log In' : 'Log Out'}
            </div>
          </Link>
        </Drawer>
      </div>
    </div>
  );
};

export default Layout;
