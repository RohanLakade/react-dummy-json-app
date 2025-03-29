import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      &copy; {new Date().getFullYear()} DummyShop
    </footer>
  );
};

export default Footer;
