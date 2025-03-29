import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>Page Not Found</div>
      <Link to="/">Go to Home</Link>
    </>
  );
};

export default NotFound;
