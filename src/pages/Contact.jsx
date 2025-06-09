import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar companyLogo="/company-logo@2x.png" />
      
      {/* Enhanced Hero Section with modern styling */}
      <section className="w-full min-h-[600px] overflow-hidden flex flex-col items-center justify-center 
        py-20 px-16 box-border bg-[url('/public/hero2@3x.png')] bg-cover bg-no-repeat bg-center 
        text-center text-white font-urbanist relative animate-fade-in
        lg:py-16 lg:px-12 lg:min-h-[550px]
        md:py-12 md:px-10 md:min-h-[500px]
        sm:py-10 sm:px-8 sm:min-h-[450px]
        xs:py-8 xs:px-6 xs:min-h-[400px]">
        
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60 backdrop-blur-[1px]"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 bg-opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white bg-opacity-40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-green-300 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="w-full max-w-[768px] xl:max-w-[900px] 2xl:max-w-[1024px] mx-auto flex flex-col items-center justify-start gap-6 md:gap-8 xl:gap-10 relative z-10 animate-slide-up">
          {/* Enhanced label */}
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-semibold text-green-400 uppercase tracking-widest text-sm bg-white bg-opacity-10 px-6 py-3 rounded-full backdrop-blur-md border border-white border-opacity-20 shadow-lg hover:bg-opacity-15 transition-all duration-300">
              ✨ Connect
            </div>
          </div>
          
          <h1 className="m-0 self-stretch relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[120%] font-bold font-urbanist drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Connect With Us
            </span>
          </h1>
          
          <div className="self-stretch relative text-base md:text-lg xl:text-xl 2xl:text-2xl leading-[160%] text-gray-100 max-w-[600px] mx-auto drop-shadow-lg font-light">
            We're here to support your wellness journey and answer any questions
            you may have with <span className="text-green-300 font-medium">personalized care</span>.
          </div>
        </div>
      </section>
      
      <ContactUs />
      
      {/* Enhanced Map Section */}
      <section className="w-full bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden flex flex-col items-center justify-start py-20 md:py-24 lg:py-32 xl:py-36 2xl:py-40 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-24 box-border gap-12 md:gap-16 lg:gap-24 xl:gap-28 text-center text-color-scheme-1-text animate-fade-in relative">
        
        {/* Subtle background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-1/6 right-1/5 w-1 h-1 bg-green-400 bg-opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-green-300 bg-opacity-15 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-green-500 bg-opacity-10 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="w-full max-w-none xl:max-w-7xl 2xl:max-w-[1400px] mx-auto relative z-10">
          {/* Enhanced Map Container */}
          <div className="w-full h-[400px] xl:h-[500px] 2xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white border-opacity-50 backdrop-blur-md bg-white bg-opacity-10 p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden">
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
          </div>
        </div>
        
        {/* Enhanced Contact Info Cards */}
        <div className="w-full max-w-none xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <div className="w-full bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl border border-white border-opacity-50 overflow-hidden p-8 lg:p-12">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 xl:gap-16 2xl:gap-20">
              
              {/* Enhanced Email Card */}
              <div className="w-full md:flex-1 md:max-w-[33.33%] flex flex-col items-center justify-start gap-6 md:gap-8 xl:gap-10 min-w-[280px] bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 p-6 animate-slide-up border border-green-100 hover:border-green-200 group">
                <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img
                    className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 relative overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    alt="Email"
                    src="/icon--envelope-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-6 xl:gap-8">
                  <div className="self-stretch flex flex-col items-start justify-start gap-3 md:gap-4 xl:gap-6">
                    <h1 className="m-0 self-stretch text-center relative text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-[130%] font-bold font-urbanist text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                      Email
                    </h1>
                    <div className="self-stretch text-center relative text-sm md:text-base xl:text-lg 2xl:text-xl leading-[160%] text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      We're here to answer any questions you may have.
                    </div>
                  </div>
                  <div className="self-stretch text-center relative text-sm md:text-base xl:text-lg 2xl:text-xl text-green-600 font-semibold hover:text-green-700 cursor-pointer transition-colors duration-300">
                    hello@relume.io
                  </div>
                </div>
              </div>
              
              {/* Enhanced Phone Card */}
              <div className="w-full md:flex-1 md:max-w-[33.33%] flex flex-col items-center justify-start gap-6 md:gap-8 xl:gap-10 min-w-[280px] bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 p-6 animate-slide-up border border-green-100 hover:border-green-200 group delay-100">
                <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img
                    className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 relative overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    alt="Phone"
                    src="/icon--phone-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-6 xl:gap-8">
                  <div className="self-stretch flex flex-col items-start justify-start gap-3 md:gap-4 xl:gap-6">
                    <h1 className="m-0 self-stretch text-center relative text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-[130%] font-bold font-urbanist text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                      Phone
                    </h1>
                    <div className="self-stretch text-center relative text-sm md:text-base xl:text-lg 2xl:text-xl leading-[160%] text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Reach out to us for immediate assistance.
                    </div>
                  </div>
                  <div className="self-stretch text-center relative text-sm md:text-base xl:text-lg 2xl:text-xl text-green-600 font-semibold hover:text-green-700 cursor-pointer transition-colors duration-300">
                    +1 (555) 000-0000
                  </div>
                </div>
              </div>
              
              {/* Enhanced Office Card */}
              <div className="w-full md:flex-1 md:max-w-[33.33%] flex flex-col items-center justify-start gap-6 md:gap-8 xl:gap-10 min-w-[280px] bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 p-6 animate-slide-up border border-green-100 hover:border-green-200 group delay-200">
                <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img
                    className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 relative overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    alt="Office"
                    src="/icon--map-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-6 xl:gap-8">
                  <div className="self-stretch flex flex-col items-start justify-start gap-3 md:gap-4 xl:gap-6">
                    <h1 className="m-0 self-stretch text-center relative text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-[130%] font-bold font-urbanist text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                      Office
                    </h1>
                    <div className="self-stretch text-center relative text-sm md:text-base xl:text-lg 2xl:text-xl leading-[160%] text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Visit us at our convenient location.
                    </div>
                  </div>
                  <div className="self-stretch text-center relative text-sm md:text-base xl:text-lg 2xl:text-xl text-green-600 font-semibold hover:text-green-700 cursor-pointer transition-colors duration-300">
                    123 Sample St, Sydney NSW 2000 AU
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Contact Form Section */}
      <section className="w-full bg-gradient-to-br from-white via-green-50 to-green-100 overflow-hidden flex flex-col items-center justify-start py-20 md:py-24 lg:py-32 xl:py-36 2xl:py-40 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-24 box-border gap-12 md:gap-16 lg:gap-24 xl:gap-28 text-center text-base text-color-scheme-1-text animate-fade-in relative">
        
        {/* Background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/5 left-1/4 w-1.5 h-1.5 bg-green-400 bg-opacity-30 rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-1/5 right-1/4 w-1 h-1 bg-green-300 bg-opacity-25 rounded-full animate-pulse delay-800"></div>
        </div>

        <div className="w-full max-w-[768px] xl:max-w-[900px] 2xl:max-w-[1024px] mx-auto flex flex-col items-center justify-start gap-6 xl:gap-8 relative z-10 animate-slide-up">
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-semibold text-green-600 uppercase tracking-widest text-sm bg-green-100 bg-opacity-70 px-6 py-3 rounded-full backdrop-blur-sm border border-green-200 shadow-md hover:bg-opacity-90 transition-all duration-300 xl:text-base 2xl:text-lg">
              ✨ Contact
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-6 md:gap-8 xl:gap-10">
            <h1 className="m-0 self-stretch relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[120%] font-bold font-urbanist text-gray-800 drop-shadow-sm">
              <span className="bg-gradient-to-r from-gray-800 via-green-700 to-gray-800 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <div className="self-stretch relative text-base md:text-lg xl:text-xl 2xl:text-2xl leading-[160%] text-gray-600 max-w-[600px] mx-auto">
              We're here to assist you with your inquiries and support your wellness journey.
            </div>
          </div>
        </div>
        
        {/* Enhanced Form */}
        <div className="w-full max-w-[560px] xl:max-w-[640px] 2xl:max-w-[720px] mx-auto relative z-10">
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl border border-white border-opacity-50 p-8 lg:p-10 xl:p-12">
            <div className="flex flex-col items-center justify-start gap-6 md:gap-8 xl:gap-10 text-left">
              {/* Name Field */}
              <div className="self-stretch flex flex-col items-start justify-start gap-3 xl:gap-4">
                <div className="self-stretch relative leading-[150%] xl:text-lg 2xl:text-xl font-semibold text-gray-700">Name</div>
                <input
                  className="border-gray-300 border-solid border-[1px] [outline:none] bg-white bg-opacity-70 backdrop-blur-sm self-stretch w-full flex flex-row items-center justify-start p-4 xl:p-5 2xl:p-6 xl:text-lg 2xl:text-xl rounded-xl shadow-sm hover:shadow-md focus:shadow-lg focus:border-green-400 transition-all duration-300"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              
              {/* Email Field */}
              <div className="self-stretch flex flex-col items-start justify-start gap-3 xl:gap-4">
                <div className="self-stretch relative leading-[150%] xl:text-lg 2xl:text-xl font-semibold text-gray-700">Email</div>
                <input
                  className="border-gray-300 border-solid border-[1px] [outline:none] bg-white bg-opacity-70 backdrop-blur-sm self-stretch w-full flex flex-row items-center justify-start p-4 xl:p-5 2xl:p-6 xl:text-lg 2xl:text-xl rounded-xl shadow-sm hover:shadow-md focus:shadow-lg focus:border-green-400 transition-all duration-300"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              
              {/* Message Field */}
              <div className="self-stretch flex flex-col items-start justify-start gap-3 xl:gap-4">
                <div className="self-stretch relative leading-[150%] xl:text-lg 2xl:text-xl font-semibold text-gray-700">Message</div>
                <textarea
                  className="border-gray-300 border-solid border-[1px] bg-white bg-opacity-70 backdrop-blur-sm h-[182px] xl:h-[220px] 2xl:h-[260px] w-full [outline:none] self-stretch box-border flex flex-row items-start justify-start p-4 xl:p-5 2xl:p-6 font-urbanist text-base xl:text-lg 2xl:text-xl text-gray-700 rounded-xl shadow-sm hover:shadow-md focus:shadow-lg focus:border-green-400 transition-all duration-300 resize-none"
                  placeholder="Type your message..."
                  rows={9}
                  cols={28}
                />
              </div>
              
              {/* Checkbox */}
              <div className="self-stretch flex flex-row items-center justify-start gap-3 xl:gap-4 text-sm xl:text-base 2xl:text-lg">
                <input
                  className="m-0 h-5 w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 relative border-gray-300 border-solid border-[1px] box-border overflow-hidden shrink-0 rounded accent-green-500"
                  type="checkbox"
                />
                <div className="relative leading-[150%] text-gray-600">I accept the Terms and Conditions</div>
              </div>
              
              {/* Enhanced Submit Button */}
              <div className="self-stretch flex flex-row items-center justify-center">
                <button className="cursor-pointer py-4 px-8 xl:py-5 xl:px-10 2xl:py-6 2xl:px-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex flex-row items-center justify-center border-2 border-green-400 group">
                  <div className="relative text-base xl:text-lg 2xl:text-xl leading-[150%] font-urbanist font-semibold text-white">
                    Send Message
                  </div>
                  <svg className="ml-2 h-5 w-5 xl:h-6 xl:w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      {/* Enhanced CTA Section with CtaServices styling */}
<section className="w-full bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border text-left text-5xl text-color-white font-heading-desktop-h6 relative animate-fade-in lg:py-24 lg:px-12 md:py-20 md:px-10 md:text-4xl sm:py-16 sm:px-8 sm:text-3xl xs:py-12 xs:px-6 xs:text-2xl">
  {/* Floating particles effect */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-green-400 bg-opacity-30 rounded-full animate-pulse"></div>
    <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-blue-400 bg-opacity-40 rounded-full animate-pulse"></div>
    <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-green-300 bg-opacity-20 rounded-full animate-pulse"></div>
    <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 bg-opacity-25 rounded-full animate-pulse"></div>
  </div>

  <div className="w-full max-w-[1440px] mx-auto relative z-10">
    {/* Enhanced CTA Card with glassmorphism */}
    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-16 px-16 bg-gradient-to-br from-green-600/90 via-green-700/90 to-blue-700/90 backdrop-blur-xl bg-cover bg-no-repeat bg-center rounded-3xl shadow-2xl border border-white border-opacity-20 relative group hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 lg:py-14 lg:px-12 md:py-12 md:px-10 sm:py-10 sm:px-8 xs:py-8 xs:px-6"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(59, 130, 246, 0.9)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      {/* Enhanced background overlay with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 via-green-700/80 to-blue-700/80 backdrop-blur-sm rounded-3xl"></div>
      
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 left-16 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-8 relative z-10 lg:gap-7 lg:max-w-[680px] md:gap-6 md:max-w-[600px] sm:gap-5 sm:max-w-full xs:gap-4 xs:items-center xs:text-center">
        
        <div className="self-stretch flex flex-col items-start justify-start gap-6 lg:gap-5 md:gap-4 sm:gap-4 xs:gap-3 xs:items-center">
          
          {/* Enhanced heading with better text shadow */}
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] break-words text-white drop-shadow-2xl lg:text-4xl lg:leading-[52px] md:text-3xl md:leading-[42px] sm:text-2xl sm:leading-[36px] xs:text-xl xs:leading-[30px]">
            <span className="bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
              Get in Touch with Us
            </span>
          </h1>
          
          {/* Enhanced description text */}
          <div className="self-stretch relative text-lg leading-[150%] break-words text-green-50 font-light drop-shadow-lg lg:text-base lg:leading-[145%] md:text-base md:leading-[140%] sm:text-sm sm:leading-[135%] xs:text-xs xs:leading-[130%]">
            We're here to support your wellness journey. Reach out with any
            questions or to schedule a <span className="text-green-200 font-medium">personalized consultation</span>.
          </div>
        </div>

        {/* Added feature highlights for CTA */}
        <div className="flex flex-row items-center gap-6 flex-wrap sm:justify-center sm:gap-4 xs:gap-3">
          <div className="flex flex-row items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30 shadow-lg hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-100">24/7 Support</span>
          </div>
          
          <div className="flex flex-row items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30 shadow-lg hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-100">Quick Response</span>
          </div>
        </div>
        
        {/* Enhanced button section with proper visibility */}
        <div className="flex flex-row flex-wrap items-start justify-start gap-4 lg:gap-3 md:gap-3 sm:gap-2 sm:justify-center xs:gap-2 xs:flex-col xs:w-full xs:items-stretch">
          
          {/* Enhanced Submit button */}
          <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <button className="bg-white hover:bg-gray-50 text-green-700 px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/30 backdrop-blur-sm">
              Submit
            </button>
          </div>

          {/* Enhanced Inquire button with better visibility */}
          <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <button className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/50 hover:border-white/70 backdrop-blur-sm">
              Inquire
            </button>
          </div>
        </div>
      </div>

      {/* Floating badge on card */}
      <div className="absolute top-6 right-6 bg-gradient-to-r from-white/20 to-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white border-opacity-30 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-20">
        💬 Contact Us
      </div>
    </div>
  </div>

  {/* Additional stats section */}
  <div className="w-full max-w-[1440px] mx-auto flex flex-row items-center justify-center gap-12 mt-16 text-gray-600 relative z-10 lg:gap-8 lg:mt-12 md:gap-6 md:mt-10 sm:flex-col sm:gap-4 sm:mt-8">
    
    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
      <div className="text-2xl font-bold text-green-600">Instant</div>
      <div className="text-sm font-medium tracking-wide">Response</div>
    </div>

    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
      <div className="text-2xl font-bold text-blue-600">Expert</div>
      <div className="text-sm font-medium tracking-wide">Guidance</div>
    </div>

    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
      <div className="text-2xl font-bold text-green-600">Personal</div>
      <div className="text-sm font-medium tracking-wide">Care</div>
    </div>
  </div>
</section>
      <Footer companyLogo="/company-logo-1@2x.png" />
    </div>
  );
};

export default Contact;