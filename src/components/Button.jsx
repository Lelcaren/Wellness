import PropTypes from "prop-types";

const Button = ({
  className = "",
  alternate = false,
  iconPosition = "No icon",
  small = false,
  style = "Primary",
  button,
}) => {
  return (
    <button
      className={`cursor-pointer border border-color-scheme-1-text border-solid 
                  py-2 px-5 bg-white text-black 
                  rounded-3xs flex flex-row items-center justify-center 
                  ${className}`}
      data-alternate={alternate}
      data-iconPosition={iconPosition}
      data-small={small}
      data-style={style}
    >
      <div className="relative text-base leading-[150%] font-heading-desktop-h6 text-black text-left">
        {button}
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  button: PropTypes.string,

  /** Variant props */
  alternate: PropTypes.bool,
  iconPosition: PropTypes.string,
  small: PropTypes.bool,
  style: PropTypes.string,
};

export default Button;
