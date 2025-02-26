/* eslint-disable react/prop-types */
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900 overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
