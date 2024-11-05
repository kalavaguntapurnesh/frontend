import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="hover:underline">
                Home
              </Link>
              <Link to="/profile" className="hover:underline">
                My Profile
              </Link>
              <button onClick={handleLogout} className="hover:underline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="hover:underline">
                About Us
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
              <Link to="/login" className="hover:underline">
                Log In
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
