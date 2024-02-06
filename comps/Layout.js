import Navbar from "./Navbar";
import Logo from "./Logo";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Logo />
      <Footer />
    </div>
  );
};

export default Layout;
