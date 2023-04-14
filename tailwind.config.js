module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // "./src/**/*",
    // "./index.html",
  ],
  theme: {
    extend: {
      spacing: {
        desktop: "180px",
      },
      maxWidth: {
        1180: "1180px",
      },
      boxShadow: {
        dropDown: "0px 4px 24px -2px rgba(0, 0, 0, 0.1)",
        menu: "0px 4px 14px rgba(0, 0, 0, 0.15);",
        product: "0px 4px 28px -2px rgba(0, 0, 0, 0.08)",
        "product-page": "0px -6px 6px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        big: "57px",
        small: "8px",
      },
      backgroundImage: {
        bgFooter:
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%);",
      },
      screens: {
        xs: "480px",
        xl: "1226px",
      },
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
    fontSize: {
      body8n: ["8px", { lineHeight: "12px", fontWeight: "400" }],
      body8m: ["8px", { lineHeight: "12px", fontWeight: "500" }],
      body8b: ["8px", { lineHeight: "12px", fontWeight: "700" }],
      body10n: ["10px", { lineHeight: "16px", fontWeight: "400" }],
      body10m: ["10px", { lineHeight: "16px", fontWeight: "500" }],
      body10b: ["10px", { lineHeight: "16px", fontWeight: "700" }],
      body12n: ["12px", { lineHeight: "18px", fontWeight: "400" }],
      body12m: ["12px", { lineHeight: "18px", fontWeight: "500" }],
      body12b: ["12px", { lineHeight: "18px", fontWeight: "700" }],
      body14n: ["14px", { lineHeight: "20px", fontWeight: "400" }],
      body14m: ["14px", { lineHeight: "20px", fontWeight: "500" }],
      body14b: ["14px", { lineHeight: "20px", fontWeight: "700" }],
      body16n: ["16px", { lineHeight: "24px", fontWeight: "400" }],
      body16m: ["16px", { lineHeight: "24px", fontWeight: "500" }],
      body16b: ["16px", { lineHeight: "24px", fontWeight: "700" }],
      body20n: ["20px", { lineHeight: "28px", fontWeight: "400" }],
      body20m: ["20px", { lineHeight: "28px", fontWeight: "500" }],
      body20b: ["20px", { lineHeight: "28px", fontWeight: "700" }],
      head24n: ["24px", { lineHeight: "36px", fontWeight: "400" }],
      head24m: ["24px", { lineHeight: "36px", fontWeight: "500" }],
      head24b: ["24px", { lineHeight: "36px", fontWeight: "700" }],
      head28n: ["28px", { lineHeight: "38px", fontWeight: "400" }],
      head28m: ["28px", { lineHeight: "38px", fontWeight: "500" }],
      head28b: ["28px", { lineHeight: "38px", fontWeight: "700" }],
      head36n: ["36px", { lineHeight: "54px", fontWeight: "400" }],
      head36m: ["36px", { lineHeight: "54px", fontWeight: "500" }],
      head36b: ["36px", { lineHeight: "54px", fontWeight: "700" }],
      head46n: ["46px", { lineHeight: "60px", fontWeight: "400" }],
      head46m: ["46px", { lineHeight: "60px", fontWeight: "500" }],
      head46b: ["46px", { lineHeight: "60px", fontWeight: "700" }],
      head46xb: ["46px", { lineHeight: "60px", fontWeight: "800" }],
      head52n: ["52px", { lineHeight: "68px", fontWeight: "400" }],
      head52m: ["52px", { lineHeight: "68px", fontWeight: "500" }],
      head52b: ["52px", { lineHeight: "68px", fontWeight: "700" }],
      head52xb: ["52px", { lineHeight: "68px", fontWeight: "800" }],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      blue: {
        light: "#0078cd",
        DEFAULT: "#003459",
        medium: "#00528c",
        dark: "#002a48",
        black: "#00171F",
      },
      yellow: {
        light: "#fceed5",
        DEFAULT: "#f7dba7",
        medium: "#f1d092",
        dark: "#eec77e",
      },
      red: "#ff564f",
      green: "#34c759",
      orange: "#ff912c",
      sea: "#00a7e7",
      primary: "#fdfdfd",
      secondary: "#ebeeef",
      disabled: "#ccd1d2",
      neutral: {
        0: "#fdfdfd",
        10: "#ebeeef",
        20: "#ccd1d2",
        40: "#99a2a5",
        60: "#667479",
        80: "#242b33",
        100: "#00171f",
      },
      dark: {},
    },
    fontFamily: {
      gilroy: ["Gilroy", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  darkMode: "class",
  relative: true,
};