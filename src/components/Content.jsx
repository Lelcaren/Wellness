import PropTypes from "prop-types";

const Content = ({ className = "", iconEnvelope, heading, text, link }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-4 text-left text-base text-color-scheme-1-text font-heading-desktop-h6 ${className}`}
    >
      <img
        className="w-8 h-8 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={iconEnvelope}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-2">
        <b className="self-stretch relative text-xl leading-[140%] mq450:text-base mq450:leading-[22px]">
          {heading}
        </b>
        <div className="self-stretch relative leading-[150%]">{text}</div>
        <div className="self-stretch relative [text-decoration:underline] leading-[150%]">
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
