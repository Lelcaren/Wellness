import PropTypes from "prop-types";

const ListItem = ({ className = "", subheadingOne, text }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-4 min-w-[192px] text-left text-xl text-color-scheme-1-text font-heading-desktop-h6
        lg:gap-3 lg:min-w-[180px]
        md:gap-3 md:min-w-[160px] md:text-lg
        sm:gap-2 sm:min-w-full sm:text-base
        xs:gap-2 xs:min-w-0 xs:w-full xs:text-base ${className}`}
    >
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0
          md:w-10 md:h-10
          sm:w-9 sm:h-9
          xs:w-8 xs:h-8"
        alt=""
        src="/icon--relume.svg"
      />
      <b className="self-stretch relative leading-[140%]
        lg:text-lg lg:leading-[135%]
        md:text-base md:leading-[130%]
        sm:text-sm sm:leading-[125%]
        xs:text-sm xs:leading-[120%] break-words">
        {subheadingOne}
      </b>
      <div className="self-stretch relative text-base leading-[150%]
        lg:text-sm lg:leading-[145%]
        md:text-sm md:leading-[140%]
        sm:text-xs sm:leading-[135%]
        xs:text-xs xs:leading-[130%] break-words">
        {text}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  subheadingOne: PropTypes.string,
  text: PropTypes.string,
};

export default ListItem;