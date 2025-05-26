import Column from "./Column";
import Button from "./Button";
import PropTypes from "prop-types";

const Explore = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border gap-20 text-left text-base text-color-scheme-1-text font-heading-desktop-h6 lg:py-24 lg:px-20 md:py-20 md:px-16 sm:py-16 sm:px-8 ${className}`}
    >
      <div className="w-full max-w-none xl:max-w-7xl mx-auto flex flex-col gap-20">
        {/* Header Section */}
        <div className="w-full flex flex-row items-start justify-between gap-20 lg:gap-16 md:gap-12 sm:flex-col sm:items-center sm:gap-8">
          <div className="w-full xl:flex-1 xl:max-w-[50%] overflow-hidden flex flex-col items-start justify-start gap-4 min-w-[300px] sm:min-w-full">
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-semibold sm:text-base lg:text-lg">
                Services
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-[inherit] lg:text-4xl md:text-3xl sm:text-2xl sm:text-center sm:leading-[40px] xl:text-5xl xl:leading-[60px] 2xl:text-6xl 2xl:leading-[72px]">
              Explore Our Comprehensive Wellness Offerings
            </h1>
          </div>
          <div className="w-full xl:flex-1 xl:max-w-[50%] relative text-lg leading-[150%] inline-block min-w-[300px] sm:min-w-full sm:text-base sm:text-center xl:text-xl xl:leading-[180%]">
            Our online booking services provide a seamless way to access
            personalized health support. Whether you prefer one-on-one
            consultations or engaging cooking classes, we cater to your unique
            wellness needs. Experience the convenience of short-term in-house
            services designed to empower your health journey.
          </div>
        </div>
        
        {/* Services Section */}
        <div className="w-full bg-mediumaquamarine flex flex-col items-start justify-start text-13xl lg:px-16 md:px-12 sm:px-8 sm:gap-8 sm:items-center xl:px-20 2xl:px-24">
          <div className="w-full flex flex-row items-start justify-between gap-12 lg:gap-8 md:gap-6 sm:gap-4 sm:flex-col sm:items-center xl:gap-16">
            <Column
              heading="Personalized One-on-One Consultations"
              text="Receive tailored guidance to achieve your health goals."
            />
            <Column
              heading={`Engaging Coaching & Cooking Classes`}
              text="Learn to prepare nutritious meals while developing healthy habits."
            />
            <Column
              heading="Hands-On Short-Term In-House Services"
              text="Experience personalized coaching and wellness therapy in person."
            />
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="flex flex-row items-center justify-start gap-6 sm:justify-center sm:gap-4 xl:gap-8">
          <Button
            alternate={false}
            iconPosition="No icon"
            small={false}
            style="Secondary"
            button="Book"
          />
          <div className="overflow-hidden flex flex-row items-center justify-center gap-2 xl:gap-3">
            <div className="relative leading-[150%] xl:text-lg">Learn More</div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 xl:h-7 xl:w-7"
              loading="lazy"
              alt=""
              src="/icon--chevronright.svg"
            />
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

