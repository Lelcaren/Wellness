import Button from "./Button";
import PropTypes from "prop-types";

const CtaServices = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-whitesmoke-100 overflow-hidden flex flex-col items-center justify-start 
        py-28 px-16 box-border text-left text-5xl text-color-white font-heading-desktop-h6
        lg:py-24 lg:px-12
        md:py-20 md:px-10 md:text-4xl
        sm:py-16 sm:px-8 sm:text-3xl
        xs:py-12 xs:px-6 xs:text-2xl ${className}`}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start 
          py-16 px-16 bg-[url('/public/card@3x.png')] bg-cover bg-no-repeat bg-center rounded-lg
          lg:py-14 lg:px-12
          md:py-12 md:px-10
          sm:py-10 sm:px-8
          xs:py-8 xs:px-6">
          <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-8
            lg:gap-7 lg:max-w-[680px]
            md:gap-6 md:max-w-[600px]
            sm:gap-5 sm:max-w-full
            xs:gap-4 xs:items-center xs:text-center">
            <div className="self-stretch flex flex-col items-start justify-start gap-6
              lg:gap-5
              md:gap-4
              sm:gap-4
              xs:gap-3 xs:items-center">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] break-words
                lg:text-4xl lg:leading-[52px]
                md:text-3xl md:leading-[42px]
                sm:text-2xl sm:leading-[36px]
                xs:text-xl xs:leading-[30px]">
                Explore Our Wellness Programs
              </h1>
              <div className="self-stretch relative text-lg leading-[150%] break-words
                lg:text-base lg:leading-[145%]
                md:text-base md:leading-[140%]
                sm:text-sm sm:leading-[135%]
                xs:text-xs xs:leading-[130%]">
                Transform your health and well-being with our personalized
                wellness sessions tailored just for you.
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-start gap-4
              lg:gap-3
              md:gap-3
              sm:gap-2 sm:justify-center
              xs:gap-2 xs:flex-col xs:w-full xs:items-stretch">
              <Button
                alternate
                iconPosition="No icon"
                small={false}
                style="Primary"
                button="Schedule"
              />
              <Button
                alternate
                iconPosition="No icon"
                small={false}
                style="Secondary"
                button="Learn More"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CtaServices.propTypes = {
  className: PropTypes.string,
};

export default CtaServices;