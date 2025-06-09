import { useMemo } from "react";
import PropTypes from "prop-types";

const IdealWeight = ({
  className = "",
  idealWeightBackgroundColor,
  heading,
  text,
  button1,
  placeholderImage,
  onButtonClick,
}) => {
  const idealWeightStyle = useMemo(() => {
    return {
      backgroundColor: idealWeightBackgroundColor,
    };
  }, [idealWeightBackgroundColor]);

  return (
    <section
      className={`w-full bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 overflow-hidden flex flex-col items-start justify-start py-16 px-8 sm:py-20 sm:px-12 md:py-24 md:px-16 lg:py-28 lg:px-20 xl:py-32 xl:px-28 2xl:px-32 box-border text-left text-base text-color-scheme-1-text font-heading-desktop-h6 relative animate-fade-in ${className}`}
      style={idealWeightStyle}
    >
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-green-400 bg-opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-blue-400 bg-opacity-40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-green-300 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 bg-opacity-25 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto flex flex-row items-center justify-start flex-wrap content-center gap-12 sm:gap-16 lg:gap-20 xl:gap-24 sm:items-center sm:justify-center relative z-10">
        
        {/* Enhanced Content Section with glassmorphism */}
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 sm:gap-6 md:gap-8 min-w-[300px] max-w-[600px] lg:max-w-[650px] xl:max-w-[700px] sm:min-w-full sm:items-center animate-slide-up">
          
          <div className="self-stretch flex flex-col items-start justify-start gap-6 sm:items-center">
            {/* Enhanced transform label */}
            <div className="relative leading-[150%] font-semibold text-lg sm:text-base md:text-xl lg:text-2xl xl:text-2xl text-left sm:text-center">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
                Transform
              </span>
            </div>
            
            <div className="self-stretch flex flex-col items-start justify-start gap-4 sm:items-center">
              {/* Enhanced heading with gradient text */}
              <h1 className="m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-[120%] font-bold text-left sm:text-center drop-shadow-lg">
                <span className="bg-gradient-to-r from-gray-800 via-green-700 to-blue-700 bg-clip-text text-transparent">
                  {heading}
                </span>
              </h1>
              
              {/* Enhanced text with better styling */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[160%] text-gray-600 font-light text-left sm:text-center">
                {text}
              </p>
            </div>
          </div>

          {/* Added feature highlights */}
          <div className="flex flex-row items-center gap-8 mt-4 flex-wrap sm:justify-center sm:gap-6">
            <div className="flex flex-row items-center gap-2 bg-white bg-opacity-60 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Personalized Plan</span>
            </div>
            
            <div className="flex flex-row items-center gap-2 bg-white bg-opacity-60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Science-Based</span>
            </div>
          </div>

          {/* Enhanced Button - Only Sign Up/Get Started */}
          <div className="flex flex-row items-center justify-start sm:justify-center">
            <button
              className="flex flex-row items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-400 transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
              onClick={onButtonClick}
            >
              <span>{button1}</span>
              <div className="bg-white bg-opacity-20 p-1 rounded-full">
                <img
                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 filter brightness-0 invert"
                  alt="Chevron Icon"
                  src="/icon--chevronright.svg"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Image Section with glassmorphism frame */}
        <div className="h-[300px] sm:h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex-1 relative max-w-full overflow-hidden sm:w-full animate-slide-up delay-100">
          
          {/* Glassmorphism container for image */}
          <div className="relative w-full h-full bg-white bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white border-opacity-50 p-6 hover:bg-opacity-80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden">
            {/* Subtle background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-transparent to-blue-100/30 pointer-events-none rounded-3xl"></div>
            
            {/* Enhanced image with better styling */}
            <img
              className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10 transition-all duration-500 group-hover:scale-105"
              loading="lazy"
              alt="Ideal Weight Illustration"
              src={placeholderImage}
            />

            {/* Floating badge */}
            <div className="absolute top-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-green-400 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-20">
              🎯 Goal Focused
            </div>

            {/* Corner decorative elements */}
            <div className="absolute bottom-8 left-8 flex flex-row gap-2 z-20">
              <div className="w-3 h-3 bg-green-400 bg-opacity-60 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-400 bg-opacity-60 rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-green-300 bg-opacity-60 rounded-full animate-pulse delay-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional stats section */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-row items-center justify-center gap-12 mt-16 text-gray-600 relative z-10 animate-slide-up delay-200 lg:gap-8 lg:mt-12 md:gap-6 md:mt-10 sm:flex-col sm:gap-4 sm:mt-8">
        
        <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
          <div className="text-2xl font-bold text-green-600">Healthy</div>
          <div className="text-sm font-medium tracking-wide">Weight Goals</div>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
          <div className="text-2xl font-bold text-blue-600">Custom</div>
          <div className="text-sm font-medium tracking-wide">Approach</div>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
          <div className="text-2xl font-bold text-green-600">Sustainable</div>
          <div className="text-sm font-medium tracking-wide">Results</div>
        </div>
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
  onButtonClick: PropTypes.func,
};

export default IdealWeight;


