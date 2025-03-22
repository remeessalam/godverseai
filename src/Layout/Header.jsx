import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/images/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/contact-us");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 !z-50 bg-primary dark:bg-darkblack shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <div className="flex-shrink-0">
            <div className=" w-auto text-white">
              <img src={logo} alt="logo" className="w-[7rem] h-[2.8rem]" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["/", "/about-us", "/services", "/blog"].map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`text-white hover:text-blue-300 dark:hover:text-primary ${
                  isActive(path) ? "text-blue-300 dark:text-primary" : ""
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").replace("-", " ")}
              </Link>
            ))}

            <button onClick={navigateTo} className="primary-btn">
              Contact Us
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 text-gray-600`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 text-gray-600`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
            {["/", "/about-us", "/services", "/blog"].map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  isActive(path) ? "bg-gray-100 dark:bg-gray-800" : ""
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").replace("-", " ")}
              </Link>
            ))}
            <button
              onClick={navigateTo}
              className="w-full text-center bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
