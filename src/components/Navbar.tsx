import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
  return (
    <div className="w-full navbar bg-base-300 content-center shadow-md sticky top-0 z-50">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <Link href="/">
        <div className="flex-0 px-2 mx-2 flex btn btn-ghost">
          <Image src="/favicon-32x32.png" width={32} height={32} alt="Logo" />
          <h1 className="ml-2 text-2xl normal-case heading">Stamena</h1>
        </div>
      </Link>
      <div className="flex-1" />
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {children.map((child, i) => (
            <li className="mx-2" key={i}>
              {child}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
