// components/ImageWithContent.js
const ImageWithContent = ({ imageSrc, alt, children, imageOnLeft = true }) => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-20
      lg:gap-16
      md:gap-12
      sm:gap-10 sm:justify-center
      xs:gap-6 xs:flex-col xs:items-center">
      {imageOnLeft && (
        <img
          className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] rounded-lg
            lg:h-[560px] lg:min-w-[350px]
            md:h-[500px] md:min-w-[320px]
            sm:h-[420px] sm:min-w-full
            xs:h-auto xs:max-h-[240px] xs:min-w-0 xs:w-[92%]"
          loading="lazy"
          alt={alt}
          src={imageSrc}
        />
      )}
      <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px]
        lg:gap-6 lg:min-w-[350px]
        md:gap-5 md:min-w-[320px]
        sm:gap-4 sm:min-w-full
        xs:gap-3 xs:min-w-0 xs:w-[92%] xs:py-2 xs:items-center xs:text-center">
        {children}
      </div>
      {!imageOnLeft && (
        <img
          className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] rounded-lg
            lg:h-[560px] lg:min-w-[350px]
            md:h-[500px] md:min-w-[320px]
            sm:h-[420px] sm:min-w-full
            xs:h-auto xs:max-h-[240px] xs:min-w-0 xs:w-[92%]"
          loading="lazy"
          alt={alt}
          src={imageSrc}
        />
      )}
    </div>
  );
};

export default ImageWithContent;