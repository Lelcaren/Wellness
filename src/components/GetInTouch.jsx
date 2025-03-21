import Checkbox from "./Checkbox";
import Button from "./Button";
import PropTypes from "prop-types";

const GetInTouch = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1400px] mx-auto bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start 
        py-28 px-16 text-center text-base text-color-scheme-1-text font-heading-desktop-h6 
        lg:px-12 lg:py-24 
        md:px-10 md:py-20 
        sm:px-8 sm:py-16 
        xs:px-6 xs:py-12 
        max-xs:px-4 max-xs:py-10 ${className}`} // Adjust padding for very small screens
    >
      {/* Heading Section */}
      <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-4">
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-semibold">Connect</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-6 text-29xl">
          <h1
            className={`m-0 self-stretch relative text-inherit leading-[120%] font-bold 
              lg:text-19xl lg:leading-[46px] 
              md:text-13xl md:leading-[38px] 
              sm:text-10xl sm:leading-[35px] 
              xs:text-7xl xs:leading-[30px] 
              max-xs:text-5xl max-xs:leading-[26px]`} // Scales for screens <400px
          >
            Get in Touch
          </h1>
          <p
            className={`self-stretch relative text-lg leading-[150%] 
              md:text-base 
              sm:text-sm 
              xs:text-xs 
              max-xs:text-[12px]`} // Adjust font size for extra small screens
          >
            We're here to assist you with your inquiries.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div
        className={`w-full max-w-[560px] flex flex-col items-center justify-start gap-6 text-left 
          lg:max-w-[480px] 
          xs:max-w-[90%] 
          max-xs:max-w-full`} // Ensures full width on very small screens
      >
        {/* Name Field */}
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <label className="self-stretch text-sm md:text-base max-xs:text-xs">
            Name
          </label>
          <input
            className="border-color-scheme-1-text border-solid border-[1px] outline-none bg-[transparent] 
              w-full min-w-0 p-3 rounded-md text-sm 
              max-xs:p-2 max-xs:text-xs" // Reduces padding & text size for very small screens
            type="text"
          />
        </div>

        {/* Email Field */}
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <label className="self-stretch text-sm md:text-base max-xs:text-xs">
            Email
          </label>
          <input
            className="border-color-scheme-1-text border-solid border-[1px] outline-none bg-[transparent] 
              w-full min-w-0 p-3 rounded-md text-sm 
              max-xs:p-2 max-xs:text-xs"
            type="text"
          />
        </div>

        {/* Message Field */}
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <label className="self-stretch text-sm md:text-base max-xs:text-xs">
            Message
          </label>
          <textarea
            className="border-color-scheme-1-text border-solid border-[1px] outline-none bg-[transparent] 
              w-full h-[150px] p-3 rounded-md resize-none text-sm 
              max-xs:h-[120px] max-xs:p-2 max-xs:text-xs" // Adjusts height & padding for small screens
            placeholder="Type your message..."
          />
        </div>

        {/* Checkbox */}
        <Checkbox alternate={false} selected={false} />

        {/* Submit Button */}
        <Button
          alternate={false}
          iconPosition="No icon"
          small={false}
          style="Primary"
          button="Submit"
        />
      </div>
    </section>
  );
};

GetInTouch.propTypes = {
  className: PropTypes.string,
};

export default GetInTouch;

