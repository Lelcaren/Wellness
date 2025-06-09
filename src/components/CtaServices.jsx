
import React from 'react';
import PropTypes from "prop-types";

const CtaServices = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 overflow-hidden flex flex-col items-center justify-start
         py-28 px-16 box-border text-left text-5xl text-color-white font-heading-desktop-h6 relative animate-fade-in
        lg:py-24 lg:px-12
        md:py-20 md:px-10 md:text-4xl
        sm:py-16 sm:px-8 sm:text-3xl
        xs:py-12 xs:px-6 xs:text-2xl ${className}`}
    >
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-green-400 bg-opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-blue-400 bg-opacity-40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-green-300 bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 bg-opacity-25 rounded-full animate-pulse"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        {/* Enhanced CTA Card with glassmorphism */}
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start
           py-16 px-16 bg-gradient-to-br from-green-600/90 via-green-700/90 to-blue-700/90 backdrop-blur-xl bg-cover bg-no-repeat bg-center rounded-3xl shadow-2xl border border-white border-opacity-20 relative group hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1
          lg:py-14 lg:px-12
          md:py-12 md:px-10
          sm:py-10 sm:px-8
          xs:py-8 xs:px-6"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(59, 130, 246, 0.9)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          {/* Enhanced background overlay with glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 via-green-700/80 to-blue-700/80 backdrop-blur-sm rounded-3xl"></div>
          
          {/* Subtle animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-16 left-16 w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>

          <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-8 relative z-10
            lg:gap-7 lg:max-w-[680px]
            md:gap-6 md:max-w-[600px]
            sm:gap-5 sm:max-w-full
            xs:gap-4 xs:items-center xs:text-center">
            
            <div className="self-stretch flex flex-col items-start justify-start gap-6
              lg:gap-5
              md:gap-4
              sm:gap-4
              xs:gap-3 xs:items-center">
              
              {/* Enhanced heading with better text shadow */}
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] break-words text-white drop-shadow-2xl
                lg:text-4xl lg:leading-[52px]
                md:text-3xl md:leading-[42px]
                sm:text-2xl sm:leading-[36px]
                xs:text-xl xs:leading-[30px]">
                <span className="bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
                  Explore Our Wellness Programs
                </span>
              </h1>
              
              {/* Enhanced description text */}
              <div className="self-stretch relative text-lg leading-[150%] break-words text-green-50 font-light drop-shadow-lg
                lg:text-base lg:leading-[145%]
                md:text-base md:leading-[140%]
                sm:text-sm sm:leading-[135%]
                xs:text-xs xs:leading-[130%]">
                Transform your health and well-being with our personalized
                wellness sessions tailored just for you.
              </div>
            </div>

            {/* Added feature highlights for CTA */}
            <div className="flex flex-row items-center gap-6 flex-wrap sm:justify-center sm:gap-4 xs:gap-3">
              <div className="flex flex-row items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30 shadow-lg hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-100">Expert Guidance</span>
              </div>
              
              <div className="flex flex-row items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30 shadow-lg hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-100">Personalized Plans</span>
              </div>
            </div>
            
            {/* Fixed button section with proper visibility */}
            <div className="flex flex-row flex-wrap items-start justify-start gap-4
              lg:gap-3
              md:gap-3
              sm:gap-2 sm:justify-center
              xs:gap-2 xs:flex-col xs:w-full xs:items-stretch">
              
              {/* Fixed Schedule button */}
              <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <button className="bg-white hover:bg-gray-50 text-green-700 px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/30 backdrop-blur-sm">
                  Schedule Now
                </button>
              </div>

              {/* Fixed Learn More button with better visibility */}
              <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <button className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/50 hover:border-white/70 backdrop-blur-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Floating badge on card */}
          <div className="absolute top-6 right-6 bg-gradient-to-r from-white/20 to-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white border-opacity-30 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-20">
            🌟 Premium Service
          </div>
        </div>
      </div>

      {/* Additional stats section */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-row items-center justify-center gap-12 mt-16 text-gray-600 relative z-10 lg:gap-8 lg:mt-12 md:gap-6 md:mt-10 sm:flex-col sm:gap-4 sm:mt-8">
        
        <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
          <div className="text-2xl font-bold text-green-600">Wellness</div>
          <div className="text-sm font-medium tracking-wide">Focused</div>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
          <div className="text-2xl font-bold text-blue-600">Tailored</div>
          <div className="text-sm font-medium tracking-wide">Programs</div>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
          <div className="text-2xl font-bold text-green-600">Results</div>
          <div className="text-sm font-medium tracking-wide">Driven</div>
        </div>
      </div>
    </section>
  );
};

CtaServices.propTypes = {
  className: PropTypes.string,
};

export default CtaServices;