import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ className = "", companyLogo, navLinksMargin }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
      "px-8 py-3 rounded-wellness font-medium transition-all duration-300 text-base font-urbanist hover:shadow-wellness transform hover:scale-105";
    
    const buttonStyles = {
      Primary: "bg-wellness-green-500 text-white hover:bg-wellness-green-600 hover:shadow-wellness-hover",
      Secondary: "bg-white border-2 border-wellness-green-500 text-wellness-green-600 hover:bg-wellness-green-50 hover:border-wellness-green-600",
    };

    const handleClick = () => {
      if (button === "Join") {
        navigate("/contact");
      } else if (button === "Learn") {
        navigate("/services");
      }
    };

    return (
      <button onClick={handleClick} className={`${baseClasses} ${buttonStyles[style]} ${className}`}>
        {button}
      </button>
    );
  };

  return (
    <>
      {/* Add Urbanist font import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      
      {/* Full-width navbar container */}
      <header className={`w-full bg-white/95 backdrop-blur-sm border-b border-neutral-bg-200 shadow-wellness sticky top-0 z-50 ${className}`}>
        {/* Inner container with proper spacing */}
        <div className="max-w-container mx-auto h-20 box-border flex flex-row items-center justify-between py-0 px-8 xl:px-12 2xl:px-16">
          {/* Logo Section */}
          <div className="h-16 w-auto flex flex-row items-center justify-center">
            <Link to="/" className="transform hover:scale-105 transition-transform duration-200">
              <img
                className="h-12 w-auto relative rounded-lg overflow-hidden object-contain"
                loading="lazy"
                alt="Company Logo"
                src="mainlogo.jpg"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Better spacing for large screens */}
          <div className="flex flex-row items-center justify-center gap-12 xl:gap-16 lg-max:hidden">
            <nav
              className="m-0 flex flex-row items-center justify-end gap-10 xl:gap-12 text-left text-lg xl:text-xl font-urbanist"
              style={navLinksStyle}
            >
              <Link 
                to="/" 
                className="flex flex-row items-center justify-center hover:text-wellness-green-600 transition-colors duration-300 no-underline text-color-scheme-1-text font-medium relative group"
              >
                <div className="relative leading-[150%]">Home</div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-wellness-green-500 transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link 
                to="/services" 
                className="flex flex-row items-center justify-center hover:text-wellness-green-600 transition-colors duration-300 no-underline text-color-scheme-1-text font-medium relative group"
              >
                <div className="relative leading-[150%]">Our Services</div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-wellness-green-500 transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link 
                to="/contact" 
                className="flex flex-row items-center justify-center hover:text-wellness-green-600 transition-colors duration-300 no-underline text-color-scheme-1-text font-medium relative group"
              >
                <div className="relative leading-[150%]">Contact Us</div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-wellness-green-500 transition-all duration-300 group-hover:w-full"></div>
              </Link>
            </nav>
            
            {/* CTA Buttons with enhanced spacing */}
            <div className="flex flex-row items-center justify-center gap-6">
              <EnhancedButton style="Secondary" button="Join" />
              <EnhancedButton style="Primary" button="Learn" />
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            className="hidden lg-max:flex flex-col justify-center items-center space-y-1.5 p-3 cursor-pointer hover:bg-neutral-bg-100 rounded-wellness transition-all duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-wellness-green-600 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-wellness-green-600 transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-wellness-green-600 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-wellness-hover border-b border-neutral-bg-200 hidden lg-max:block animate-fade-in">
            <nav className="flex flex-col items-center justify-center gap-6 py-8 text-center text-base font-urbanist">
              <Link
                to="/"
                className="w-full py-3 hover:bg-wellness-green-50 hover:text-wellness-green-600 transition-all duration-200 no-underline font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="w-full py-3 hover:bg-wellness-green-50 hover:text-wellness-green-600 transition-all duration-200 no-underline font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="w-full py-3 hover:bg-wellness-green-50 hover:text-wellness-green-600 transition-all duration-200 no-underline font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              <div className="flex flex-col items-center justify-center gap-4 mt-6 w-4/5">
                <EnhancedButton style="Secondary" button="Join" className="w-full" />
                <EnhancedButton style="Primary" button="Learn" className="w-full" />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  companyLogo: PropTypes.string,
  navLinksMargin: PropTypes.string,
};

export default Navbar;