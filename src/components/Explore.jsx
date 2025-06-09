import Column from "./Column";
import Button from "./Button";
import PropTypes from "prop-types";

const Explore = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border gap-20 text-left text-base text-color-scheme-1-text font-heading-desktop-h6 lg:py-24 lg:px-20 md:py-20 md:px-16 sm:py-16 sm:px-8 relative animate-fade-in ${className}`}
    >
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-green-400 bg-opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 bg-opacity-40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-green-300 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-blue-300 bg-opacity-25 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-none xl:max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
        {/* Enhanced Header Section */}
        <div className="w-full flex flex-row items-start justify-between gap-20 lg:gap-16 md:gap-12 sm:flex-col sm:items-center sm:gap-8 animate-slide-up">
          <div className="w-full xl:flex-1 xl:max-w-[50%] overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[300px] sm:min-w-full sm:items-center">
            {/* Enhanced label with glassmorphism */}
            <div className="flex flex-row items-center justify-start sm:justify-center">
              <div className="relative leading-[150%] font-semibold text-green-600 uppercase tracking-widest text-sm bg-white bg-opacity-60 px-6 py-3 rounded-full backdrop-blur-md border border-green-200 shadow-lg hover:bg-opacity-80 transition-all duration-300">
                ✨ Services
              </div>
            </div>
            
            {/* Enhanced main heading with gradient text */}
            <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-[inherit] drop-shadow-lg lg:text-4xl md:text-3xl sm:text-2xl sm:text-center sm:leading-[40px] xl:text-5xl xl:leading-[60px] 2xl:text-6xl 2xl:leading-[72px]">
              <span className="bg-gradient-to-r from-gray-800 via-green-700 to-blue-700 bg-clip-text text-transparent">
                Explore Our Comprehensive Wellness Offerings
              </span>
            </h1>
          </div>

          {/* Enhanced description with better styling */}
          <div className="w-full xl:flex-1 xl:max-w-[50%] relative text-lg leading-[160%] inline-block min-w-[300px] sm:min-w-full sm:text-base sm:text-center xl:text-xl xl:leading-[180%] text-gray-600 font-light">
            Our online booking services provide a seamless way to access
            <span className="text-green-600 font-medium"> personalized health support</span>. 
            Whether you prefer one-on-one consultations or engaging cooking classes, we cater to your unique
            wellness needs. Experience the convenience of 
            <span className="text-blue-600 font-medium"> short-term in-house services</span> 
            designed to empower your health journey.
          </div>
        </div>

        {/* Enhanced Services Section with glassmorphism */}
        <div className="w-full bg-white bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white border-opacity-50 flex flex-col items-start justify-start p-12 text-13xl lg:px-16 md:px-12 sm:px-8 sm:gap-8 sm:items-center xl:px-20 2xl:px-24 relative overflow-hidden animate-slide-up delay-100">
          {/* Subtle background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-transparent to-blue-100/30 pointer-events-none"></div>
          
          {/* Enhanced service cards container */}
          <div className="w-full flex flex-row items-start justify-between gap-12 lg:gap-8 md:gap-6 sm:gap-8 sm:flex-col sm:items-center xl:gap-16 relative z-10">
            {/* Enhanced Column 1 */}
            <div className="flex-1 flex flex-col items-start justify-start gap-6 bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-green-100 hover:border-green-200 group sm:items-center sm:text-center">
              {/* Icon container with enhanced styling */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-2">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              <div className="self-stretch flex flex-col items-start justify-start gap-4 sm:items-center">
                <h3 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] text-gray-800 group-hover:text-green-700 transition-colors duration-300 sm:text-center">
                  Personalized One-on-One Consultations
                </h3>
                <div className="self-stretch relative text-base leading-[160%] text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-light sm:text-center">
                  Receive tailored guidance to achieve your health goals with expert nutritional coaching and personalized wellness plans.
                </div>
              </div>

              {/* Enhanced learn more link */}
              <div className="flex flex-row items-center justify-start gap-2 text-green-600 font-semibold hover:text-green-700 cursor-pointer transition-all duration-300 group-hover:gap-3 text-sm sm:justify-center">
                <span>Learn More</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Enhanced Column 2 */}
            <div className="flex-1 flex flex-col items-start justify-start gap-6 bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-blue-100 hover:border-blue-200 group delay-100 sm:items-center sm:text-center">
              {/* Icon container with enhanced styling */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-2">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <div className="self-stretch flex flex-col items-start justify-start gap-4 sm:items-center">
                <h3 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] text-gray-800 group-hover:text-blue-700 transition-colors duration-300 sm:text-center">
                  Engaging Coaching & Cooking Classes
                </h3>
                <div className="self-stretch relative text-base leading-[160%] text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-light sm:text-center">
                  Learn to prepare nutritious meals while developing healthy habits through interactive and educational cooking experiences.
                </div>
              </div>

              {/* Enhanced learn more link */}
              <div className="flex flex-row items-center justify-start gap-2 text-blue-600 font-semibold hover:text-blue-700 cursor-pointer transition-all duration-300 group-hover:gap-3 text-sm sm:justify-center">
                <span>Explore Classes</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Enhanced Column 3 */}
            <div className="flex-1 flex flex-col items-start justify-start gap-6 bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-green-100 hover:border-green-200 group delay-200 sm:items-center sm:text-center">
              {/* Icon container with enhanced styling */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-2">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              
              <div className="self-stretch flex flex-col items-start justify-start gap-4 sm:items-center">
                <h3 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] text-gray-800 group-hover:text-green-700 transition-colors duration-300 sm:text-center">
                  Hands-On Short-Term In-House Services
                </h3>
                <div className="self-stretch relative text-base leading-[160%] text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-light sm:text-center">
                  Experience personalized coaching and wellness therapy in person with our comprehensive in-house wellness programs.
                </div>
              </div>

              {/* Enhanced learn more link */}
              <div className="flex flex-row items-center justify-start gap-2 text-green-600 font-semibold hover:text-green-700 cursor-pointer transition-all duration-300 group-hover:gap-3 text-sm sm:justify-center">
                <span>Book Now</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="flex flex-row items-center justify-start gap-8 sm:justify-center sm:gap-6 xl:gap-10 animate-slide-up delay-200">
          {/* Enhanced primary button */}
          <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <Button
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Secondary"
              button="Book Now"
              className="shadow-xl hover:shadow-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-400 text-white px-8 py-4 font-semibold text-base transition-all duration-300"
            />
          </div>

          {/* Enhanced secondary action with glassmorphism */}
          <div className="overflow-hidden flex flex-row items-center justify-center gap-3 xl:gap-4 cursor-pointer group bg-white bg-opacity-40 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-50 shadow-lg hover:bg-opacity-60 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="relative leading-[150%] xl:text-lg font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
              Learn More
            </div>
            <svg
              className="h-6 w-6 relative overflow-hidden shrink-0 xl:h-7 xl:w-7 text-gray-600 group-hover:text-gray-700 transition-all duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Additional feature highlights */}
        <div className="flex flex-row items-center justify-center gap-12 mt-4 text-gray-600 lg:gap-8 md:gap-6 sm:flex-col sm:gap-4 animate-slide-up delay-300">
          <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl font-bold text-green-600">100+</div>
            <div className="text-sm font-medium tracking-wide">Success Stories</div>
          </div>

          <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm font-medium tracking-wide">Support Available</div>
          </div>

          <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl font-bold text-green-600">Flexible</div>
            <div className="text-sm font-medium tracking-wide">Scheduling</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Explore.propTypes = {
  className: PropTypes.string,
};

export default Explore;

