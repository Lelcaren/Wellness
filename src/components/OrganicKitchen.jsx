import PropTypes from "prop-types";

const OrganicKitchen = ({
  className = "",
  heading,
  text,
  placeholderImage,
}) => {
  return (
    <section
      className={`w-full bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-21xl text-color-scheme-1-text font-heading-desktop-h6 relative animate-fade-in
        lg:px-12 lg:py-24
        md:pt-20 md:pb-20 md:box-border md:text-13xl md:leading-[38px]
        sm:gap-10 sm:px-8 sm:box-border sm:py-16
        xs:gap-5 xs:pt-10 xs:pb-10 xs:px-4 xs:box-border ${className}`}
    >
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-green-400 bg-opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-blue-400 bg-opacity-40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-green-300 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 bg-opacity-25 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-none xl:max-w-7xl mx-auto flex flex-row items-center justify-between gap-20 relative z-10 lg:gap-16 md:gap-12 sm:flex-col sm:items-center sm:gap-8">
        
        {/* Enhanced Text Section with glassmorphism */}
        <div className="w-full xl:flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-6 xl:min-w-[400px] lg:min-w-[350px] sm:min-w-full sm:items-center xl:max-w-[50%] animate-slide-up">
          
          {/* Enhanced heading with gradient text */}
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] drop-shadow-lg lg:text-5xl md:text-4xl sm:text-2xl sm:text-center">
            <span className="bg-gradient-to-r from-gray-800 via-green-700 to-blue-700 bg-clip-text text-transparent">
              {heading}
            </span>
          </h1>
          
          {/* Enhanced text with better styling */}
          <div className="self-stretch relative text-lg leading-[160%] text-gray-600 font-light lg:text-xl sm:text-base sm:text-center lg:leading-[32px]">
            {text}
          </div>

          {/* Added feature highlights */}
          <div className="flex flex-row items-center gap-8 mt-4 flex-wrap sm:justify-center sm:gap-6">
            <div className="flex flex-row items-center gap-2 bg-white bg-opacity-60 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Fresh Ingredients</span>
            </div>
            
            <div className="flex flex-row items-center gap-2 bg-white bg-opacity-60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Organic Certified</span>
            </div>
          </div>

          {/* Enhanced CTA button */}
          <div className="mt-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-400">
              Explore Our Kitchen
            </button>
          </div>
        </div>

        {/* Enhanced Image Section with glassmorphism frame */}
        <div className="h-[640px] lg:h-[500px] md:h-[400px] sm:h-[300px] w-full xl:flex-1 xl:max-w-[50%] relative overflow-hidden lg:min-w-[450px] sm:min-w-full animate-slide-up delay-100">
          
          {/* Glassmorphism container for image */}
          <div className="relative w-full h-full bg-white bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white border-opacity-50 p-6 hover:bg-opacity-80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden">
            {/* Subtle background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-transparent to-blue-100/30 pointer-events-none rounded-3xl"></div>
            
            {/* Enhanced image with better styling */}
            <img
              className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10 transition-all duration-500 group-hover:scale-105"
              loading="lazy"
              alt="Organic Kitchen Illustration"
              src={placeholderImage}
            />

            {/* Floating badge */}
            <div className="absolute top-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-green-400 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-20">
              ✨ Premium Quality
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
      <div className="w-full max-w-none xl:max-w-7xl mx-auto flex flex-row items-center justify-center gap-12 mt-16 text-gray-600 relative z-10 animate-slide-up delay-200 lg:gap-8 lg:mt-12 md:gap-6 md:mt-10 sm:flex-col sm:gap-4 sm:mt-8">
        
        <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
          <div className="text-2xl font-bold text-green-600">Farm-Fresh</div>
          <div className="text-sm font-medium tracking-wide">Daily Sourcing</div>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
          <div className="text-2xl font-bold text-blue-600">100%</div>
          <div className="text-sm font-medium tracking-wide">Organic Certified</div>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
          <div className="text-2xl font-bold text-green-600">Zero</div>
          <div className="text-sm font-medium tracking-wide">Waste Commitment</div>
        </div>
      </div>
    </section>
  );
};

OrganicKitchen.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  placeholderImage: PropTypes.string,
};

export default OrganicKitchen;
