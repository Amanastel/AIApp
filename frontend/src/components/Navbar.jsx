import LogoImage from "../assets/Interview Mastery-logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const isLogin = false;
  return (
    <nav className="bg-[#6634eb]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={LogoImage}
                alt="Interview Mastery-logo"
                width={"100px"}
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/practice"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Practice
            </Link>
            <Link
              to="/feedback"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Feedback
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Signup
            </Link>
            {/* <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
