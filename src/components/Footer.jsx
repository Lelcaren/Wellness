import { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = ({ className = "", footerBackgroundColor, companyLogo }) => {
  const footerStyle = useMemo(() => {
    return {
      backgroundColor: footerBackgroundColor || "rgba(245, 245, 245, 0.96)",
    };
  }, [footerBackgroundColor]);

  return (
    <section
      className={`w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex flex-col items-center justify-start py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24 box-border gap-12 text-left font-urbanist ${className}`}
      style={footerStyle}
    >
      {/* Main Footer Content */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/home" className="block">
            <img
              className="w-[140px] h-[70px] md:w-[160px] md:h-[80px] object-contain hover:opacity-90 transition-opacity"
              loading="lazy"
              alt="Kiram Place Wellness Logo"
              src="/mainlogo.jpg"
            />
          </Link>
          <div className="text-sm md:text-base text-gray-600 font-body max-w-[300px] text-center md:text-left leading-relaxed">
            Empowering your journey to optimal health through holistic wellness and personalized nutrition coaching.
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <Link
              to="/home"
              className="relative text-base leading-[150%] font-medium text-gray-700 hover:text-green-600 transition-colors duration-200 hover:underline underline-offset-4 decoration-green-600"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="relative text-base leading-[150%] font-medium text-gray-700 hover:text-green-600 transition-colors duration-200 hover:underline underline-offset-4 decoration-green-600"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="relative text-base leading-[150%] font-medium text-gray-700 hover:text-green-600 transition-colors duration-200 hover:underline underline-offset-4 decoration-green-600"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="relative text-base leading-[150%] font-medium text-gray-700 hover:text-green-600 transition-colors duration-200 hover:underline underline-offset-4 decoration-green-600"
            >
              About Us
            </Link>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center gap-3">
            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Stay Updated
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm w-full sm:w-auto min-w-[200px]"
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info and Social Media */}
        <div className="flex flex-col items-center md:items-end gap-6">
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@kiramplace.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+254 123 456 789</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-200 group"
            >
              <svg className="h-5 w-5 text-gray-600 group-hover:text-green-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-200 group"
            >
              <svg className="h-5 w-5 text-gray-600 group-hover:text-green-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-200 group"
            >
              <svg className="h-5 w-5 text-gray-600 group-hover:text-green-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <footer className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-start gap-6">
        <div className="self-stretch relative border-gray-300 border-solid border-t-[1px] box-border h-px" />
        
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm md:text-base leading-[150%] text-gray-500 font-body">
            © 2025 Kiram Place Wellness. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to="/privacy"
              className="text-sm md:text-base hover:text-green-600 transition-colors leading-[150%] text-gray-500 hover:underline underline-offset-4 decoration-green-600"
            >
              Privacy Policy
            </Link>
            <div className="text-gray-400">•</div>
            <Link
              to="/terms"
              className="text-sm md:text-base hover:text-green-600 transition-colors leading-[150%] text-gray-500 hover:underline underline-offset-4 decoration-green-600"
            >
              Terms of Use
            </Link>
            <div className="text-gray-400">•</div>
            <Link
              to="/sitemap"
              className="text-sm md:text-base hover:text-green-600 transition-colors leading-[150%] text-gray-500 hover:underline underline-offset-4 decoration-green-600"
            >
              Sitemap
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