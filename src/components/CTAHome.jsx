import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CTAHome = ({ className = "", onButtonClick }) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      navigate("/contact");
    }
  };

  return (
    <section
      className={`w-full bg-gradient-to-br from-green-50 to-green-100 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-29xl text-gray-800 font-urbanist animate-fade-in lg:py-20 lg:px-12 md:py-14 md:px-8 sm:py-10 sm:px-4 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-start flex-wrap content-center gap-20 lg:gap-16 md:gap-10 sm:flex-col sm:items-center sm:gap-8">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] max-w-full lg:gap-6 md:gap-4 sm:items-center sm:gap-6 sm:min-w-full animate-slide-up">
          <div className="self-stretch flex flex-col items-start justify-start gap-6 sm:items-center lg:max-w-[600px]">
            {/* Small Label */}
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-semibold text-green-600 uppercase tracking-wider text-sm">
                Get Started
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-urbanist text-gray-800 lg:text-26xl lg:leading-[54px] md:text-19xl md:leading-[46px] sm:text-15xl sm:leading-[40px] xs:text-10xl xs:leading-[35px]">
              Take Charge of Your Health Journey
            </h1>
            
            {/* Description */}
            <div className="self-stretch relative text-lg leading-[150%] font-body text-gray-600 lg:text-[18px] lg:leading-[28px] md:text-base sm:text-base">
              Transform your well-being with personalized coaching and expert
              guidance tailored to your unique health goals. Start your journey
              toward optimal wellness today.
            </div>
          </div>
          
          {/* Button */}
          <div className="flex flex-row items-start justify-start sm:justify-center">
            <button
              className="cursor-pointer border-green-500 border-solid border-2 py-4 px-8 
                bg-green-600 hover:bg-green-700 rounded-lg 
                flex flex-row items-center justify-center gap-2 transition-all duration-300 
                shadow-lg hover:shadow-xl transform hover:scale-105 group"
              onClick={handleBookClick}
            >
              <div className="relative text-base leading-[150%] font-urbanist font-semibold text-white text-left">
                Book Your Consultation
              </div>
              <svg 
                className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Image */}
        <div className="flex-1 min-w-[400px] sm:min-w-full animate-slide-up">
          <img
            className="w-full h-[400px] relative max-w-full overflow-hidden object-cover rounded-2xl shadow-lg
              lg:h-[350px] md:h-[300px] sm:h-[250px]"
            loading="lazy"
            alt="Wellness consultation and healthy lifestyle"
            src="/cta.jpg"
          />
        </div>
      </div>
    </section>
  );
};

CTAHome.propTypes = {
  className: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default CTAHome;
