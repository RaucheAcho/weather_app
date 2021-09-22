const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen overflow-auto font-raleway border-4  border-red-600">
      {children}
    </div>
  );
};

export default Layout;
