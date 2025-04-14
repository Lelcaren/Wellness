import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar companyLogo="/company-logo@2x.png" />
      
      {/* Hero Section */}
      <section className="w-full max-w-[1440px] overflow-hidden flex flex-col items-center justify-start py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 box-border bg-[url('/public/hero2@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-white">
        <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-4 md:gap-6">
          <h1 className="m-0 self-stretch relative text-4xl md:text-5xl lg:text-6xl leading-[120%] font-bold font-inherit">
            Connect With Us
          </h1>
          <div className="self-stretch relative text-base md:text-lg leading-[150%]">
            We're here to support your wellness journey and answer any questions
            you may have.
          </div>
        </div>
      </section>
      
      <ContactUs />
      
      {/* Map Section */}
      <section className="w-full max-w-[1440px] bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 box-border gap-8 md:gap-12 lg:gap-20 text-center text-color-scheme-1-text">
  <div className="w-full max-w-[1312px] h-[400px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7462527791244!2d-122.41941638468157!3d37.77492997975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085d13a409d%3A0x97ef3aec5f2e029f!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1649959753409!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
        
        {/* Contact Info Cards */}
        <div className="w-full max-w-[1400px] bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start py-8 md:py-16 lg:py-28 px-4 md:px-8 lg:px-16 box-border">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col md:flex-row items-center justify-start flex-wrap content-center gap-8 md:gap-12">
              
              {/* Email Card */}
              <div className="w-full md:flex-1 flex flex-col items-center justify-start gap-4 md:gap-6 min-w-[280px]">
                <img
                  className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon--envelope-1.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-6">
                  <div className="self-stretch flex flex-col items-start justify-start gap-2 md:gap-4">
                    <h1 className="m-0 self-stretch relative text-xl md:text-2xl lg:text-3xl leading-[130%] font-bold font-inherit">
                      Email
                    </h1>
                    <div className="self-stretch relative text-sm md:text-base leading-[150%]">
                      We're here to answer any questions you may have.
                    </div>
                  </div>
                  <div className="self-stretch relative text-sm md:text-base [text-decoration:underline] leading-[150%]">
                    hello@relume.io
                  </div>
                </div>
              </div>
              
              {/* Phone Card */}
              <div className="w-full md:flex-1 flex flex-col items-center justify-start gap-4 md:gap-6 min-w-[280px]">
                <img
                  className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon--phone-1.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-6">
                  <div className="self-stretch flex flex-col items-start justify-start gap-2 md:gap-4">
                    <h1 className="m-0 self-stretch relative text-xl md:text-2xl lg:text-3xl leading-[130%] font-bold font-inherit">
                      Phone
                    </h1>
                    <div className="self-stretch relative text-sm md:text-base leading-[150%]">
                      Reach out to us for immediate assistance.
                    </div>
                  </div>
                  <div className="self-stretch relative text-sm md:text-base [text-decoration:underline] leading-[150%]">
                    +1 (555) 000-0000
                  </div>
                </div>
              </div>
              
              {/* Office Card */}
              <div className="w-full md:flex-1 flex flex-col items-center justify-start gap-4 md:gap-6 min-w-[280px]">
                <img
                  className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon--map-1.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-6">
                  <div className="self-stretch flex flex-col items-start justify-start gap-2 md:gap-4">
                    <h1 className="m-0 self-stretch relative text-xl md:text-2xl lg:text-3xl leading-[130%] font-bold font-inherit">
                      Office
                    </h1>
                    <div className="self-stretch relative text-sm md:text-base leading-[150%]">
                      Visit us at our convenient location.
                    </div>
                  </div>
                  <div className="self-stretch relative text-sm md:text-base [text-decoration:underline] leading-[150%]">
                    123 Sample St, Sydney NSW 2000 AU
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="w-full max-w-[1440px] bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 box-border gap-8 md:gap-12 lg:gap-20 text-center text-base text-color-scheme-1-text">
        <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-4">
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-semibold">Connect</div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-4 md:gap-6">
            <h1 className="m-0 self-stretch relative text-3xl md:text-4xl lg:text-5xl leading-[120%] font-bold font-inherit">
              Get in Touch
            </h1>
            <div className="self-stretch relative text-base md:text-lg leading-[150%]">
              We're here to assist you with your inquiries.
            </div>
          </div>
        </div>
        
        {/* Form */}
        <div className="w-full max-w-[560px] flex flex-col items-center justify-start gap-4 md:gap-6 text-left">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="self-stretch relative leading-[150%]">Name</div>
            <input
              className="border-color-scheme-1-text border-solid border-[1px] [outline:none] bg-[transparent] self-stretch w-full flex flex-row items-center justify-start p-3"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="self-stretch relative leading-[150%]">Email</div>
            <input
              className="border-color-scheme-1-text border-solid border-[1px] [outline:none] bg-[transparent] self-stretch w-full flex flex-row items-center justify-start p-3"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="self-stretch relative leading-[150%]">Message</div>
            <textarea
              className="border-color-scheme-1-text border-solid border-[1px] bg-[transparent] h-[182px] w-full [outline:none] self-stretch box-border flex flex-row items-start justify-start p-3 font-heading-desktop-h6 text-base text-gray"
              placeholder="Type your message..."
              rows={9}
              cols={28}
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-4 gap-2 text-sm">
            <input
              className="m-0 h-5 w-5 relative border-color-scheme-1-text border-solid border-[1px] box-border overflow-hidden shrink-0"
              type="checkbox"
            />
            <div className="relative leading-[150%]">I accept the Terms</div>
          </div>
          <button className="cursor-pointer border-color-scheme-1-text border-solid border-[1px] py-3 px-6 bg-color-scheme-1-text rounded-3xs flex flex-row items-center justify-center">
            <div className="relative text-base leading-[150%] font-heading-desktop-h6 text-color-white text-left">
              Submit
            </div>
          </button>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full max-w-[1440px] overflow-hidden flex flex-col items-start justify-start py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 box-border bg-[url('/public/cta--contact@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-white">
        <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-6 md:gap-8">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-6">
            <h1 className="m-0 self-stretch relative text-3xl md:text-4xl lg:text-5xl leading-[120%] font-bold font-inherit">
              Get in Touch with Us
            </h1>
            <div className="self-stretch relative text-base md:text-lg leading-[150%]">
              We're here to support your wellness journey. Reach out with any
              questions or to schedule.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
            <button className="cursor-pointer border-color-white border-solid border-[1px] py-3 px-6 bg-color-white rounded-3xs flex flex-row items-center justify-center">
              <div className="relative text-base leading-[150%] font-heading-desktop-h6 text-color-scheme-1-text text-left">
                Submit
              </div>
            </button>
            <button className="cursor-pointer border-color-white border-solid border-[1px] py-3 px-6 bg-[transparent] rounded-3xs flex flex-row items-center justify-center">
              <div className="relative text-base leading-[150%] font-heading-desktop-h6 text-color-white text-left">
                Inquire
              </div>
            </button>
          </div>
        </div>
      </section>
      
      <Footer companyLogo="/company-logo-1@2x.png" />
    </div>
  );
};

export default Contact;