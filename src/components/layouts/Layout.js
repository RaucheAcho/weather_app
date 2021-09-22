const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen overflow-auto font-raleway">
      {children}
    </div>
  );
};

export default Layout;
