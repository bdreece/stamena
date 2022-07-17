import Navbar from 'components/Navbar';
import Drawer from 'components/Drawer';
import SearchBar from 'components/SearchBar';
import Link from 'next/link';
import Footer from 'components/Footer';

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const items = [
    <SearchBar key={0} />,
    <Link className="btn btn-ghost rounded-lg" href="/leaderboard" key={1}>
      Leaderboard
    </Link>,
  ];

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar>{items}</Navbar>
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
      <div className="drawer-side">
        <Drawer>{items}</Drawer>
      </div>
    </div>
  );
};

export default Layout;
