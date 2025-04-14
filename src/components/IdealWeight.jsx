import { useMemo } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const IdealWeight = ({
  className = "",
  idealWeightBackgroundColor,
  heading,
  text,
  button1,
  placeholderImage,
}) => {
  const idealWeightStyle = useMemo(() => {
    return {
      backgroundColor: idealWeightBackgroundColor,
    };
  }, [idealWeightBackgroundColor]);

  return (
    <section
      className={`w-full max-w-full bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-16 px-8 sm:py-20 sm:px-12 md:py-24 md:px-16 lg:py-28 lg:px-20 xl:py-32 xl:px-28 box-border text-left text-base text-color-scheme-1-text font-heading-desktop-h6 ${className}`}
      style={idealWeightStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-12 sm:gap-16 lg:gap-20 sm:items-center sm:justify-center">
        {/* Content Section */}
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 sm:gap-6 md:gap-8 min-w-[300px] max-w-[600px] lg:max-w-[650px] sm:min-w-full sm:items-center">
          <div className="self-stretch flex flex-col items-start justify-start gap-6 sm:items-center">
            <div className="relative leading-[150%] font-semibold text-lg sm:text-base md:text-xl lg:text-2xl xl:text-2xl text-left sm:text-center">
              Transform
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 sm:items-center">
              <h1 className="m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-[120%] font-bold text-left sm:text-center">
                {heading}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[150%] text-gray-700 text-left sm:text-center">
                {text}
              </p>
            </div>
          </div>
          {/* Buttons - Fixed alignment */}
          <div className="flex flex-row items-center justify-start gap-4 sm:gap-6 flex-wrap sm:justify-center">
            <Button
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Secondary"
              button="Learn"
            />
            <button className="flex flex-row items-center justify-center gap-2 text-blue-600 font-semibold cursor-pointer">
              <span>{button1}</span>
              <img
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                alt="Chevron Icon"
                src="/icon--chevronright.svg"
              />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <img
          className="h-[300px] sm:h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex-1 relative max-w-full overflow-hidden object-cover sm:w-full"
          alt="Ideal Weight Illustration"
          src={placeholderImage}
        />
      </div>
    </section>
  );
};

IdealWeight.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  button1: PropTypes.string,
  placeholderImage: PropTypes.string,
  idealWeightBackgroundColor: PropTypes.string, // Style props
};

export default IdealWeight;


