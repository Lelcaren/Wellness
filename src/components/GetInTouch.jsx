import Checkbox from "./Checkbox";
import Button from "./Button";
import PropTypes from "prop-types";

const GetInTouch = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start 
        py-28 px-16 text-center text-base text-color-scheme-1-text font-heading-desktop-h6 
        lg:px-12 lg:py-24 
        md:px-10 md:py-20 
        sm:px-8 sm:py-16 
        xs:px-6 xs:py-12 ${className}`}
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center justify-start gap-16
        lg:gap-14
        md:gap-12
        sm:gap-10
        xs:gap-8">
        
        {/* Heading Section */}
        <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-4
          sm:max-w-full
          xs:gap-3">
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-semibold
              sm:text-sm
              xs:text-xs">
              Connect
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-6 text-29xl
            md:gap-5
            sm:gap-4
            xs:gap-3">
            <h1
              className={`m-0 self-stretch relative text-inherit leading-[120%] font-bold break-words
                lg:text-4xl lg:leading-[52px] 
                md:text-3xl md:leading-[42px] 
                sm:text-2xl sm:leading-[36px] 
                xs:text-xl xs:leading-[30px]`}
            >
              Get in Touch
            </h1>
            <p
              className={`self-stretch relative text-lg leading-[150%] break-words
                lg:text-base lg:leading-[145%]
                md:text-base md:leading-[140%]
                sm:text-sm sm:leading-[135%]
                xs:text-xs xs:leading-[130%]`}
            >
              We're here to assist you with your inquiries.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div
          className={`w-full max-w-[560px] flex flex-col items-center justify-start gap-6 text-left 
            lg:max-w-[500px] 
            md:max-w-[450px]
            sm:max-w-[90%] sm:gap-5
            xs:max-w-[92%] xs:gap-4`}
        >
          {/* Name Field */}
          <div className="self-stretch flex flex-col items-start justify-start gap-2
            xs:gap-1">
            <label className="self-stretch text-sm font-medium
              md:text-base
              sm:text-sm
              xs:text-xs">
              Name
            </label>
            <input
              className="border-color-scheme-1-text border-solid border-[1px] outline-none bg-[transparent] 
                w-full min-w-0 p-3 rounded-md text-sm transition-colors duration-200 focus:border-color-scheme-1-primary
                md:p-3 md:text-sm
                sm:p-2.5 sm:text-sm
                xs:p-2 xs:text-xs"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="self-stretch flex flex-col items-start justify-start gap-2
            xs:gap-1">
            <label className="self-stretch text-sm font-medium
              md:text-base
              sm:text-sm
              xs:text-xs">
              Email
            </label>
            <input
              className="border-color-scheme-1-text border-solid border-[1px] outline-none bg-[transparent] 
                w-full min-w-0 p-3 rounded-md text-sm transition-colors duration-200 focus:border-color-scheme-1-primary
                md:p-3 md:text-sm
                sm:p-2.5 sm:text-sm
                xs:p-2 xs:text-xs"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div className="self-stretch flex flex-col items-start justify-start gap-2
            xs:gap-1">
            <label className="self-stretch text-sm font-medium
              md:text-base
              sm:text-sm
              xs:text-xs">
              Message
            </label>
            <textarea
              className="border-color-scheme-1-text border-solid border-[1px] outline-none bg-[transparent] 
                w-full h-[150px] p-3 rounded-md resize-none text-sm transition-colors duration-200 focus:border-color-scheme-1-primary
                lg:h-[140px]
                md:h-[130px] md:p-3 md:text-sm
                sm:h-[120px] sm:p-2.5 sm:text-sm
                xs:h-[100px] xs:p-2 xs:text-xs"
              placeholder="Type your message..."
            />
          </div>

          {/* Checkbox */}
          <div className="self-stretch flex justify-start">
            <Checkbox alternate={false} selected={false} />
          </div>

          {/* Submit Button */}
          <div className="self-stretch flex justify-center
            sm:justify-stretch">
            <Button
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Primary"
              button="Submit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

GetInTouch.propTypes = {
  className: PropTypes.string,
};

export default GetInTouch;

