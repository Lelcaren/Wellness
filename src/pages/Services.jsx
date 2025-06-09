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
      
      {/* Thrive Section - Enhanced with modern design */}
      <section className="w-full max-w-[1440px] mx-auto bg-gradient-to-br from-green-50 to-green-100 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-base text-gray-800 font-heading-desktop-h6 animate-fade-in
        lg:py-20 lg:px-12
        md:py-16 md:px-8 
        sm:py-12 sm:px-4
        xs:py-8 xs:px-3">
        <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-20 
          lg:gap-16
          md:gap-10 
          sm:gap-5 sm:flex-col
          xs:gap-4">
          <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] animate-slide-up
            lg:gap-6
            md:gap-6 
            sm:min-w-full sm:w-full sm:items-center
            xs:gap-4">
            <div className="self-stretch flex flex-col items-start justify-start gap-8 
              md:gap-6 
              sm:gap-4 sm:items-center
              xs:gap-3">
              <div className="self-stretch flex flex-col items-start justify-start gap-4 sm:items-center xs:gap-2">
                {/* Enhanced section label */}
                <div className="flex flex-row items-center justify-start sm:justify-center">
                  <div className="relative leading-[150%] font-semibold text-green-600 uppercase tracking-wider text-sm bg-white bg-opacity-60 px-4 py-2 rounded-full shadow-sm">
                    Thrive
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-6 text-29xl sm:items-center xs:gap-4">
                  {/* Enhanced heading */}
                  <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] text-gray-800
                    lg:text-26xl lg:leading-[54px]
                    md:text-19xl md:leading-[46px]
                    sm:text-5xl sm:leading-[1.2] sm:text-center
                    xs:text-3xl xs:leading-[1.2]">
                    Transform Your Life with Personalized Coaching
                  </h1>
                  {/* Enhanced description */}
                  <div className="self-stretch relative text-lg leading-[150%] text-gray-600 max-w-[600px]
                    lg:text-base
                    md:text-base
                    sm:text-center sm:mx-auto
                    xs:text-sm">
                    Our lifestyle coaching empowers you to create sustainable
                    habits that enhance your overall well-being. Learn to manage
                    stress, improve sleep quality, and naturally boost your
                    energy levels through personalized guidance.
                  </div>
                </div>
              </div>
              
              {/* Enhanced stats section */}
              <div className="self-stretch flex flex-col items-start justify-start text-29xl sm:items-center">
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-6 
                  lg:gap-4
                  md:flex-wrap 
                  sm:flex-col sm:gap-4
                  xs:gap-3">
                  <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[192px] bg-white bg-opacity-40 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300
                    lg:p-5
                    md:p-4
                    sm:min-w-0 sm:w-full sm:items-center
                    xs:p-3">
                    <b className="self-stretch relative leading-[120%] text-green-600
                      lg:text-22xl
                      md:text-17xl
                      sm:text-5xl sm:leading-[1.2] sm:text-center
                      xs:text-3xl">
                      95%
                    </b>
                    <div className="self-stretch relative text-base leading-[150%] break-words text-gray-700
                      md:text-sm
                      sm:text-center
                      xs:text-xs">
                      Achieve balance and harmony in your daily life.
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[192px] bg-white bg-opacity-40 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300
                    lg:p-5
                    md:p-4
                    sm:min-w-0 sm:w-full sm:items-center
                    xs:p-3">
                    <b className="self-stretch relative leading-[120%] text-green-600
                      lg:text-22xl
                      md:text-17xl
                      sm:text-5xl sm:leading-[1.2] sm:text-center
                      xs:text-3xl">
                      100+
                    </b>
                    <div className="self-stretch relative text-base leading-[150%] break-words text-gray-700
                      md:text-sm
                      sm:text-center
                      xs:text-xs">
                      Unlock your potential with expert guidance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA button */}
            <div className="flex flex-row items-center justify-start gap-6 sm:flex-col sm:items-center xs:gap-3">
              <button className="cursor-pointer border-green-500 border-solid border-2 py-4 px-8 
                bg-green-600 hover:bg-green-700 rounded-lg 
                flex flex-row items-center justify-center gap-2 transition-all duration-300 
                shadow-lg hover:shadow-xl transform hover:scale-105 group
                lg:py-3 lg:px-6
                md:py-3 md:px-6
                sm:w-full sm:max-w-[280px]
                xs:py-2.5 xs:px-5">
                <div className="relative text-base leading-[150%] font-semibold text-white text-left
                  md:text-sm">
                  Sign Up Now
                </div>
                <svg 
                  className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1
                    md:h-4 md:w-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Enhanced image section */}
          <div className="flex-1 min-w-[400px] animate-slide-up
            sm:min-w-0 sm:w-full
            xs:w-full">
            <img
              className="h-[640px] w-full relative max-w-full overflow-hidden object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]
                lg:h-[560px]
                md:h-[480px]
                sm:h-auto sm:max-h-[400px]
                xs:h-[280px]"
              loading="lazy"
              alt="Personalized coaching and lifestyle transformation"
              src="/placeholder-image@2x.png"
            />
          </div>
        </div>
      </section>
      
      <OrganicKitchen
        heading="Cultivate Your Own Organic Kitchen Garden for a Healthier Lifestyle"
        text="Discover the joy of growing your own organic food right at home. Our expert tips on sustainable gardening and meal planning will empower you to create a thriving kitchen garden."
        placeholderImage="/fruits1.jpg"
      />
      
      <IdealWeight
        heading="Achieve Your Ideal Weight Naturally"
        text="Experience weight management that prioritizes your health without the stress of calorie counting. Embrace nutrient-rich foods and mindful eating practices to foster a sustainable lifestyle."
        button1="Start"
        placeholderImage="/ideal weight.jpg"
      />
      
      <OrganicKitchen
        heading="Harness the Healing Power of Food for Chronic Illness Management"
        text="Discover how food can be a powerful ally in managing chronic conditions like diabetes and high blood pressure. Our approach emphasizes natural detox methods and nutrient-rich diets to support your health journey."
        placeholderImage="/fruits2.jpg"
      />
      
      <TransformMeals />
      
      {/* Nourish Section - Enhanced with green theme */}
      <section className="w-full max-w-[1440px] mx-auto bg-gradient-to-br from-green-50 to-green-100 overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-20 text-center text-base text-gray-800 font-heading-desktop-h6 animate-fade-in
        lg:gap-16 lg:py-20 lg:px-12
        md:gap-10 md:py-16 md:px-8
        sm:gap-8 sm:py-12 sm:px-6
        xs:gap-5 xs:py-8 xs:px-4">
        <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-4 animate-slide-up xs:gap-3">
          {/* Enhanced section label */}
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-semibold text-green-600 uppercase tracking-wider text-sm bg-white bg-opacity-60 px-4 py-2 rounded-full shadow-sm">
              Nourish
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-6 text-29xl xs:gap-4">
            {/* Enhanced heading */}
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] text-gray-800
              lg:text-26xl lg:leading-[54px]
              md:text-19xl md:leading-[46px]
              sm:text-5xl sm:leading-[1.2]
              xs:text-3xl xs:leading-[1.2]">
              Explore Our Specialized Nutrition Programs
            </h1>
            {/* Enhanced description */}
            <div className="self-stretch relative text-lg leading-[150%] text-gray-600 max-w-[600px] mx-auto
              lg:text-base
              md:text-base
              sm:text-sm
              xs:text-sm">
              Discover the transformative power of nutrition through our
              specialized programs. Tailored to meet your health goals, these
              offerings empower you to make informed dietary choices.
            </div>
          </div>
        </div>
        
        {/* Enhanced programs section with green theme */}
        <div className="self-stretch bg-gradient-to-r from-green-500 to-green-600 flex flex-col items-center justify-start py-16 px-8 rounded-3xl shadow-2xl animate-slide-up
          lg:py-12 lg:px-6
          md:py-10 md:px-5
          sm:py-8 sm:px-4
          xs:py-6 xs:px-3 text-13xl">
          <div className="w-full max-w-[1200px] flex flex-row items-start justify-center flex-wrap gap-12 
            lg:gap-8
            md:gap-6
            sm:gap-8 sm:flex-col
            xs:gap-6">
            
            {/* Program 1 */}
            <div className="flex-1 flex flex-col items-center justify-start gap-6 min-w-[250px] bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105
              lg:p-6 lg:min-w-[220px]
              md:p-5
              sm:min-w-0 sm:w-full
              xs:p-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center
                lg:w-14 lg:h-14
                md:w-12 md:h-12
                xs:w-10 xs:h-10">
                <svg className="w-8 h-8 text-white lg:w-7 lg:h-7 md:w-6 md:h-6 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-6 xs:gap-4">
                <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] text-white break-words
                  lg:text-7xl lg:leading-[33px]
                  md:text-5xl md:leading-[28px]
                  sm:text-lgi sm:leading-[25px]
                  xs:text-base xs:leading-[22px]">
                  Intermittent Fasting & Health
                </h1>
                <div className="self-stretch relative text-base leading-[150%] break-words text-gray-100
                  md:text-sm
                  xs:text-xs">
                  Unlock your body's potential by boosting metabolism and
                  promoting cellular repair through guided fasting protocols.
                </div>
              </div>
            </div>
            
            {/* Program 2 */}
            <div className="flex-1 flex flex-col items-center justify-start gap-6 min-w-[250px] bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105
              lg:p-6 lg:min-w-[220px]
              md:p-5
              sm:min-w-0 sm:w-full
              xs:p-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center
                lg:w-14 lg:h-14
                md:w-12 md:h-12
                xs:w-10 xs:h-10">
                <svg className="w-8 h-8 text-white lg:w-7 lg:h-7 md:w-6 md:h-6 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"/>
                </svg>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-6 xs:gap-4">
                <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] text-white break-words
                  lg:text-7xl lg:leading-[33px]
                  md:text-5xl md:leading-[28px]
                  sm:text-lgi sm:leading-[25px]
                  xs:text-base xs:leading-[22px]">
                  Juice Fasting & Detox
                </h1>
                <div className="self-stretch relative text-base leading-[150%] break-words text-gray-100
                  md:text-sm
                  xs:text-xs">
                  Cleanse your body naturally with our guided juice fasting
                  programs designed for optimal detoxification.
                </div>
              </div>
            </div>
            
            {/* Program 3 */}
            <div className="flex-1 flex flex-col items-center justify-start gap-6 min-w-[250px] bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105
              lg:p-6 lg:min-w-[220px]
              md:p-5
              sm:min-w-0 sm:w-full
              xs:p-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center
                lg:w-14 lg:h-14
                md:w-12 md:h-12
                xs:w-10 xs:h-10">
                <svg className="w-8 h-8 text-white lg:w-7 lg:h-7 md:w-6 md:h-6 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-6 xs:gap-4">
                <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] text-white break-words
                  lg:text-7xl lg:leading-[33px]
                  md:text-5xl md:leading-[28px]
                  sm:text-lgi sm:leading-[25px]
                  xs:text-base xs:leading-[22px]">
                  Raw Food & Health
                </h1>
                <div className="self-stretch relative text-base leading-[150%] break-words text-gray-100
                  md:text-sm
                  xs:text-xs">
                  Experience the benefits of a plant-based diet for optimal
                  health and natural energy enhancement.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA buttons */}
        <div className="flex flex-row items-center justify-start gap-6 text-left animate-slide-up
          md:gap-4
          sm:flex-col sm:items-center sm:gap-4
          xs:gap-3">
          <div className="transform transition-all duration-300 hover:scale-105">
            <Button
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Secondary"
              button="Learn More"
              className="shadow-lg hover:shadow-xl"
            />
          </div>
          <button className="overflow-hidden flex flex-row items-center justify-center gap-2 text-green-600 hover:text-green-700 transition-colors duration-300 group">
            <div className="relative leading-[150%] font-medium">Join Programs</div>
            <svg 
              className="h-6 w-6 relative overflow-hidden shrink-0 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
      
      {/* Wellness Section - Enhanced with green theme */}
      {/* Enhanced Wellness Section - Applied OrganicKitchen styling */}
<section className="w-full bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-21xl text-color-scheme-1-text font-heading-desktop-h6 relative animate-fade-in
  lg:px-12 lg:py-24
  md:pt-20 md:pb-20 md:box-border md:text-13xl md:leading-[38px]
  sm:gap-10 sm:px-8 sm:box-border sm:py-16
  xs:gap-5 xs:pt-10 xs:pb-10 xs:px-4 xs:box-border">
  
  {/* Floating particles effect */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-green-400 bg-opacity-30 rounded-full animate-pulse"></div>
    <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-blue-400 bg-opacity-40 rounded-full animate-pulse delay-1000"></div>
    <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-green-300 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
    <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 bg-opacity-25 rounded-full animate-pulse delay-700"></div>
  </div>

  <div className="w-full max-w-none xl:max-w-7xl mx-auto flex flex-row items-center justify-between gap-20 relative z-10 lg:gap-16 md:gap-12 sm:flex-col sm:items-center sm:gap-8">
    
    {/* Enhanced Text Section with glassmorphism */}
    <div className="w-full xl:flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-6 xl:min-w-[400px] lg:min-w-[350px] sm:min-w-full sm:items-center xl:max-w-[50%] animate-slide-up">
      
      {/* Section label */}
      <div className="flex flex-row items-center justify-start sm:justify-center mb-2">
        <div className="relative leading-[150%] font-semibold text-green-600 uppercase tracking-wider text-sm bg-white bg-opacity-60 px-4 py-2 rounded-full shadow-sm">
          Wellness
        </div>
      </div>

      {/* Enhanced heading with gradient text */}
      <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] drop-shadow-lg lg:text-5xl md:text-4xl sm:text-2xl sm:text-center">
        <span className="bg-gradient-to-r from-gray-800 via-green-700 to-blue-700 bg-clip-text text-transparent">
          Experience Our Comprehensive In-House Wellness Services
        </span>
      </h1>
      
      {/* Enhanced text with better styling */}
      <div className="self-stretch relative text-lg leading-[160%] text-gray-600 font-light lg:text-xl sm:text-base sm:text-center lg:leading-[32px]">
        Our in-house wellness services are designed to rejuvenate your body and mind. Discover personalized treatments that promote healing, relaxation, and overall well-being through expert care.
      </div>

      {/* Enhanced service highlights */}
      <div className="flex flex-row items-center gap-8 mt-4 flex-wrap sm:justify-center sm:gap-6">
        <div className="flex flex-row items-center gap-2 bg-white bg-opacity-60 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">Detox Therapy</span>
        </div>
        
        <div className="flex flex-row items-center gap-2 bg-white bg-opacity-60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">Hydrotherapy</span>
        </div>
      </div>

      {/* Enhanced service cards */}
      <div className="flex flex-row items-start justify-start gap-6 flex-wrap sm:justify-center mt-6">
        <div className="flex flex-col items-start justify-start gap-3 bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-[240px] transition-all hover:shadow-xl transform hover:scale-105 border border-green-100
          lg:p-5 md:p-4 sm:p-4 sm:max-w-[200px] xs:items-center xs:max-w-full xs:w-full xs:max-w-[280px]">
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mb-2 shadow-md">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12M12,17L8.5,21L9.91,22.41L12,20.31L14.09,22.41L15.5,21L12,17Z"/>
            </svg>
          </div>
          <b className="leading-[140%] text-lg text-gray-800 md:text-base xs:text-base">
            Deep Cleansing
          </b>
          <p className="text-base leading-[150%] text-gray-600 md:text-sm xs:text-sm xs:text-center">
            A guided detox plan for deep cleansing and revitalization of your entire system.
          </p>
        </div>
        
        <div className="flex flex-col items-start justify-start gap-3 bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-[240px] transition-all hover:shadow-xl transform hover:scale-105 border border-blue-100
          lg:p-5 md:p-4 sm:p-4 sm:max-w-[200px] xs:items-center xs:max-w-full xs:w-full xs:max-w-[280px]">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mb-2 shadow-md">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
          </div>
          <b className="leading-[140%] text-lg text-gray-800 md:text-base xs:text-base">
            Water Healing
          </b>
          <p className="text-base leading-[150%] text-gray-600 md:text-sm xs:text-sm xs:text-center">
            Water-based treatments to enhance relaxation and improve circulation naturally.
          </p>
        </div>
      </div>

      {/* Enhanced CTA button */}
      <div className="mt-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
        <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-400">
          Book Wellness Session
        </button>
      </div>
    </div>

    {/* Enhanced Image Section with glassmorphism frame - SAME AS ORGANIC KITCHEN */}
    <div className="h-[640px] lg:h-[500px] md:h-[400px] sm:h-[300px] w-full xl:flex-1 xl:max-w-[50%] relative overflow-hidden lg:min-w-[450px] sm:min-w-full animate-slide-up delay-100">
      
      {/* Glassmorphism container for image */}
      <div className="relative w-full h-full bg-white bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white border-opacity-50 p-6 hover:bg-opacity-80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden">
        {/* Subtle background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-transparent to-blue-100/30 pointer-events-none rounded-3xl"></div>
        
        {/* Enhanced image with better styling */}
        <img
          className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10 transition-all duration-500 group-hover:scale-105"
          loading="lazy"
          alt="Wellness services and spa treatments"
          src="/massage.jpg"
        />

        {/* Floating badge */}
        <div className="absolute top-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-green-400 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-20">
          ✨ Expert Care
        </div>

        {/* Corner decorative elements */}
        <div className="absolute bottom-8 left-8 flex flex-row gap-2 z-20">
          <div className="w-3 h-3 bg-green-400 bg-opacity-60 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-blue-400 bg-opacity-60 rounded-full animate-pulse delay-300"></div>
          <div className="w-3 h-3 bg-green-300 bg-opacity-60 rounded-full animate-pulse delay-600"></div>
        </div>
      </div>
    </div>
  </div>

  {/* Additional wellness stats section */}
  <div className="w-full max-w-none xl:max-w-7xl mx-auto flex flex-row items-center justify-center gap-12 mt-16 text-gray-600 relative z-10 animate-slide-up delay-200 lg:gap-8 lg:mt-12 md:gap-6 md:mt-10 sm:flex-col sm:gap-4 sm:mt-8">
    
    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
      <div className="text-2xl font-bold text-green-600">Professional</div>
      <div className="text-sm font-medium tracking-wide">Therapists</div>
    </div>

    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
      <div className="text-2xl font-bold text-blue-600">Holistic</div>
      <div className="text-sm font-medium tracking-wide">Approach</div>
    </div>

    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white border-opacity-40 shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
      <div className="text-2xl font-bold text-green-600">Natural</div>
      <div className="text-sm font-medium tracking-wide">Healing</div>
    </div>
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