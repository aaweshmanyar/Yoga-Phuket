import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"; // Import user icon
import Nav from "../Navbar/Nav";
import NavMobile from "../Navbar/NavMobile";
import Logo from "./demologo.png";

const Header = () => {
  const [isHeader, setIsHeader] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu
  const { user, logout } = useAuth(); // Get user and logout from auth context
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 36 ? setIsHeader(true) : setIsHeader(false);
    });
  }, []);

  const handleSignInClick = () => {
    navigate("/signin");
  };

  const handleLogout = () => {
    logout(); // Log the user out
    navigate("/"); // Redirect to sign-in page after logout
  };

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header
      className={`${
        isHeader ? "top-0" : "top-9"
      } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
    >
      <div className="flex items-center">
        <a href="/">
          <img src={Logo} alt="Logo"  className="h-12 w-auto mr-2"/>
        </a>
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex gap-x-4 lg:gap-x-9">
          {user ? (
            <div className="relative">
              <FontAwesomeIcon
                icon={faUserCircle} // Use Font Awesome profile icon
                className="w-8 h-8 text-gray-700 cursor-pointer" // Icon styling
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <div className="px-4 py-2 text-gray-800 font-semibold">
                    {user.name || "User"} {/* Display the user's name */}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="btn btn-md lg:px-[30px] bg-green-300 border border-green font-medium text-sm lg:text-base hover:bg-green-200 hover:text-white text-white transition"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          )}
        </div>
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
