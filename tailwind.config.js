/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Original colors with updated text color for better readability
        "color-scheme-1-text": "#2d3748", // Updated from #000 for better readability
        "color-white": "#fff",
        
        // Original whitesmoke colors preserved
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "rgba(245, 245, 245, 0.96)",
        },
        
        // Original colors preserved
        mediumaquamarine: "#43c6ac",
        gray: "rgba(0, 0, 0, 0.6)",
        
        // New wellness green color system
        "wellness-green": {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e", // Primary green
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        
        // New neutral backgrounds
        "neutral-bg": {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
        },
      },
      
      fontFamily: {
        // Updated to use Urbanist while preserving original structure
        "heading-desktop-h6": ["Urbanist", "Roboto", "system-ui", "sans-serif"],
        "urbanist": ["Urbanist", "Inter", "system-ui", "sans-serif"],
        "body": ["Urbanist", "Inter", "system-ui", "sans-serif"],
      },
      
      borderRadius: {
        // Original preserved
        "3xs": "10px",
        // New additions
        "2xs": "8px",
        "wellness": "16px", // Rounded corners for cards
      },
      
      padding: {
        // All original padding values preserved
        "61xl": "80px",
        "45xl": "64px",
        "93xl": "112px",
        "54xl": "73px",
        "13xl": "32px",
        "43xl": "62px",
        "28xl": "47px",
        xl: "20px",
      },
      
      maxWidth: {
        // Original preserved
        "custom-lg": "1200px", // Large screen max width
        "custom-sm": "400px",  // Small screen max width
        // New additions
        "container": "1440px", // Max container width
      },
      
      // New design system additions
      boxShadow: {
        'wellness': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'wellness-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
    
    fontSize: {
      // Original sizes preserved exactly
      xl: "20px",
      sm: "14px",
      lg: "18px",
      "29xl": "48px",
      "13xl": "32px",
      base: "16px",
      "5xl": "24px",
      "21xl": "40px",
      "37xl": "56px",
      "10xl": "29px",
      "19xl": "38px",
      lgi: "19px",
      "7xl": "26px",
      "15xl": "34px",
      "26xl": "45px",
      inherit: "inherit",
      
      // Additional standard sizes added (without overriding originals)
      'xs': '12px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '6xl': '60px',
    },
    
    screens: {
      // CRITICAL: Original responsive breakpoints preserved exactly
      lg: { max: "1200px" }, // Large screen breakpoint
      sm: { max: "400px" },  // Small screen breakpoint
      
      // Additional standard breakpoints added for enhanced flexibility
      // These won't interfere with your existing responsive design
      'xs': '480px',
      'md': '768px',
      'xl': '1280px',
      '2xl': '1536px',
      
      // Convenience aliases for the original breakpoints
      'lg-max': { max: "1200px" },
      'sm-max': { max: "400px" },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
