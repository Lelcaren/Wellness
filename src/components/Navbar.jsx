import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
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

  const EnhancedButton = ({ style, button, className = "" }) => {
    const baseClasses =
      "px-5 py-2 rounded-md font-medium transition-all duration-200 text-sm";
    const buttonStyles = {
      Primary:
        "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md",
      Secondary:
        "bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 hover:shadow-sm",
    };

    return (
      <button className={`${baseClasses} ${buttonStyles[style]} ${className}`}>
        {button}
      </button>
    );
  };

  return (
    <header
      className={`w-full max-w-screen-xl h-16 bg-whitesmoke-200 box-border flex flex-row items-center justify-between py-0 px-6 relative shadow-sm ${className}`}
    >
      {/* Logo */}
      <div className="h-16 w-32 flex flex-row items-center justify-center">
        <Link to="/">
          <img
            className="h-12 w-auto relative rounded-sm overflow-hidden object-contain"
            loading="lazy"
            alt="Company Logo"
            src={companyLogo}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="flex flex-row items-center justify-center gap-4 lg:hidden">
        <nav
          className="m-0 flex flex-row items-center justify-end gap-6 text-left text-base text-color-scheme-1-text font-heading-desktop-h6"
          style={navLinksStyle}
        >
          <Link to="/" className="flex flex-row items-center justify-center hover:text-blue-600 transition-colors duration-200 no-underline">
            <div className="relative leading-[150%]">Home</div>
          </Link>
          <Link to="/services" className="flex flex-row items-center justify-center hover:text-blue-600 transition-colors duration-200 no-underline">
            <div className="relative leading-[150%]">Our Services</div>
          </Link>
          <Link to="/contact" className="flex flex-row items-center justify-center hover:text-blue-600 transition-colors duration-200 no-underline">
            <div className="relative leading-[150%]">Contact Us</div>
          </Link>
        </nav>
        <div className="flex flex-row items-center justify-center gap-3">
          <EnhancedButton style="Secondary" button="Join" />
          <EnhancedButton style="Primary" button="Learn" />
        </div>
      </div>

      {/* Hamburger Menu */}
      <button
        className="hidden lg:flex flex-col justify-center items-center space-y-1.5 p-2 cursor-pointer hover:bg-gray-100 rounded transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-whitesmoke-200 z-50 shadow-lg hidden lg:block">
          <nav className="flex flex-col items-center justify-center gap-4 py-4 text-center text-base text-color-scheme-1-text font-heading-desktop-h6">
            <Link
              to="/"
              className="w-full py-2 hover:bg-gray-100 transition-colors duration-200 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="w-full py-2 hover:bg-gray-100 transition-colors duration-200 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="w-full py-2 hover:bg-gray-100 transition-colors duration-200 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="flex flex-col items-center justify-center gap-3 mt-4 w-4/5">
              <EnhancedButton style="Secondary" button="Join" className="w-full" />
              <EnhancedButton style="Primary" button="Learn" className="w-full" />
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
  navLinksMargin: PropTypes.string,
};

export default Navbar;
