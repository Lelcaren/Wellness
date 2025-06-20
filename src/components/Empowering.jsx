import React from 'react';
import PropTypes from "prop-types";

const Empowering = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-gradient-to-br from-green-50 to-green-100 overflow-hidden flex flex-col items-start justify-start py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 box-border gap-8 sm:gap-12 md:gap-16 lg:gap-20 text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-21xl text-gray-800 font-heading-desktop-h6 ${className}`}
    >
      <div className="w-full flex flex-col items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        {/* Section Heading */}
        <h1 className="m-0 w-full max-w-[768px] text-inherit leading-[120%] font-bold text-left">
          Empowering Your Journey to Holistic Health and Wellness
        </h1>
        
        {/* Features Container */}
        <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-start justify-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {[
              {
                img: "/icon--relume-5.svg",
                title: "Transform Your Life with Personalized Health Solutions",
                desc: "Our mission is to guide you towards optimal health through personalized coaching and nutrition.",
                btnText: "Discover",
              },
              {
                img: "/icon--relume-5.svg",
                title: "Nourish Your Body with Organic Food Planning and Meal Prep",
                desc: "Experience the benefits of natural remedies and wellness techniques for lasting health.",
                btnText: "Learn",
              },
              {
                img: "/icon--relume-5.svg",
                title: "Achieve Wellness Through evidence based Fasting and Detox Programs",
                desc: "Join us to explore effective fasting methods for rejuvenation and vitality.",
                btnText: "Start",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-start justify-start gap-4 sm:gap-6 md:gap-8 min-w-[280px] max-w-full sm:max-w-[calc(50%-16px)] lg:max-w-[calc(33.333%-16px)] xl:max-w-[400px] 2xl:max-w-[420px] p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-lg border border-green-100"
              >
                {/* Feature Icon & Text */}
                <div className="self-stretch flex flex-col items-start justify-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" src={feature.img} alt="" loading="lazy" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-3 sm:gap-4 md:gap-6">
                    <h3 className="m-0 self-stretch text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[140%] font-bold text-left text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="self-stretch text-sm sm:text-base leading-[150%] text-left text-gray-600">{feature.desc}</p>
                  </div>
                </div>
                
                {/* Button Link */}
                <div className="self-stretch flex flex-col items-start justify-start text-left text-sm sm:text-base">
                  <div className="flex flex-row items-center justify-start gap-2 text-green-600 font-semibold hover:text-green-700 cursor-pointer transition-colors duration-200">
                    <span>{feature.btnText}</span>
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Empowering.propTypes = {
  className: PropTypes.string,
};

export default Empowering;