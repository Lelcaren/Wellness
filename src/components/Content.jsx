import PropTypes from "prop-types";

const Content = ({ className = "", iconEnvelope, heading, text, link }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-4 text-left text-base text-color-scheme-1-text font-heading-desktop-h6 xl:gap-6 2xl:gap-8 ${className}`}
    >
      <img
        className="w-8 h-8 relative overflow-hidden shrink-0 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
        loading="lazy"
        alt=""
        src={iconEnvelope}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-2 xl:gap-3 2xl:gap-4">
        <b className="self-stretch relative text-xl leading-[140%] mq450:text-base mq450:leading-[22px] xl:text-2xl xl:leading-[34px] 2xl:text-3xl 2xl:leading-[42px]">
          {heading}
        </b>
        <div className="self-stretch relative leading-[150%] xl:text-lg xl:leading-[170%] 2xl:text-xl 2xl:leading-[180%]">{text}</div>
        <div className="self-stretch relative [text-decoration:underline] leading-[150%] xl:text-lg xl:leading-[170%] 2xl:text-xl 2xl:leading-[180%]">
          {link}
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  iconEnvelope: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Content;