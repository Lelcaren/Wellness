import ListItem from "./ListItem";
import PropTypes from "prop-types";

const TransformMeals = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1400px] mx-auto bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-28 px-20 box-border text-left text-21xl text-color-scheme-1-text font-heading-desktop-h6 lg:py-24 lg:px-24 md:py-20 md:px-16 sm:py-16 sm:px-8 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between flex-wrap gap-20 lg:gap-16 md:gap-12 sm:flex-col sm:items-center sm:gap-8">
        {/* Text Content Section */}
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] lg:min-w-[350px] sm:min-w-full sm:items-center">
          <div className="self-stretch flex flex-col items-start justify-start gap-6 sm:items-center lg:items-start">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold lg:text-5xl md:text-4xl sm:text-2xl sm:text-center">
              Transform Your Meals: Planning for Healthier Eating and Living
            </h1>
            <p className="self-stretch relative text-lg leading-[150%] lg:text-xl sm:text-base sm:text-center lg:leading-[32px]">
              Discover the art of meal planning to create a balanced pantry. Our
              cooking lessons empower you to prepare nutritious meals that
              support your health goals.
            </p>
          </div>
          {/* List Items Section */}
          <div className="self-stretch flex flex-col items-start justify-start sm:items-center">
            <div className="self-stretch flex flex-row items-start justify-between gap-8 lg:gap-6 md:gap-5 sm:flex-col sm:items-center sm:gap-4">
              <ListItem
                subheadingOne="Meal Planning"
                text="Weekly shopping lists ensure you have everything needed for healthy meal preparation."
              />
              <ListItem
                subheadingOne="Healthy Combinations"
                text="Learn food pairings that maximize nutritional benefits and enhance your meals."
              />
            </div>
          </div>
        </div>
        {/* Image Section */}
        <img
          className="h-[640px] lg:h-[500px] md:h-[400px] sm:h-[300px] flex-1 relative max-w-full overflow-hidden object-cover lg:min-w-[450px] sm:min-w-full"
          alt="Transform Meals Illustration"
          src="/placeholder-image-4@2x.png"
        />
      </div>
    </section>
  );
};

TransformMeals.propTypes = {
  className: PropTypes.string,
};

export default TransformMeals;


