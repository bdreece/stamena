const Drawer: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
  return (
    <>
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
        {children.map((child, i) => (
          <li className="my-2" key={i}>
            {child}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Drawer;
