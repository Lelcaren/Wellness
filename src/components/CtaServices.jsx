import Button from "./Button";
import PropTypes from "prop-types";

const CtaServices = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] mx-auto bg-whitesmoke-100 overflow-hidden flex flex-col items-center justify-start py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 box-border text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-color-white font-heading-desktop-h6 ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-8 sm:py-12 md:py-16 lg:py-[62px] px-4 sm:px-8 md:px-12 lg:px-16 bg-[url('/public/card@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-6 sm:gap-8">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 sm:gap-6">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit]">
              Explore Our Wellness Programs
            </h1>
            <div className="self-stretch relative text-base sm:text-lg leading-[150%]">
              Transform your health and well-being with our personalized
              wellness sessions tailored just for you.
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-start gap-4">
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
    </section>
  );
};

CtaServices.propTypes = {
  className: PropTypes.string,
};

export default CtaServices;
