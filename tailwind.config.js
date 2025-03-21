/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-scheme-1-text": "#000",
        "color-white": "#fff",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "rgba(245, 245, 245, 0.96)",
        },
        mediumaquamarine: "#43c6ac",
        gray: "rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        "heading-desktop-h6": "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
      },
      padding: {
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
        "custom-lg": "1200px", // Large screen max width
        "custom-sm": "400px",  // Small screen max width
      },
    },
    fontSize: {
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
    },
    screens: {
      lg: { max: "1200px" }, // Large screen breakpoint
      sm: { max: "400px" },  // Small screen breakpoint
    },
  },
  corePlugins: {
    preflight: false,
  },
};
;
