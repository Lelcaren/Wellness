import PropTypes from "prop-types";

const OrganicKitchen = ({
  className = "",
  heading,
  text,
  placeholderImage,
}) => {
  return (
    <section
      className={`w-full bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-21xl text-color-scheme-1-text font-heading-desktop-h6
        lg:px-12 lg:py-24
        md:pt-20 md:pb-20 md:box-border md:text-13xl md:leading-[38px]
        sm:gap-10 sm:px-8 sm:box-border sm:py-16
        xs:gap-5 xs:pt-10 xs:pb-10 xs:px-4 xs:box-border ${className}`}
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-row items-center justify-between flex-wrap gap-20
        lg:gap-16
        md:gap-12
        sm:gap-10 sm:justify-center
        xs:gap-6 xs:flex-col xs:items-center">
        {/* Text Section */}
        <div className="flex-1 flex flex-col items-start justify-center py-5 px-0 box-border gap-6 min-w-[400px]
          lg:min-w-[350px]
          sm:min-w-full
          xs:min-w-0 xs:w-[92%] xs:py-2 xs:gap-4">
          <h1 className="m-0 text-inherit leading-[120%] font-bold font-[inherit] 
            lg:text-4xl lg:leading-[44px]
            md:text-3xl md:leading-[38px]
            sm:text-2xl sm:leading-[34px]
            xs:text-xl xs:leading-[30px] xs:w-full xs:text-center break-words">
            {heading}
          </h1>
          <div className="text-lg leading-[150%] 
            sm:text-base
            xs:text-sm xs:leading-[145%] xs:text-center break-words">
            {text}
          </div>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center min-w-[400px]
          lg:min-w-[350px]
          sm:min-w-full
          xs:min-w-0 xs:w-[92%]">
          <img
            className="h-[640px] w-full object-cover rounded-lg
              lg:h-[560px]
              md:h-[500px]
              sm:h-[420px]
              xs:h-auto xs:max-h-[240px]"
            loading="lazy"
            alt="Organic Kitchen Illustration"
            src={placeholderImage}
          />
        </div>
      </div>
    </section>
  );
};

OrganicKitchen.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  placeholderImage: PropTypes.string,
};

export default OrganicKitchen;
