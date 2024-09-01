/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#eaeaea",
        },
        white: "#fff",
        
        "primary-grey": "#d4d5d6",
        "primary-gray2": "#999",
        "primary-black": "#262526",
        "secondary-blue": "#04536c",
        "primary-bg": "#ececec",
        "bg-black": "#1f1f1f",
        "gray-6": "#f2f2f2",
        teal: "#2b7a91",
        gainsboro: "#e8e8e8",
        black: "#000",
        gray: {
          "100": "#fefefe",
          "200": "#797979",
        },
        cornflowerblue: {
          "100": "#4a9ef0",
          "200": "#3085d6",
        },
        darkseagreen: {
          "100": "#a0d9ae",
          "200": "#6ea67a",
        },
        lightslategray: "#7a8fa3",
        lightsteelblue: "#adc1d5",
        forestgreen: "#28a745",
        mediumseagreen: "#42c25e",
        crimson: {
          "100": "#f54f5e",
          "200": "#dc3545",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      "7xl": "26px",
      "2xs": "11px",
      "2xl": "21px",
      "5xl": "24px",
      "21xl": "40px",
      lgi: "19px",
      xs: "12px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
