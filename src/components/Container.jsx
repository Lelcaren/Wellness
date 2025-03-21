import Button from "./Button";
import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`w-[1396px] h-[72px] flex flex-row items-center justify-between gap-0 text-left text-base text-color-scheme-1-text font-heading-desktop-h6 ${className}`}
    >
      <div className="h-[72px] w-[130px] rounded-3xs flex flex-row items-center justify-center">
        <img
          className="h-[72px] w-[164px] relative rounded-3xs overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/company-logo@2x.png"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-8">
        <div className="flex flex-row items-center justify-end gap-8">
          <a className="[text-decoration:none] flex flex-row items-center justify-center text-[inherit]">
            <a className="[text-decoration:none] relative leading-[150%] text-[inherit]">
              Home
            </a>
          </a>
          <a className="[text-decoration:none] flex flex-row items-center justify-center text-[inherit]">
            <div className="relative leading-[150%]">Our Services</div>
          </a>
          <a className="[text-decoration:none] flex flex-row items-center justify-center text-[inherit]">
            <div className="relative leading-[150%]">Contact Us</div>
          </a>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
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
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
