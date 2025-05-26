import { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = ({ className = "", footerBackgroundColor, companyLogo }) => {
  const footerStyle = useMemo(() => {
    return {
      backgroundColor: footerBackgroundColor,
    };
  }, [footerBackgroundColor]);

  return (
    <section
      className={`w-full overflow-hidden flex flex-col items-center justify-start py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24 box-border gap-12 text-left text-sm text-color-scheme-1-text font-heading-desktop-h6 ${className}`}
      style={footerStyle}
    >
      {/* Main Footer Content */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Link to="/home" className="block">
            <img
              className="w-[120px] h-[60px] md:w-[136px] md:h-[68px] object-contain"
              loading="lazy"
              alt="Company Logo"
              src={companyLogo}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-center gap-6 md:gap-8 lg:gap-12">
          <Link
            to="/home"
            className="relative text-base leading-[150%] font-medium hover:text-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="relative text-base leading-[150%] font-medium hover:text-gray-600 transition-colors"
          >
            Our Services
          </Link>
          <Link
            to="/"
            className="relative text-base leading-[150%] font-medium hover:text-gray-600 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="#"
            className="relative text-base leading-[150%] font-medium hover:text-gray-600 transition-colors"
          >
            About Us
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex justify-center md:justify-end gap-6">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              className="h-6 w-6 md:h-8 md:w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt="Facebook"
              src="/icon--facebook.svg"
            />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              className="h-6 w-6 md:h-8 md:w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt="YouTube"
              src="/icon--youtube.svg"
            />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <footer className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-start gap-6">
        <div className="self-stretch relative border-color-scheme-1-text border-solid border-t-[1px] opacity-20 box-border h-px" />
        
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm md:text-base leading-[150%] text-gray-500">
            © 2025 Your Organization. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to="#"
              className="text-sm md:text-base hover:text-gray-600 transition-colors leading-[150%] text-gray-500 hover:underline"
            >
              Privacy Policy
            </Link>
            <div className="text-gray-400">•</div>
            <Link
              to="#"
              className="text-sm md:text-base hover:text-gray-600 transition-colors leading-[150%] text-gray-500 hover:underline"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  companyLogo: PropTypes.string,
  /** Style props */
  footerBackgroundColor: PropTypes.string,
};

export default Footer;