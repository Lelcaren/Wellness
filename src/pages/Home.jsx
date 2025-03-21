import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Empowering from "../components/Empowering";
import IdealWeight from "../components/IdealWeight";
import CTAHome from "../components/CTAHome";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative w-full overflow-x-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar companyLogo="/company-logo@2x.png" navLinksMargin="unset" />
     <section className="w-full max-w-full h-[900px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-16 box-border bg-[url('/public/hero1@3x.png')] bg-cover bg-no-repeat bg-top text-left text-37xl text-color-white font-heading-desktop-h6 lg:justify-start lg:px-28 md:h-auto md:py-16 md:px-8 sm:px-4 sm:text-20xl">
  <div className="w-[560px] max-w-full flex flex-col items-start justify-start py-5 px-0 box-border gap-8 sm:gap-4">
    <div className="self-stretch flex flex-col items-start justify-start gap-6">
      <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] sm:text-15xl sm:leading-[40px] md:text-26xl md:leading-[54px]">
        Transform Your Life with Holistic Wellness
      </h1>
      <div className="self-stretch relative text-lg leading-[150%] sm:text-base">
        At [Your Organization's Name], we empower you to achieve optimal
        health through personalized coaching and nutrition. Discover how
        our holistic approach can enhance your well-being and transform
        your lifestyle.
      </div>
    </div>
    <div className="flex flex-row items-start justify-start gap-4 sm:flex-col sm:items-stretch">
      <Button
        alternate
        iconPosition="No icon"
        small={false}
        style="Primary"
        button="Learn More"
      />
      <Button
        alternate
        iconPosition="No icon"
        small={false}
        style="Secondary"
        button="Get Started"
      />
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
      />
      <section className="w-full max-w-full bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-20 text-center text-base text-color-scheme-1-text font-heading-desktop-h6 lg:py-20 lg:gap-16 md:py-14 md:px-8 md:gap-10 sm:py-8 sm:px-4 sm:gap-6">
        <div className="w-[768px] max-w-full flex flex-col items-center justify-start gap-4">
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-semibold">
              Transform
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-6 text-29xl sm:text-19xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] sm:text-10xl sm:leading-[35px] md:text-19xl md:leading-[46px]">
              Why Choose Our Wellness Services?
            </h1>
            <div className="self-stretch relative text-lg leading-[150%] sm:text-base">
              At [Your Organization's Name], we prioritize your health with
              personalized coaching and expert guidance. Our holistic approach
              empowers you to achieve your wellness goals effectively.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-13xl md:gap-8 sm:gap-4">
          <div className="w-full max-w-full flex flex-row items-start justify-center gap-12 lg:gap-8 md:gap-6 sm:gap-4 flex-wrap">
            <div className="flex-1 min-w-[280px] overflow-hidden flex flex-col items-start justify-start gap-8 sm:gap-4">
              <img
                className="self-stretch h-60 relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/placeholder-image-11@2x.png"
              />
              <div className="self-stretch flex flex-col items-center justify-start gap-6">
                <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] sm:text-lgi sm:leading-[25px] md:text-7xl md:leading-[33px]">
                  Expert Coaching Tailored to You
                </h1>
                <div className="self-stretch relative text-base leading-[150%]">
                  Our dedicated coaches provide personalized support to meet
                  your unique health objectives.
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[280px] overflow-hidden flex flex-col items-start justify-start gap-8 sm:gap-4">
              <img
                className="self-stretch h-60 relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/placeholder-image-21@2x.png"
              />
              <div className="self-stretch flex flex-col items-center justify-start gap-6">
                <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] sm:text-lgi sm:leading-[25px] md:text-7xl md:leading-[33px]">
                  Nutrition That Works for Your Health
                </h1>
                <div className="self-stretch relative text-base leading-[150%]">
                  Discover how our science-backed nutrition can help prevent and
                  reverse chronic illnesses.
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[280px] overflow-hidden flex flex-col items-start justify-start gap-8 sm:gap-4">
              <img
                className="self-stretch h-60 relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/placeholder-image-31@2x.png"
              />
              <div className="self-stretch flex flex-col items-center justify-start gap-6">
                <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] sm:text-lgi sm:leading-[25px] md:text-7xl md:leading-[33px]">
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
        <div className="flex flex-row items-center justify-start gap-6 text-left flex-wrap">
          <Button
            alternate={false}
            iconPosition="No icon"
            small={false}
            style="Secondary"
            button="Learn More"
          />
          <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
            <div className="relative leading-[150%]">Join Us</div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon--chevronright.svg"
            />
          </div>
        </div>
      </section>
      <CTAHome />
      <Footer
        footerBackgroundColor="rgba(245, 245, 245, 0.96)"
        companyLogo="/company-logo-1@2x.png"
      />
    </div>
  );
};

export default Home;
