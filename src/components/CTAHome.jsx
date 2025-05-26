import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CTAHome = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate("/contact");
  };

  const handleLearnMoreClick = () => {
    navigate("/services");
  };

  // Enhanced Button component with onClick handling
  const Button = ({ style, button, onClick }) => {
    const baseClasses = "cursor-pointer py-3 px-6 rounded-3xs flex flex-row items-center justify-center";
    const buttonStyles = {
      Primary: "bg-blue-500 border-blue-500 border-solid border-[1px] text-white hover:bg-blue-600",
      Secondary: "bg-transparent border-color-scheme-1-text border-solid border-[1px] text-color-scheme-1-text hover:bg-gray-100"
    };

    return (
      <button 
        className={`${baseClasses} ${buttonStyles[style]}`}
        onClick={onClick}
      >
        <div className="relative text-base leading-[150%] font-heading-desktop-h6 text-left">
          {button}
        </div>
      </button>
    );
  };

  Button.propTypes = {
    style: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  return (
    <section
      className={`w-full bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-29xl text-color-scheme-1-text font-heading-desktop-h6 lg:py-20 lg:px-20 md:py-14 md:px-8 sm:py-8 sm:px-4 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-start flex-wrap content-center gap-20 lg:gap-16 md:gap-10 sm:flex-col sm:items-center sm:gap-6">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] max-w-full lg:gap-6 md:gap-4 sm:items-center sm:gap-4 sm:min-w-full lg:text-left">
          <div className="self-stretch flex flex-col items-start justify-start gap-6 sm:items-center lg:max-w-[600px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] lg:text-26xl lg:leading-[60px] md:text-19xl md:leading-[46px] sm:text-10xl sm:leading-[35px]">
              Take Charge of Your Health
            </h1>
            <div className="self-stretch relative text-lg leading-[150%] lg:text-[22px] lg:leading-[34px] sm:text-base text-left lg:max-w-[600px]">
              Transform your well-being with personalized coaching and expert
              guidance tailored to your unique health goals.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-4 flex-wrap sm:justify-center">
            <Button
              style="Primary"
              button="Book"
              onClick={handleBookClick}
            />
            <Button
              style="Secondary"
              button="Learn More"
              onClick={handleLearnMoreClick}
            />
          </div>
        </div>
        {/* Image */}
        <img
          className="h-[400px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] lg:h-[350px] md:h-[300px] sm:h-auto sm:min-w-full"
          loading="lazy"
          alt=""
          src="/cta.jpg"
        />
      </div>
    </section>
  );
};

CTAHome.propTypes = {
  className: PropTypes.string,
};

export default CTAHome;
