// components/ImageWithContent.js
const ImageWithContent = ({ imageSrc, alt, children, imageOnLeft = true }) => {
    return (
      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-20 mq750:gap-10 mq450:gap-5">
        {imageOnLeft && (
          <img
            className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq750:min-w-full"
            loading="lazy"
            alt={alt}
            src={imageSrc}
          />
        )}
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] mq750:gap-4 mq750:min-w-full">
          {children}
        </div>
        {!imageOnLeft && (
          <img
            className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq750:min-w-full"
            loading="lazy"
            alt={alt}
            src={imageSrc}
          />
        )}
      </div>
    );
  };
  
  export default ImageWithContent;