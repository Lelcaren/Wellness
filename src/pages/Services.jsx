import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Button from "../components/Button";
import OrganicKitchen from "../components/OrganicKitchen";
import IdealWeight from "../components/IdealWeight";
import TransformMeals from "../components/TransformMeals";
import CtaServices from "../components/CtaServices";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar companyLogo="/company-logo@2x.png" navLinksMargin="0" />
      <Hero />
      <Explore />
      
      {/* Thrive Section - Fixed overflow issues */}
      <section className="w-full max-w-[1440px] mx-auto bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-base text-color-scheme-1-text font-heading-desktop-h6 md:py-16 md:px-8 sm:py-12 sm:px-4">
  <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-20 md:gap-10 sm:gap-5 sm:flex-col">
    <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] md:gap-6 sm:min-w-full sm:w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-8 md:gap-6 sm:gap-4">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-semibold">
              Thrive
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-6 text-29xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] sm:text-5xl sm:leading-[1.2]">
              Transform Your Life with Personalized Coaching
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              Our lifestyle coaching empowers you to create sustainable
              habits that enhance your overall well-being. Learn to manage
              stress, improve sleep quality, and naturally boost your
              energy levels.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-29xl">
          <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-6 md:flex-wrap sm:flex-col">
            <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[192px] sm:min-w-0 sm:w-full">
              <b className="self-stretch relative leading-[120%] sm:text-5xl sm:leading-[1.2]">
                50%
              </b>
              <div className="self-stretch relative text-base leading-[150%] break-words">
                Achieve balance and harmony in your daily life.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[192px] sm:min-w-0 sm:w-full">
              <b className="self-stretch relative leading-[120%] sm:text-5xl sm:leading-[1.2]">
                50%
              </b>
              <div className="self-stretch relative text-base leading-[150%] break-words">
                Unlock your potential with expert guidance.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-6 sm:flex-col sm:items-start">
        <Button
          alternate={false}
          iconPosition="No icon"
          small={false}
          style="Secondary"
          button="Learn More"
        />
        <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
          <div className="relative leading-[150%]">Sign Up</div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icon--chevronright.svg"
          />
        </div>
      </div>
    </div>
    <img
      className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] sm:min-w-0 sm:h-auto sm:w-full"
      loading="lazy"
      alt=""
      src="/placeholder-image@2x.png"
    />
  </div>
</section>
      
      <OrganicKitchen
        heading="Cultivate Your Own Organic Kitchen Garden for a Healthier Lifestyle"
        text="Discover the joy of growing your own organic food right at home. Our expert tips on sustainable gardening and meal planning will empower you to create a thriving kitchen garden."
        placeholderImage="/placeholder-image-1@2x.png"
      />
      
      <IdealWeight
        heading="Achieve Your Ideal Weight Naturally"
        text="Experience weight management that prioritizes your health without the stress of calorie counting. Embrace nutrient-rich foods and mindful eating practices to foster a sustainable lifestyle."
        button1="Start"
        placeholderImage="/placeholder-image-2@2x.png"
      />
      
      <OrganicKitchen
        heading="Harness the Healing Power of Food for Chronic Illness Management"
        text="Discover how food can be a powerful ally in managing chronic conditions like diabetes and high blood pressure. Our approach emphasizes natural detox methods and nutrient-rich diets to support your health journey."
        placeholderImage="/placeholder-image-3@2x.png"
      />
      
      <TransformMeals />
      
      {/* Nourish Section - Fixed overflow issues */}
      <section className="w-full max-w-[1440px] mx-auto bg-whitesmoke-100 overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-20 text-center text-base text-color-scheme-1-text font-heading-desktop-h6 mq750:gap-10 mq750:py-[47px] mq750:px-8 mq450:gap-5 mq450:px-4 mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border">
  <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-4">
    <div className="flex flex-row items-center justify-start">
      <div className="relative leading-[150%] font-semibold">Nourish</div>
    </div>
    <div className="self-stretch flex flex-col items-center justify-start gap-6 text-29xl">
      <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
        Explore Our Specialized Nutrition Programs
      </h1>
      <div className="self-stretch relative text-lg leading-[150%]">
        Discover the transformative power of nutrition through our
        specialized programs. Tailored to meet your health goals, these
        offerings empower you to make informed dietary choices.
      </div>
    </div>
  </div>
  <div className="self-stretch bg-mediumaquamarine flex flex-col items-center justify-start py-16 px-8 mq450:px-3 mq450:py-10 text-13xl">
    <div className="w-full max-w-[1200px] flex flex-row items-start justify-center flex-wrap gap-12 mq750:gap-6 mq450:gap-8 mq450:flex-col lg:h-auto">
      <div className="flex-1 flex flex-col items-center justify-start gap-6 min-w-[250px] mq750:min-w-[220px] mq450:min-w-0 mq450:w-full">
        <img
          className="w-12 h-12 relative overflow-hidden shrink-0"
          alt=""
          src="/icon--relume-5.svg"
        />
        <div className="self-stretch flex flex-col items-center justify-start gap-6">
          <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px] break-words">
            Intermittent Fasting & Health
          </h1>
          <div className="self-stretch relative text-base leading-[150%] break-words">
            Unlock your body's potential by boosting metabolism and
            promoting cellular repair.
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start gap-6 min-w-[250px] mq750:min-w-[220px] mq450:min-w-0 mq450:w-full">
        <img
          className="w-12 h-12 relative overflow-hidden shrink-0"
          alt=""
          src="/icon--relume-5.svg"
        />
        <div className="self-stretch flex flex-col items-center justify-start gap-6">
          <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px] break-words">
            Juice Fasting & Detox
          </h1>
          <div className="self-stretch relative text-base leading-[150%] break-words">
            Cleanse your body naturally with our guided juice fasting
            programs.
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start gap-6 min-w-[250px] mq750:min-w-[220px] mq450:min-w-0 mq450:w-full">
        <img
          className="w-12 h-12 relative overflow-hidden shrink-0"
          alt=""
          src="/icon--relume-5.svg"
        />
        <div className="self-stretch flex flex-col items-center justify-start gap-6">
          <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px] break-words">
            Raw Food & Health
          </h1>
          <div className="self-stretch relative text-base leading-[150%] break-words">
            Experience the benefits of a plant-based diet for optimal
            health.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-row items-center justify-start gap-6 text-left mq450:flex-col mq450:items-start">
    <Button
      alternate={false}
      iconPosition="No icon"
      small={false}
      style="Secondary"
      button="Learn"
    />
    <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
      <div className="relative leading-[150%]">Join</div>
      <img
        className="h-6 w-6 relative overflow-hidden shrink-0"
        alt=""
        src="/icon--chevronright.svg"
      />
    </div>
  </div>
</section>
      
<section
  className={`w-full max-w-[1440px] mx-auto bg-whitesmoke-100 overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border text-left text-base text-color-scheme-1-text font-heading-desktop-h6 
    lg:px-12 lg:py-24
    md:px-10 md:py-20
    sm:px-8 sm:py-16
    xs:px-4 xs:py-10`}
>
  <div
    className={`self-stretch flex flex-row items-center justify-center flex-wrap gap-20 
      lg:gap-16
      md:gap-12
      sm:gap-10
      xs:flex-col xs:gap-6 xs:items-center`}
  >
    {/* Text Section */}
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-6 min-w-[400px] max-w-[600px] 
        lg:min-w-[350px]
        md:min-w-[300px]
        sm:min-w-full
        xs:min-w-0 xs:w-full xs:gap-4 xs:items-center`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-6 xs:gap-4">
        <div className="self-stretch flex flex-col items-center justify-start gap-4 xs:gap-2">
          <div className="flex flex-row items-center justify-center">
            <div className="relative leading-[150%] font-semibold">
              Wellness
            </div>
          </div>
          <div
            className={`self-stretch flex flex-col items-center justify-start text-29xl 
              lg:text-5xl
              md:text-4xl
              sm:text-3xl
              xs:text-xl xs:leading-[120%]`}
          >
            <h1
              className={`m-0 self-stretch relative text-inherit leading-[120%] font-bold break-words 
                lg:leading-[125%]
                xs:text-center`}
            >
              Experience Our Comprehensive In-House Wellness Services
            </h1>
            <p
              className={`text-lg leading-[150%] 
                md:text-base
                sm:text-sm
                xs:text-xs xs:leading-[140%] xs:text-center`}
            >
              Our in-house wellness services are designed to rejuvenate your
              body and mind. Discover personalized treatments that promote
              healing and relaxation.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-6 flex-wrap xs:gap-4">
          <div
            className={`flex flex-col items-center justify-start gap-4 min-w-[200px]
              sm:min-w-[180px]
              xs:min-w-[150px]`}
          >
            <b
              className={`text-center leading-[140%] 
                md:text-base
                xs:text-xs`}
            >
              Detox Therapy
            </b>
            <p
              className={`text-center text-base leading-[150%] 
                md:text-sm
                xs:text-xs`}
            >
              A guided detox plan for deep cleansing and revitalization.
            </p>
          </div>
          <div
            className={`flex flex-col items-center justify-start gap-4 min-w-[200px]
              sm:min-w-[180px]
              xs:min-w-[150px]`}
          >
            <b
              className={`text-center leading-[140%] 
                md:text-base
                xs:text-xs`}
            >
              Hydrotherapy Benefits
            </b>
            <p
              className={`text-center text-base leading-[150%] 
                md:text-sm
                xs:text-xs`}
            >
              Water-based treatments to enhance relaxation and improve
              circulation.
            </p>
          </div>
        </div>
      </div>
      {/* Buttons Section */}
      <div
        className={`flex flex-row items-center justify-center gap-6 
          md:gap-4 
          xs:flex-col xs:gap-3 xs:w-full`}
      >
        <Button
          alternate={false}
          iconPosition="No icon"
          small={false}
          style="Secondary"
          button="Book"
          className="xs:w-[90%]"
        />
        <div className="flex flex-row items-center gap-2 xs:py-1">
          <div className="relative leading-[150%] xs:text-sm">Learn</div>
          <img
            className="h-6 w-6 xs:h-5 xs:w-5"
            alt=""
            src="/icon--chevronright.svg"
          />
        </div>
      </div>
    </div>
    {/* Image Section */}
    <img
      className={`h-[640px] flex-1 object-cover rounded-lg shadow-lg
        lg:h-[500px]
        sm:h-[420px]
        xs:h-auto xs:max-h-[240px] xs:w-[90%]`}
      alt="Wellness Illustration"
      src="/placeholder-image-5@2x.png"
    />
  </div>
</section>

      <CtaServices />
      
      <Footer
        footerBackgroundColor="#f5f5f5"
        companyLogo="/company-logo-1@2x.png"
      />
    </div>
  );
};

export default Services;