import Button from "./Button";
import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <section
      className={`w-full min-h-[663px] h-[663px] overflow-hidden flex flex-col items-center justify-center py-28 px-16 box-border bg-[url('/public/hero@3x.png')] bg-cover bg-no-repeat bg-center text-center text-base text-color-white font-heading-desktop-h6 relative animate-fade-in
        lg:py-20 lg:px-12 lg:h-[580px]
        md:py-14 md:px-8 md:h-[520px]
        sm:py-10 sm:px-4 sm:h-[480px]
        xs:py-8 xs:px-3 xs:h-[420px]
        mq450:gap-5 mq450:pt-[73px] mq450:pb-[73px] mq450:box-border 
        mq1050:gap-10 mq1050:pl-8 mq1050:pr-8 mq1050:box-border ${className}`}
    >
      {/* Enhanced overlay with gradient for better visual depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 backdrop-blur-[1px]"></div>
      
      <div className="w-full max-w-[768px] xl:max-w-[900px] 2xl:max-w-[1024px] mx-auto flex flex-col items-center justify-start gap-8 relative z-10 animate-slide-up mq450:gap-4">
        <div className="self-stretch flex flex-col items-center justify-start gap-6 xs:gap-4">
          {/* Enhanced label with modern glassmorphism */}
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-semibold text-green-400 uppercase tracking-widest text-sm bg-white bg-opacity-10 px-6 py-3 rounded-full backdrop-blur-md border border-white border-opacity-20 shadow-lg hover:bg-opacity-15 transition-all duration-300">
              ✨ Wellness Revolution
            </div>
          </div>
          
          <div className="self-stretch flex flex-col items-center justify-start gap-8 text-37xl xs:gap-6">
            {/* Enhanced main heading with improved typography and effects */}
            <h1 className="m-0 self-stretch relative text-inherit leading-[115%] font-bold font-[inherit] text-white drop-shadow-2xl animate-slide-up
              mq450:text-15xl mq450:leading-[42px] 
              mq1050:text-26xl mq1050:leading-[56px] 
              xl:text-[4.2rem] xl:leading-[4.8rem] 
              2xl:text-[4.8rem] 2xl:leading-[5.5rem]
              sm:text-4xl sm:leading-[44px]
              xs:text-3xl xs:leading-[36px]">
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                Transform Your Health Journey
              </span>
            </h1>
            
            {/* Enhanced description with better styling and spacing */}
            <div className="self-stretch relative text-xl leading-[160%] text-gray-100 max-w-[650px] mx-auto drop-shadow-lg font-light
              xl:text-xl xl:leading-[170%] 
              2xl:text-xl 2xl:leading-[170%]
              lg:text-lg lg:leading-[160%]
              md:text-base md:leading-[150%]
              sm:text-base sm:leading-[150%]
              xs:text-sm xs:leading-[145%]">
              Discover personalized wellness solutions designed to empower your transformation. 
              Experience comprehensive services that enhance your health and well-being journey with 
              <span className="text-green-300 font-medium"> expert guidance</span> every step of the way.
            </div>
          </div>
        </div>
        
        {/* Enhanced button section with improved layout and effects */}
        <div className="flex flex-row items-center justify-center gap-6 xl:gap-8 sm:flex-col sm:w-full sm:max-w-[320px] sm:gap-4 xs:gap-3">
          <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 sm:w-full">
            <Button
              alternate
              iconPosition="No icon"
              small={false}
              style="Primary"
              button="Start Your Journey"
              className="shadow-xl hover:shadow-2xl bg-green-600 hover:bg-green-700 border-green-500 text-white px-8 py-4 font-semibold text-base transition-all duration-300"
            />
          </div>
          <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 sm:w-full">
            <Button
              alternate
              iconPosition="No icon"
              small={false}
              style="Secondary"
              button="Learn More"
              className="shadow-xl hover:shadow-2xl backdrop-blur-md bg-white bg-opacity-10 hover:bg-opacity-20 border-white border-opacity-30 text-white px-8 py-4 font-semibold text-base transition-all duration-300"
            />
          </div>
        </div>
        
        {/* Enhanced trust indicators with modern card design */}
        <div className="flex flex-row items-center justify-center gap-12 mt-8 text-white
          lg:gap-8 lg:mt-6
          md:gap-6 md:mt-4
          sm:flex-col sm:gap-4 sm:mt-6
          xs:hidden">
          
          <div className="flex flex-col items-center gap-2 bg-white bg-opacity-10 backdrop-blur-md px-6 py-4 rounded-xl border border-white border-opacity-20 shadow-lg hover:bg-opacity-15 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-green-300 lg:text-2xl md:text-xl">500+</div>
            <div className="text-sm text-gray-200 font-medium tracking-wide lg:text-xs">Happy Clients</div>
          </div>

          <div className="flex flex-col items-center gap-2 bg-white bg-opacity-10 backdrop-blur-md px-6 py-4 rounded-xl border border-white border-opacity-20 shadow-lg hover:bg-opacity-15 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-green-300 lg:text-2xl md:text-xl">10+</div>
            <div className="text-sm text-gray-200 font-medium tracking-wide lg:text-xs">Years Experience</div>
          </div>

          <div className="flex flex-col items-center gap-2 bg-white bg-opacity-10 backdrop-blur-md px-6 py-4 rounded-xl border border-white border-opacity-20 shadow-lg hover:bg-opacity-15 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-green-300 lg:text-2xl md:text-xl">95%</div>
            <div className="text-sm text-gray-200 font-medium tracking-wide lg:text-xs">Success Rate</div>
          </div>
        </div>

        {/* Enhanced feature highlights for mobile */}
        <div className="hidden xs:flex flex-col items-center gap-3 mt-4 text-white text-opacity-90">
          <div className="flex flex-row items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Personalized Programs</span>
          </div>
          <div className="flex flex-row items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Expert Guidance</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with modern design */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce lg:bottom-6 md:bottom-4 sm:bottom-6 xs:hidden">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-3 rounded-full border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 transition-all duration-300">
          <svg 
            className="w-5 h-5 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Floating particles effect (optional decorative element) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 bg-opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white bg-opacity-40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-green-300 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;