/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
import defaultTheme from "tailwindcss/defaultTheme";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "5rem",
      },
    },
    screen: {
      sm: "380px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#0079C1",
        theme: "#52BD94",
        hover: "30946D",
        p: "#A6A6A6",
        h: "#191A15",
      },
    },
    fontFamily: {
      sans: ["AvenirNextLTPro", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
});
