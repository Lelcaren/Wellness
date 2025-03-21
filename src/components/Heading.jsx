// components/Heading.js
const Heading = ({ title, subtitle, description, className = "" }) => {
    return (
      <div className={`flex flex-col items-start justify-start gap-6 ${className}`}>
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-semibold">{subtitle}</div>
        </div>
        <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-[inherit]">
          {title}
        </h1>
        <div className="self-stretch relative text-lg leading-[150%]">{description}</div>
      </div>
    );
  };
  
  export default Heading;