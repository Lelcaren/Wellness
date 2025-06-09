import Content from "./Content";
import PropTypes from "prop-types";

const ContactUs = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-gradient-to-br from-whitesmoke-200 via-green-50 to-white overflow-hidden flex flex-col items-start justify-start 
        py-20 md:py-24 lg:py-32 xl:py-36 2xl:py-40 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-24 box-border 
        gap-12 md:gap-16 lg:gap-24 xl:gap-28 text-left text-base text-color-scheme-1-text font-heading-desktop-h6 
        animate-fade-in relative ${className}`}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/6 left-1/5 w-1.5 h-1.5 bg-green-400 bg-opacity-30 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-green-300 bg-opacity-25 rounded-full animate-pulse delay-800"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-green-500 bg-opacity-15 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-24 xl:gap-28 relative z-10">
        {/* Enhanced Heading Section */}
        <div className="w-full max-w-[768px] xl:max-w-[900px] 2xl:max-w-[1024px] flex flex-col items-start justify-start gap-4 md:gap-6 xl:gap-8 animate-slide-up">
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-semibold text-green-600 uppercase tracking-widest text-sm bg-green-100 bg-opacity-70 px-6 py-3 rounded-full backdrop-blur-sm border border-green-200 shadow-md hover:bg-opacity-90 transition-all duration-300 xl:text-base 2xl:text-lg">
              ✨ Connect
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-6 md:gap-8 xl:gap-10">
            <h1
              className={`m-0 self-stretch relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[120%] font-bold font-urbanist text-gray-800 drop-shadow-sm`}
            >
              <span className="bg-gradient-to-r from-gray-800 via-green-700 to-gray-800 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p
              className={`self-stretch relative text-base md:text-lg xl:text-xl 2xl:text-2xl leading-[160%] text-gray-600 max-w-[600px]`}
            >
              We're here to support your wellness journey with <span className="text-green-600 font-medium">personalized care</span> and dedicated support.
            </p>
          </div>
        </div>

        {/* Enhanced Content and Image Section */}
        <div
          className={`self-stretch flex flex-row items-start justify-between gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-28
            lg:flex-row 
            md:flex-row 
            sm:flex-col sm:items-center sm:gap-10 
            xs:flex-col xs:items-center xs:gap-8`}
        >
          {/* Enhanced Contact Information */}
          <div
            className={`flex flex-col items-start justify-start gap-8 md:gap-10 xl:gap-12 w-[400px] 
              xl:w-[500px] 2xl:w-[550px]
              lg:w-[380px] 
              md:w-[320px] 
              sm:w-full 
              xs:w-full animate-slide-up`}
          >
            {/* Enhanced Email Card */}
            <div className="w-full bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 p-6 xl:p-8 border border-green-100 hover:border-green-200 group">
              <Content
                iconEnvelope="/icon--envelope.svg"
                heading="Email"
                text="Reach us anytime for personalized support!"
                link="hello@relume.io"
                enhanced={true}
              />
            </div>

            {/* Enhanced Phone Card */}
            <div className="w-full bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 p-6 xl:p-8 border border-green-100 hover:border-green-200 group delay-100">
              <Content
                iconEnvelope="/icon--phone.svg"
                heading="Phone"
                text="Call us today for immediate assistance!"
                link="+1 (555) 000-0000"
                enhanced={true}
              />
            </div>

            {/* Enhanced Office Card */}
            <div className="w-full bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 p-6 xl:p-8 border border-green-100 hover:border-green-200 group delay-200">
              <div className={`flex flex-col items-start justify-start gap-4 xl:gap-6 text-xl`}>
                <div className="w-12 h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img
                    className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 relative object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    alt="Office Icon"
                    src="/icon--map.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-4 xl:gap-6">
                  <div className="flex flex-col items-start justify-start gap-2 xl:gap-3">
                    <b
                      className={`text-lg xl:text-xl 2xl:text-2xl font-bold leading-[140%] font-urbanist text-gray-800 group-hover:text-green-700 transition-colors duration-300
                        md:text-base 
                        xs:text-sm`}
                    >
                      Office
                    </b>
                    <p
                      className={`text-sm xl:text-base 2xl:text-lg leading-[160%] text-gray-600 group-hover:text-gray-700 transition-colors duration-300
                        md:text-sm 
                        xs:text-xs`}
                    >
                      Visit us at our convenient location for personalized consultations.
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2 xl:gap-3">
                    <p
                      className={`relative text-sm xl:text-base 2xl:text-lg leading-[150%] text-green-600 font-semibold
                        md:text-sm 
                        xs:text-xs`}
                    >
                      123 Sample St, Sydney NSW 2000 AU
                    </p>
                    <div className="flex flex-row items-center justify-start gap-2 cursor-pointer hover:gap-3 transition-all duration-300 group/directions">
                      <p
                        className={`relative leading-[150%] text-green-600 hover:text-green-700 underline font-medium transition-colors duration-300
                          xl:text-base 2xl:text-lg
                          md:text-sm 
                          xs:text-xs`}
                      >
                        Get Directions
                      </p>
                      <img
                        className="h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 object-contain transition-transform duration-300 group-hover/directions:translate-x-1 text-green-600"
                        loading="lazy"
                        alt="Chevron Icon"
                        src="/icon--chevronright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="flex-1 flex justify-center items-center lg:flex-1 md:flex-1 sm:w-full xs:w-full animate-slide-up delay-300">
            <div className="w-full max-w-[832px] xl:max-w-full lg:max-w-[700px] md:max-w-[600px] sm:max-w-[500px] xs:max-w-[300px] relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform scale-105"></div>
              <img
                className={`w-full h-auto object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-2 border-white border-opacity-50 relative z-10 backdrop-blur-sm`}
                loading="lazy"
                alt="Wellness consultation environment"
                src="/footer.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl pointer-events-none z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactUs.propTypes = {
  className: PropTypes.string,
};

export default ContactUs;


