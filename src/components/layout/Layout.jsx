import { Outlet, useLocation } from "react-router-dom";
import Header from "@src/components/layout/header/Header";
import SearchFilters from "@components/products/SearchFilters";
import Footer from "@src/components/layout/footer/Footer";
import "./layout.scss";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout d-flex flex-column vh-100">
      <Header /> {/* Fixed Header */}
      {location.pathname === "/products" && <SearchFilters />}
      <div className="page-wrapper container flex-grow-1 overflow-auto py-4">
        <Outlet />
      </div>
      <Footer /> {/* Fixed Footer */}
    </div>
  );
};

export default Layout;
