import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaCartPlus, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../../../provider/AuthProvider";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLinks = [
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/workouts"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Workout Programs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/recipes"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/store"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Store
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          <div className="flex items-center">
            <FaCartPlus />
            <span>+{cart?.length || 0}</span>
          </div>
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
              <div tabIndex={0}>
                <img src={user.photoURL} className="w-[40px] h-[40px] rounded-full object-cover" alt="" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 bg-gray-900 rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => handleLogOut()}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>,
  ];
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <span className="ml-2 text-xl font-bold tracking-wide text-[#FFED00]">
            absMania
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">{navLinks}</ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiOutlineBars3BottomRight className="w-8 text-white" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-black border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide text-[#FFED00] uppercase">
                        absMania
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaXmark className="w-5 text-[#FFED00]" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">{navLinks}</ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
