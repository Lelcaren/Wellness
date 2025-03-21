import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import GetInTouch from "../components/GetInTouch";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      {/* Navbar Section */}
      <Navbar companyLogo="/company-logo@2x.png" />

      {/* Hero Section */}
      <section
        className={`w-full max-w-[1440px] mx-auto overflow-hidden flex flex-col items-center justify-start 
          py-28 px-16 bg-[url('/public/hero2@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-37xl text-color-white font-heading-desktop-h6 
          lg:px-12 lg:py-24 
          md:px-10 md:py-20 
          sm:px-8 sm:py-16 
          xs:px-6 xs:py-12`}
      >
        <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-6">
          <h1
            className={`m-0 self-stretch relative text-inherit leading-[120%] font-bold 
              lg:text-26xl lg:leading-[54px] 
              md:text-19xl md:leading-[46px] 
              sm:text-15xl sm:leading-[40px] 
              xs:text-10xl xs:leading-[35px]`}
          >
            Connect With Us
          </h1>
          <p
            className={`self-stretch relative text-lg leading-[150%] 
              md:text-base 
              sm:text-sm 
              xs:text-xs`}
          >
            We're here to support your wellness journey and answer any questions
            you may have.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />

      {/* Contact Information Section */}
      <section
        className={`w-full max-w-[1440px] mx-auto bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start 
          py-28 px-16 gap-20 text-center text-13xl text-color-scheme-1-text font-heading-desktop-h6 
          lg:px-12 lg:py-24 lg:gap-16 
          md:px-10 md:py-20 md:gap-12 
          sm:px-8 sm:py-16 sm:gap-10 
          xs:px-6 xs:py-12 xs:gap-6`}
      >
        {/* Google Maps Embed */}
        <div className="w-full flex justify-center items-center">
  <iframe
    className={`w-full max-w-[1312px] h-[400px] rounded-lg shadow-md 
      lg:max-w-[1000px] lg:h-[350px] 
      md:max-w-[800px] md:h-[300px] 
      sm:max-w-[600px] sm:h-[250px] 
      xs:max-w-[90%] xs:h-[200px]`} // Center and reduce width for small screens
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654248049468!2d-87.62979492431142!3d41.878113666162324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca3e2d9b695%3A0x4c7a4a20859cca77!2sChicago%2C%20IL%2060601!5e0!3m2!1sen!2sus!4v1716510678949!5m2!1sen!2sus"
  ></iframe>
</div>

        {/* Contact Methods */}
        <div
          className={`flex flex-row items-center justify-center flex-wrap gap-12 
            lg:gap-10 
            sm:gap-8 
            xs:gap-6 xs:flex-col xs:items-center`}
        >
          {/* Email Info */}
          <div className="flex flex-col items-center gap-6 sm:gap-4 xs:gap-3">
            <img
              className="w-12 h-12 object-contain"
              alt="Email Icon"
              src="/icon--envelope-1.svg"
            />
            <h1 className="text-lg font-bold leading-[130%] sm:text-base xs:text-sm">
              Email
            </h1>
            <p className="text-base leading-[150%] sm:text-sm xs:text-xs">
              We're here to answer any questions you may have.
            </p>
            <p className="text-base leading-[150%] text-blue-600 underline">
              hello@relume.io
            </p>
          </div>

          {/* Phone Info */}
          <div className="flex flex-col items-center gap-6 sm:gap-4 xs:gap-3">
            <img
              className="w-12 h-12 object-contain"
              alt="Phone Icon"
              src="/icon--phone-1.svg"
            />
            <h1 className="text-lg font-bold leading-[130%] sm:text-base xs:text-sm">
              Phone
            </h1>
            <p className="text-base leading-[150%] sm:text-sm xs:text-xs">
              Reach out to us for immediate assistance.
            </p>
            <p className="text-base leading-[150%] text-blue-600 underline">
              +1 (555) 000-0000
            </p>
          </div>

          {/* Office Info */}
          <div className="flex flex-col items-center gap-6 sm:gap-4 xs:gap-3">
            <img
              className="w-12 h-12 object-contain"
              alt="Office Icon"
              src="/icon--map-1.svg"
            />
            <h1 className="text-lg font-bold leading-[130%] sm:text-base xs:text-sm">
              Office
            </h1>
            <p className="text-base leading-[150%] sm:text-sm xs:text-xs">
              Visit us at our convenient location.
            </p>
            <p className="text-base leading-[150%] text-blue-600 underline">
              123 Sample St, Sydney NSW 2000 AU
            </p>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <GetInTouch />

      {/* Call-to-Action Section */}
      <section
        className={`w-full max-w-[1400px] mx-auto bg-[url('/public/cta--contact@3x.png')] bg-cover bg-no-repeat bg-[top] 
          py-28 px-16 text-left text-29xl text-color-white font-heading-desktop-h6 
          lg:px-12 lg:py-24 
          md:px-10 md:py-20 
          sm:px-8 sm:py-16 
          xs:px-6 xs:py-12`}
      >
        <div className="w-full max-w-[768px] flex flex-col items-start gap-8 xs:gap-4">
          <h1
            className={`m-0 text-inherit leading-[120%] font-bold 
              lg:text-19xl lg:leading-[46px] 
              md:text-13xl md:leading-[38px] 
              sm:text-10xl sm:leading-[35px] 
              xs:text-7xl xs:leading-[30px]`}
          >
            Get in Touch with Us
          </h1>
          <p
            className={`text-lg leading-[150%] 
              md:text-base 
              sm:text-sm 
              xs:text-xs`}
          >
            We're here to support your wellness journey. Reach out with any
            questions or to schedule.
          </p>
          <div className="flex flex-row gap-4 xs:gap-3">
            <Button
              alternate
              iconPosition="No icon"
              small={false}
              style="Primary"
              button="Submit"
            />
            <Button
              alternate
              iconPosition="No icon"
              small={false}
              style="Secondary"
              button="Inquire"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer companyLogo="/company-logo-1@2x.png" />
    </div>
  );
};

export default Contact;
