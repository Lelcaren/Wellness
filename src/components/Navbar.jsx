import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";

const Navbar = ({ className = "", companyLogo, navLinksMargin }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinksStyle = useMemo(() => {
    return {
      margin: navLinksMargin,
    };
  }, [navLinksMargin]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`w-full max-w-screen-xl h-16 bg-whitesmoke-200 box-border flex flex-row items-center justify-between py-0 px-6 relative ${className}`}
    >
      {/* Logo Section */}
      <div className="h-16 w-32 flex flex-row items-center justify-center">
        <Link to="/home">
          <img
            className="h-12 w-auto relative rounded-sm overflow-hidden object-contain"
            loading="lazy"
            alt="Company Logo"
            src={companyLogo}
          />
        </Link>
      </div>

      {/* Desktop Navigation (Visible on Small Screens - below 1200px) */}
      <div className="flex flex-row items-center justify-center gap-4 lg:hidden">
        <nav
          className="m-0 flex flex-row items-center justify-end gap-6 text-left text-base text-color-scheme-1-text font-heading-desktop-h6"
          style={navLinksStyle}
        >
          <Link to="/home" className="flex flex-row items-center justify-center">
            <div className="relative leading-[150%]">Home</div>
          </Link>
          <Link to="/services" className="flex flex-row items-center justify-center">
            <div className="relative leading-[150%]">Our Services</div>
          </Link>
          <Link to="/" className="flex flex-row items-center justify-center">
            <div className="relative leading-[150%]">Contact Us</div>
          </Link>
        </nav>
        <div className="flex flex-row items-center justify-center gap-3">
          <Button
            alternate={false}
            iconPosition="No icon"
            small
            style="Secondary"
            button="Join"
          />
          <Button
            alternate={false}
            iconPosition="No icon"
            small
            style="Primary"
            button="Learn"
          />
        </div>
      </div>

      {/* Hamburger Menu Button (Visible on Large Screens - above 1200px) */}
      <button 
        className="hidden lg:flex flex-col justify-center items-center space-y-1.5 p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Navigation Menu - only shows when menu is open and on large screens */}
      {menuOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-whitesmoke-200 z-50 shadow-lg hidden lg:block"
        >
          <nav className="flex flex-col items-center justify-center gap-4 py-4 text-center text-base text-color-scheme-1-text font-heading-desktop-h6">
            <Link
              to="/home"
              className="w-full py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="w-full py-2"
              onClick={() => setMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link
              to="/"
              className="w-full py-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="flex flex-col items-center justify-center gap-3 mt-4">
              <Button
                alternate={false}
                iconPosition="No icon"
                small
                style="Secondary"
                button="Join"
                className="w-[80%]"
              />
              <Button
                alternate={false}
                iconPosition="No icon"
                small
                style="Primary"
                button="Learn"
                className="w-[80%]"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  companyLogo: PropTypes.string,

  /** Style props */
  navLinksMargin: PropTypes.string,
};

export default Navbar;