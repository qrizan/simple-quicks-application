import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      fontSize: {
        "12px": "12px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
      },
      colors: {
        primary: {
          blue: "#2F80ED",
          lightBlue: "#E9F3FF",
          darkGray: "#4F4F4F",
          gray: "#828282",
          lightGray: "#E0E0E0",
        },
        indicator: {
          peach: "#F8B76B",
          blue: "#8785FF",
          red: "#EB5757",
          yellow: "#F2C94C",
        },
      },
    },
  },
  variants: {
    scrollbar: ["rounded"],
  },
  plugins: [scrollbar],
};
