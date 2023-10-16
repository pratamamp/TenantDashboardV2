/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
const defaultTheme = require("tailwindcss/defaultTheme");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0079C1",
      },
    },
    fontFamily: {
      sans: ["AvenirNextLTPro", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
});
