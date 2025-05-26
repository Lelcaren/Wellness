import Button from "./Button";
import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <section
      className={`w-full min-h-[663px] h-[663px] overflow-hidden flex flex-col items-center justify-center py-28 px-16 box-border bg-[url('/public/hero@3x.png')] bg-cover bg-no-repeat bg-center text-center text-base text-color-white font-heading-desktop-h6 mq450:gap-5 mq450:pt-[73px] mq450:pb-[73px] mq450:box-border mq1050:gap-10 mq1050:pl-8 mq1050:pr-8 mq1050:box-border ${className}`}
    >
      <div className="w-full max-w-[768px] xl:max-w-[900px] 2xl:max-w-[1024px] mx-auto flex flex-col items-center justify-start gap-8 mq450:gap-4">
        <div className="self-stretch flex flex-col items-center justify-start gap-4">
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-semibold">
              Wellness
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-6 text-37xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-15xl mq450:leading-[40px] mq1050:text-26xl mq1050:leading-[54px] xl:text-[4rem] xl:leading-[4.8rem] 2xl:text-[4.5rem] 2xl:leading-[5.4rem]">
              Transform Your Health
            </h1>
            <div className="self-stretch relative text-lg leading-[150%] xl:text-xl xl:leading-[180%] 2xl:text-xl 2xl:leading-[180%]">
              Explore our comprehensive services tailored to enhance your health
              and well-being journey.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-4 xl:gap-6">
          <Button
            alternate
            iconPosition="No icon"
            small={false}
            style="Primary"
            button="Learn More"
          />
          <Button
            alternate
            iconPosition="No icon"
            small={false}
            style="Secondary"
            button="Get Started"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;