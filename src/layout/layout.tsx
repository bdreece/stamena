import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

import SearchBar from 'components/SearchBar';
import Navbar from 'layout/Navbar';
import Drawer from 'layout/Drawer';
import Footer from 'layout/Footer';
import ProfileDropdown from 'layout/ProfileDropdown';

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { data: session } = useSession();
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
          {session?.user ? (
            <ProfileDropdown user={session.user} />
          ) : (
            <button
              className="btn btn-success text-light rounded-lg display"
              onClick={() => signIn()}
            >
              Log In
            </button>
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
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <div className="flex-1 btn btn-secondary mb-4 display">
                  Dashboard
                </div>
              </Link>
              <button
                className="flex-1 btn btn-warning display"
                onClick={() => signOut()}
              >
                Log Out
              </button>
            </>
          ) : (
            <button
              className="btn btn-success text-light rounded-lg display"
              onClick={() => signIn()}
            >
              Log In
            </button>
          )}
        </Drawer>
      </div>
    </div>
  );
};

export default Layout;
