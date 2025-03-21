import { useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";

const Navbar = ({ className = "", companyLogo, navLinksMargin }) => {
  const navLinksStyle = useMemo(() => {
    return {
      margin: navLinksMargin,
    };
  }, [navLinksMargin]);

  return (
    <header
      className={`w-full max-w-screen-xl h-16 bg-whitesmoke-200 box-border flex flex-row items-center justify-between py-0 px-6 ${className}`}
    >
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
      <div className="flex flex-row items-center justify-center gap-4">
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