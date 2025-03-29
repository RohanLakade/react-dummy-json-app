import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header bg-dark text-white text-center py-3">
      <Link to={"/"} className="text-white text-decoration-none">
        <h1 className="mb-0 fs-3 fw-bold">DummyShop</h1>
      </Link>
    </header>
  );
};

export default Header;
