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
      className={`w-full max-w-[1440px] overflow-hidden flex flex-col items-center justify-start py-10 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16 box-border gap-10 md:gap-16 lg:gap-20 text-left text-sm text-color-scheme-1-text font-heading-desktop-h6 ${className}`}
      style={footerStyle}
    >
      <div className="self-stretch flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Link to="/home">
            <img
              className="w-[108px] h-[54px] relative rounded-3xs overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt="Company Logo"
              src={companyLogo}
            />
          </Link>
        </div>
        
        <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
          <Link to="/home" className="relative leading-[150%] font-semibold hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link to="/services" className="relative leading-[150%] font-semibold hover:text-gray-600 transition-colors">
            Our Services
          </Link>
          <Link to="/" className="relative leading-[150%] font-semibold hover:text-gray-600 transition-colors">
            Contact Us
          </Link>
          <Link to="#" className="relative leading-[150%] font-semibold hover:text-gray-600 transition-colors">
            About Us
          </Link>
        </div>
        
        <div className="w-full md:w-auto flex justify-center md:justify-end gap-4">
          <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt="Facebook"
              src="/icon--facebook.svg"
            />
          </a>
          <a href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt="YouTube"
              src="/icon--youtube.svg"
            />
          </a>
        </div>
      </div>
      
      <footer className="self-stretch flex flex-col items-center justify-start gap-6 md:gap-8 text-center md:text-left text-sm text-color-scheme-1-text font-heading-desktop-h6">
        <div className="self-stretch relative border-color-scheme-1-text border-solid border-t-[1px] box-border h-px" />
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-6">
          <div className="relative leading-[150%]">
            © 2025 Your Organization. All rights reserved.
          </div>
          <div className="hidden md:block relative leading-[150%]">•</div>
          <Link to="#" className="relative hover:text-gray-600 transition-colors [text-decoration:underline] leading-[150%]">
            Privacy Policy
          </Link>
          <div className="hidden md:block relative leading-[150%]">•</div>
          <Link to="#" className="relative hover:text-gray-600 transition-colors [text-decoration:underline] leading-[150%]">
            Terms of Use
          </Link>
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
