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
    <div>
      {/* Top Navbar */}
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

      {/* Sidebar - Visible only on desktop after login */}
      {isAuthenticated && (
        <div className="hidden lg:block fixed top-0 left-0 w-64 h-full bg-gray-800 text-white pt-16">
          <nav className="space-y-4">
            <ul>
              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/reports"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  to="/rentals"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Rentals
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
