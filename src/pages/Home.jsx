import Navbar from "../components/Navbar";
import Empowering from "../components/Empowering";
import IdealWeight from "../components/IdealWeight";
import CTAHome from "../components/CTAHome";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Navigate to Contact page
  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar companyLogo="/company-logo@2x.png" navLinksMargin="unset" />
      
      {/* Enhanced Hero Section with Hero styling */}
      <section
        className={`w-full min-h-[900px] h-[900px] overflow-hidden shrink-0 flex flex-col items-center justify-center 
          py-28 px-16 box-border bg-[url('/public/hero1@3x.png')] bg-cover bg-no-repeat bg-center 
          text-center text-37xl text-color-white font-urbanist relative animate-fade-in
          lg:py-20 lg:px-12 lg:h-[800px]
          md:py-14 md:px-10 md:h-[700px]
          sm:py-10 sm:px-8 sm:h-[650px]
          xs:py-8 xs:px-6 xs:h-[580px] xs:text-left`}
      >
        {/* Enhanced overlay with gradient for better visual depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/35 to-black/55 backdrop-blur-[1px]"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 bg-opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white bg-opacity-40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-green-300 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="w-full max-w-[900px] xl:max-w-[1024px] 2xl:max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-8 relative z-10 animate-slide-up xs:items-start">
          <div className="self-stretch flex flex-col items-center justify-start gap-8 xs:items-start xs:gap-6">
            {/* Enhanced label with modern glassmorphism */}
            <div className="flex flex-row items-center justify-start xs:justify-start">
              <div className="relative leading-[150%] font-semibold text-green-400 uppercase tracking-widest text-sm bg-white bg-opacity-10 px-6 py-3 rounded-full backdrop-blur-md border border-white border-opacity-20 shadow-lg hover:bg-opacity-15 transition-all duration-300">
                ✨ Holistic Wellness
              </div>
            </div>
            
            <div className="self-stretch flex flex-col items-center justify-start gap-8 xs:items-start xs:gap-6">
              {/* Enhanced main heading with improved typography and effects */}
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-urbanist text-white drop-shadow-2xl animate-slide-up xs:text-left
                lg:text-26xl lg:leading-[130%] 
                md:text-19xl md:leading-[125%] 
                sm:text-15xl sm:leading-[120%] 
                xs:text-10xl xs:leading-[115%]">
                <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                  Transform Your Life with Holistic Wellness
                </span>
              </h1>
              
              {/* Enhanced description with better styling and spacing */}
              <div className="self-stretch relative text-xl leading-[160%] text-gray-100 max-w-[700px] mx-auto drop-shadow-lg font-light xs:mx-0 xs:text-left
                lg:text-lg lg:leading-[150%]
                md:text-base md:leading-[145%] 
                sm:text-sm sm:leading-[140%] 
                xs:text-xs xs:leading-[135%]">
                At Kiram Place, we empower you to achieve optimal health through 
                <span className="text-green-300 font-medium"> nutritional coaching</span>. 
                Discover how our holistic approach can enhance your well-being and transform your lifestyle 
                with <span className="text-green-300 font-medium">expert guidance</span> every step of the way.
              </div>
            </div>
          </div>
          
          {/* Enhanced button section with improved layout and effects */}
          <div className="flex flex-row items-center justify-center gap-6 xl:gap-8 sm:flex-col sm:w-full sm:max-w-[320px] sm:gap-4 xs:gap-3 xs:flex-row xs:max-w-none">
            <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 sm:w-full xs:w-auto">
              <button
                className="cursor-pointer py-4 px-8 bg-green-600 hover:bg-green-700 rounded-lg 
                  border-2 border-green-500 shadow-xl hover:shadow-2xl
                  flex flex-row items-center justify-center transition-all duration-300 
                  text-base leading-[150%] font-urbanist font-semibold text-white"
                onClick={handleGetStarted}
              >
                Start Your Journey
              </button>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 sm:w-full xs:w-auto">
              <button
                className="cursor-pointer py-4 px-8 backdrop-blur-md bg-white bg-opacity-10 hover:bg-opacity-20 
                  border-2 border-white border-opacity-30 rounded-lg shadow-xl hover:shadow-2xl
                  flex flex-row items-center justify-center transition-all duration-300 
                  text-base leading-[150%] font-urbanist font-semibold text-white"
              >
                Learn More
              </button>
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
          <div className="hidden xs:flex flex-col items-start gap-3 mt-4 text-white text-opacity-90">
            <div className="flex flex-row items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Personalized Nutrition</span>
            </div>
            <div className="flex flex-row items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Holistic Approach</span>
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
      </section>

      <Empowering />
      <IdealWeight
        idealWeightBackgroundColor="rgba(245, 245, 245, 0.96)"
        heading="Your Path to Sustainable Well-Being"
        text="Experience personalized support with our expert guidance and flexible online booking options. Our in-house wellness services make it convenient for you to start your journey toward a healthier lifestyle."
        button1="Sign Up"
        placeholderImage="/placeholder-image1@2x.png"
        onButtonClick={handleGetStarted}
      />
      
      {/* Enhanced Why Choose Section with Hero styling influences */}
      <section className="w-full bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-20 text-center text-base text-gray-800 font-urbanist lg:py-16 lg:px-8 lg:gap-12 sm:py-10 sm:px-4 sm:gap-8 animate-fade-in relative">
        {/* Subtle background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-1/6 right-1/5 w-1 h-1 bg-green-400 bg-opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-green-300 bg-opacity-15 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-green-500 bg-opacity-10 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="w-full flex flex-col items-center gap-20 lg:gap-12 sm:gap-8 relative z-10">
          {/* Enhanced Header Section */}
          <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-6 animate-slide-up">
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-semibold text-green-600 uppercase tracking-widest text-sm bg-green-100 bg-opacity-70 px-6 py-3 rounded-full backdrop-blur-sm border border-green-200 shadow-md hover:bg-opacity-90 transition-all duration-300">
                ✨ Transform
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-6">
              <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-urbanist text-gray-800 drop-shadow-sm lg:text-21xl lg:leading-[130%] sm:text-15xl sm:leading-[120%]">
                <span className="bg-gradient-to-r from-gray-800 via-green-700 to-gray-800 bg-clip-text text-transparent">
                  Why Choose Our Wellness Services?
                </span>
              </h1>
              <div className="self-stretch relative text-lg leading-[160%] font-body text-gray-600 max-w-[650px] mx-auto sm:text-base">
                At Kiram Place, we prioritize your health with
                <span className="text-green-600 font-medium"> personalized coaching</span> and 
                <span className="text-green-600 font-medium"> expert guidance</span>. Our holistic approach
                empowers you to achieve your wellness goals effectively.
              </div>
            </div>
          </div>

          {/* Enhanced Cards Section with glassmorphism */}
          <div className="w-full bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl border border-white border-opacity-50 overflow-hidden flex flex-col items-start justify-start p-8 lg:p-6 sm:p-4">
            <div className="w-full flex flex-row items-start justify-center gap-12 xl:gap-8 lg:gap-6 lg:flex-wrap sm:gap-8 sm:flex-col">
              {/* Enhanced Card 1 */}
              <div className="flex-1 max-w-[400px] xl:max-w-[380px] lg:max-w-[320px] overflow-hidden flex flex-col items-start justify-start gap-8 lg:min-w-[280px] sm:min-w-full sm:gap-4 sm:max-w-none bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 p-6 animate-slide-up border border-green-100 hover:border-green-200 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img
                    className="w-8 h-8 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    alt="Expert coaching"
                    src="/placeholder-image-11@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-6 sm:gap-3">
                  <h1 className="m-0 self-stretch relative text-13xl leading-[130%] font-bold font-urbanist text-gray-800 lg:text-5xl sm:text-xl group-hover:text-green-700 transition-colors duration-300">
                    Expert Coaching Tailored to You
                  </h1>
                  <div className="self-stretch relative text-base leading-[160%] font-body text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Our dedicated coaches provide personalized support to meet
                    your unique health objectives with proven methodologies.
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-left text-sm sm:text-base">
                    <div className="flex flex-row items-center justify-start gap-2 text-green-600 font-semibold hover:text-green-700 cursor-pointer transition-all duration-300 group-hover:gap-3">
                      <span>Learn More</span>
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Card 2 */}
              <div className="flex-1 max-w-[400px] xl:max-w-[380px] lg:max-w-[320px] overflow-hidden flex flex-col items-start justify-start gap-8 lg:min-w-[280px] sm:min-w-full sm:gap-4 sm:max-w-none bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 p-6 animate-slide-up border border-green-100 hover:border-green-200 group delay-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img
                    className="w-8 h-8 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    alt="Nutrition services"
                    src="/placeholder-image-21@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-6 sm:gap-3">
                  <h1 className="m-0 self-stretch relative text-13xl leading-[130%] font-bold font-urbanist text-gray-800 lg:text-5xl sm:text-xl group-hover:text-green-700 transition-colors duration-300">
                    Nutrition That Works for Your Health
                  </h1>
                  <div className="self-stretch relative text-base leading-[160%] font-body text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Discover how our science-backed nutrition can help prevent and
                    reverse chronic illnesses with sustainable results.
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-left text-sm sm:text-base">
                    <div className="flex flex-row items-center justify-start gap-2 text-green-600 font-semibold hover:text-green-700 cursor-pointer transition-all duration-300 group-hover:gap-3">
                      <span>Explore</span>
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Card 3 */}
              <div className="flex-1 max-w-[400px] xl:max-w-[380px] lg:max-w-[320px] overflow-hidden flex flex-col items-start justify-start gap-8 lg:min-w-[280px] sm:min-w-full sm:gap-4 sm:max-w-none bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 p-6 animate-slide-up border border-green-100 hover:border-green-200 group delay-200">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img
                    className="w-8 h-8 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    alt="Sustainable living"
                    src="/placeholder-image-31@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-6 sm:gap-3">
                  <h1 className="m-0 self-stretch relative text-13xl leading-[130%] font-bold font-urbanist text-gray-800 lg:text-5xl sm:text-xl group-hover:text-green-700 transition-colors duration-300">
                    Sustainable Living for a Healthier Tomorrow
                  </h1>
                  <div className="self-stretch relative text-base leading-[160%] font-body text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    We promote organic practices that nurture both your body and
                    the environment for lasting wellness.
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-left text-sm sm:text-base">
                    <div className="flex flex-row items-center justify-start gap-2 text-green-600 font-semibold hover:text-green-700 cursor-pointer transition-all duration-300 group-hover:gap-3">
                      <span>Discover</span>
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Button Section */}
          <div className="flex flex-row items-center justify-center text-left sm:w-full">
            <div 
              className="overflow-hidden flex flex-row items-center justify-center gap-3 sm:w-full sm:justify-center cursor-pointer 
                py-4 px-8 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700
                shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
                text-white font-semibold backdrop-blur-sm border border-green-400 group"
              onClick={handleGetStarted}
            >
              <div className="relative leading-[150%] font-urbanist">Join Us Today</div>
              <svg className="h-6 w-6 relative overflow-hidden shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      <CTAHome onButtonClick={handleGetStarted} />
      <Footer
        footerBackgroundColor="rgba(245, 245, 245, 0.96)"
        companyLogo="/company-logo-1@2x.png"
      />
    </div>
  );
};

export default Home;