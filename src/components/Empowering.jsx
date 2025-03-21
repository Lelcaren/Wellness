import PropTypes from "prop-types";

const Empowering = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] mx-auto bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 box-border gap-8 sm:gap-12 md:gap-16 lg:gap-20 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-21xl text-color-scheme-1-text font-heading-desktop-h6 ${className}`}
    >
      {/* Section Heading */}
      <h1 className="m-0 w-full max-w-[768px] text-inherit leading-[120%] font-bold">
        Empowering Your Journey to Holistic Health and Wellness
      </h1>

      {/* Features Container */}
      <div className="self-stretch bg-mediumaquamarine flex flex-col items-start justify-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {[
            {
              img: "/icon--relume-5.svg",
              title: "Transform Your Life with Personalized Health Solutions",
              desc: "Our mission is to guide you towards optimal health through tailored coaching and nutrition.",
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
              title: "Achieve Wellness Through Science-Backed Fasting and Detox Programs",
              desc: "Join us to explore effective fasting methods for rejuvenation and vitality.",
              btnText: "Start",
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="flex-1 flex flex-col items-center justify-start gap-4 sm:gap-6 md:gap-8 min-w-[280px] max-w-full sm:max-w-[calc(50%-16px)] lg:max-w-[calc(33.333%-16px)] p-4 sm:p-6"
            >
              {/* Feature Icon & Text */}
              <div className="self-stretch flex flex-col items-center justify-start gap-4 sm:gap-6">
                <img className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" src={feature.img} alt="" loading="lazy" />
                <div className="self-stretch flex flex-col items-start justify-start gap-3 sm:gap-4 md:gap-6">
                  <h3 className="m-0 self-stretch text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[140%] font-bold">
                    {feature.title}
                  </h3>
                  <p className="self-stretch text-sm sm:text-base leading-[150%]">{feature.desc}</p>
                </div>
              </div>

              {/* Button Link */}
              <div className="self-stretch flex flex-col items-center justify-start text-left text-sm sm:text-base">
                <div className="flex flex-row items-center justify-center gap-2 text-blue-600 font-semibold">
                  <span>{feature.btnText}</span>
                  <img className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" src="/icon--chevronright.svg" alt="" loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Empowering.propTypes = {
  className: PropTypes.string,
};

export default Empowering;