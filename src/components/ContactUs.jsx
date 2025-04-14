import Content from "./Content";
import PropTypes from "prop-types";

const ContactUs = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] mx-auto bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start 
        py-28 px-16 box-border gap-20 text-left text-base text-color-scheme-1-text font-heading-desktop-h6 
        xl:px-20 xl:py-32
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
              xl:text-5xl xl:leading-[60px]
              lg:text-19xl lg:leading-[46px] 
              md:text-13xl md:leading-[38px] 
              sm:text-10xl sm:leading-[35px] 
              xs:text-7xl xs:leading-[30px]`}
          >
            Contact Us
          </h1>
          <p
            className={`self-stretch relative text-lg leading-[150%] 
              xl:text-xl
              md:text-base 
              sm:text-sm 
              xs:text-xs`}
          >
            We're here to support your wellness journey.
          </p>
        </div>
      </div>

      {/* Content and Image Section */}
      <div
        className={`self-stretch flex flex-row items-start justify-between gap-20 
          xl:gap-24
          lg:gap-16 lg:flex-row 
          md:gap-12 md:flex-row 
          sm:flex-col sm:items-center sm:gap-10 
          xs:flex-col xs:items-center xs:gap-6`}
      >
        {/* Contact Information */}
        <div
          className={`flex flex-col items-start justify-start gap-10 w-[400px] 
            xl:w-[450px]
            lg:w-[350px] 
            md:w-[300px] 
            sm:w-full 
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
                    xl:text-xl
                    md:text-base 
                    xs:text-sm`}
                >
                  Office
                </b>
                <p
                  className={`text-base leading-[150%] 
                    xl:text-lg
                    md:text-sm 
                    xs:text-xs`}
                >
                  123 Sample St, Sydney NSW 2000 AU
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <p
                  className={`relative leading-[150%] text-blue-600 underline 
                    xl:text-lg
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
        <div className="flex-1 flex justify-center items-center lg:flex-1 md:flex-1 sm:w-full xs:w-full">
          <img
            className={`w-full max-w-[832px] h-auto object-cover rounded-lg shadow-md 
              xl:max-w-full
              lg:max-w-[700px] 
              md:max-w-[600px] 
              sm:max-w-[500px] 
              xs:max-w-[300px] xs:h-auto`}
            loading="lazy"
            alt="Placeholder"
            src="/footer.jpg"
          />
        </div>
      </div>
    </section>
  );
};

ContactUs.propTypes = {
  className: PropTypes.string,
};

export default ContactUs;


