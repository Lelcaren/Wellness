import Navbar from "../components/Navbar";
import Empowering from "../components/Empowering";
import IdealWeight from "../components/IdealWeight";
import CTAHome from "../components/CTAHome";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Navigate to Services page
  const handleLearnMore = () => {
    navigate("/services");
  };

  // Navigate to Contact page
  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar companyLogo="/company-logo@2x.png" navLinksMargin="unset" />
      
      {/* Hero Section */}
      <section
        className={`w-full h-[900px] overflow-hidden shrink-0 flex flex-row items-center justify-start 
          py-0 px-16 box-border bg-[url('/public/hero1@3x.png')] bg-cover bg-no-repeat bg-[top] 
          text-left text-37xl text-color-white font-heading-desktop-h6 
          lg:px-12 
          md:px-10 md:h-[800px] 
          sm:px-8 sm:h-[700px] 
          xs:px-6 xs:py-10 xs:flex-col xs:h-auto xs:items-center`}
      >
        <div className="w-full max-w-[1440px] mx-auto flex flex-row items-center justify-start">
          <div
            className={`w-[560px] flex flex-col items-start justify-start py-5 px-0 box-border gap-8 
              lg:w-[480px] 
              md:w-[400px] 
              sm:w-full sm:gap-6 
              xs:w-full xs:gap-4 xs:items-center`}
          >
            {/* Title and Description */}
            <div
              className={`self-stretch flex flex-col items-start justify-start gap-6 
                sm:gap-4 
                xs:items-center xs:text-center`}
            >
              <h1
                className={`m-0 self-stretch relative text-inherit leading-[120%] font-bold 
                  lg:text-26xl lg:leading-[54px] 
                  md:text-19xl md:leading-[46px] 
                  sm:text-15xl sm:leading-[40px] 
                  xs:text-10xl xs:leading-[35px]`}
              >
                Transform Your Life with Holistic Wellness
              </h1>
              <p
                className={`self-stretch relative text-lg leading-[150%] 
                  md:text-base 
                  sm:text-sm 
                  xs:text-xs`}
              >
                At Kiram Place, we empower you to achieve optimal health
                through nutritional coaching. Discover how our holistic
                approach can enhance your well-being and transform your lifestyle.
              </p>
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-row items-start justify-start gap-4 
                xs:flex-col xs:gap-3 xs:w-full xs:items-center`}
            >
              <button
                className="cursor-pointer border-color-white border-solid border-[1px] py-3 px-6 bg-color-white rounded-3xs flex flex-row items-center justify-center w-auto"
                onClick={handleLearnMore}
              >
                <div
                  className="relative text-base leading-[150%] font-heading-desktop-h6 text-color-scheme-1-text text-left"
                >
                  Learn More
                </div>
              </button>
              <button
                className="cursor-pointer border-color-white border-solid border-[1px] py-3 px-6 bg-[transparent] rounded-3xs flex flex-row items-center justify-center w-auto"
                onClick={handleGetStarted}
              >
                <div
                  className="relative text-base leading-[150%] font-heading-desktop-h6 text-color-white text-left"
                >
                  Get Started
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Empowering />
      <IdealWeight
        idealWeightBackgroundColor="rgba(245, 245, 245, 0.96)"
        heading="Your Path to Sustainable Well-Being"
        text="Experience personalized support with our expert guidance and flexible online booking options. Our in-house wellness services make it convenient for you to start your journey toward a healthier lifestyle."
        button1="Sign Up"
        placeholderImage="/placeholder-image1@2x.png"
        onButtonClick={handleGetStarted} // Add navigation to Contact page
      />
      
      {/* Why Choose Section */}
      <section className="w-full bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-20 text-center text-base text-color-scheme-1-text font-heading-desktop-h6 lg:py-16 lg:px-8 lg:gap-12 sm:py-10 sm:px-4 sm:gap-8">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-20 lg:gap-12 sm:gap-8">
          {/* Header Section */}
          <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-4">
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-semibold">
                Transform
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-6">
              <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-[inherit] lg:text-21xl lg:leading-[130%] sm:text-15xl sm:leading-[120%]">
                Why Choose Our Wellness Services?
              </h1>
              <div className="self-stretch relative text-lg leading-[150%] sm:text-base">
                At Kiram Place, we prioritize your health with
                personalized coaching and expert guidance. Our holistic approach
                empowers you to achieve your wellness goals effectively.
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="w-full flex flex-col items-start justify-start">
            <div className="w-full flex flex-row items-start justify-center gap-12 xl:gap-8 lg:gap-6 lg:flex-wrap sm:gap-8 sm:flex-col">
              {/* Card 1 */}
              <div className="flex-1 max-w-[400px] xl:max-w-[380px] lg:max-w-[320px] overflow-hidden flex flex-col items-start justify-start gap-8 lg:min-w-[280px] sm:min-w-full sm:gap-4 sm:max-w-none">
                <img
                  className="self-stretch h-60 relative w-full overflow-hidden shrink-0 object-cover sm:h-48"
                  loading="lazy"
                  alt="Expert coaching"
                  src="/placeholder-image-11@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-6 sm:gap-3">
                  <h1 className="m-0 self-stretch relative text-13xl leading-[130%] font-bold font-[inherit] lg:text-5xl sm:text-xl">
                    Expert Coaching Tailored to You
                  </h1>
                  <div className="self-stretch relative text-base leading-[150%]">
                    Our dedicated coaches provide personalized support to meet
                    your unique health objectives.
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-1 max-w-[400px] xl:max-w-[380px] lg:max-w-[320px] overflow-hidden flex flex-col items-start justify-start gap-8 lg:min-w-[280px] sm:min-w-full sm:gap-4 sm:max-w-none">
                <img
                  className="self-stretch h-60 relative w-full overflow-hidden shrink-0 object-cover sm:h-48"
                  loading="lazy"
                  alt="Nutrition services"
                  src="/placeholder-image-21@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-6 sm:gap-3">
                  <h1 className="m-0 self-stretch relative text-13xl leading-[130%] font-bold font-[inherit] lg:text-5xl sm:text-xl">
                    Nutrition That Works for Your Health
                  </h1>
                  <div className="self-stretch relative text-base leading-[150%]">
                    Discover how our science-backed nutrition can help prevent and
                    reverse chronic illnesses.
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex-1 max-w-[400px] xl:max-w-[380px] lg:max-w-[320px] overflow-hidden flex flex-col items-start justify-start gap-8 lg:min-w-[280px] sm:min-w-full sm:gap-4 sm:max-w-none">
                <img
                  className="self-stretch h-60 relative w-full overflow-hidden shrink-0 object-cover sm:h-48"
                  loading="lazy"
                  alt="Sustainable living"
                  src="/placeholder-image-31@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-6 sm:gap-3">
                  <h1 className="m-0 self-stretch relative text-13xl leading-[130%] font-bold font-[inherit] lg:text-5xl sm:text-xl">
                    Sustainable Living for a Healthier Tomorrow
                  </h1>
                  <div className="self-stretch relative text-base leading-[150%]">
                    We promote organic practices that nurture both your body and
                    the environment.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-row items-center justify-start gap-6 text-left sm:flex-col sm:w-full sm:items-stretch">
            <button 
              className="cursor-pointer border-color-scheme-1-text border-solid border-[1px] py-3 px-6 bg-[transparent] rounded-3xs overflow-hidden flex flex-row items-center justify-center sm:w-full"
              onClick={handleLearnMore}
            >
              <div className="relative text-base leading-[150%] font-heading-desktop-h6 text-color-scheme-1-text text-left">
                Learn More
              </div>
            </button>
            <div 
              className="overflow-hidden flex flex-row items-center justify-center gap-2 sm:w-full sm:justify-center cursor-pointer"
              onClick={handleGetStarted}
            >
              <div className="relative leading-[150%]">Join Us</div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt="Right arrow"
                src="/icon--chevronright.svg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CTAHome onButtonClick={handleGetStarted} /> {/* Add navigation to Contact page */}
      <Footer
        footerBackgroundColor="rgba(245, 245, 245, 0.96)"
        companyLogo="/company-logo-1@2x.png"
      />
    </div>
  );
};

export default Home;