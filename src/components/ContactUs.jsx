import Content from "./Content";
import PropTypes from "prop-types";

const ContactUs = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1400px] mx-auto bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start 
        py-28 px-16 gap-20 text-left text-base text-color-scheme-1-text font-heading-desktop-h6 
        lg:px-12 lg:py-24 lg:gap-16 
        md:px-10 md:py-20 md:gap-12 
        sm:px-8 sm:py-16 sm:gap-10 
        xs:px-6 xs:py-12 xs:gap-6 ${className}`}
    >
      {/* Heading Section */}
      <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-4">
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-semibold">Connect</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-6 text-29xl">
          <h1
            className={`m-0 self-stretch relative text-inherit leading-[120%] font-bold 
              lg:text-19xl lg:leading-[46px] 
              md:text-13xl md:leading-[38px] 
              sm:text-10xl sm:leading-[35px] 
              xs:text-7xl xs:leading-[30px]`}
          >
            Contact Us
          </h1>
          <p
            className={`self-stretch relative text-lg leading-[150%] 
              md:text-base 
              sm:text-sm 
              xs:text-xs`}
          >
            We’re here to support your wellness journey.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`self-stretch flex flex-row items-start justify-start gap-20 flex-wrap 
          lg:gap-16 
          md:gap-12 
          sm:gap-10 
          xs:gap-6`}
      >
        {/* Contact Information */}
        <div
          className={`flex flex-col items-start justify-start gap-10 w-[400px] 
            lg:w-[350px] 
            md:w-[300px] 
            sm:w-[100%] 
            xs:w-full xs:gap-6`}
        >
          <Content
            iconEnvelope="/icon--envelope.svg"
            heading="Email"
            text="Reach us anytime!"
            link="hello@relume.io"
          />
          <Content
            iconEnvelope="/icon--phone.svg"
            heading="Phone"
            text="Call us today!"
            link="+1 (555) 000-0000"
          />
          <div className={`flex flex-col items-start justify-start gap-4 text-xl`}>
            <img
              className="w-8 h-8 relative object-contain"
              loading="lazy"
              alt="Office Icon"
              src="/icon--map.svg"
            />
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="flex flex-col items-start justify-start gap-2">
                <b
                  className={`text-lg font-bold leading-[140%] 
                    md:text-base 
                    xs:text-sm`}
                >
                  Office
                </b>
                <p
                  className={`text-base leading-[150%] 
                    md:text-sm 
                    xs:text-xs`}
                >
                  123 Sample St, Sydney NSW 2000 AU
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <p
                  className={`relative leading-[150%] text-blue-600 underline 
                    md:text-sm 
                    xs:text-xs`}
                >
                  Get Directions
                </p>
                <img
                  className="h-6 w-6 object-contain"
                  loading="lazy"
                  alt="Chevron Icon"
                  src="/icon--chevronright.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <img
          className={`w-[832px] max-h-full object-cover rounded-lg shadow-md 
            lg:w-[700px] 
            md:w-[600px] 
            sm:w-full sm:max-w-[500px] 
            xs:w-full xs:max-w-[300px]`}
          loading="lazy"
          alt="Placeholder"
          src="/placeholder-image2@2x.png"
        />
      </div>
    </section>
  );
};

ContactUs.propTypes = {
  className: PropTypes.string,
};

export default ContactUs;
