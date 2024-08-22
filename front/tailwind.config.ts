import type { Config } from "tailwindcss";
import animation from "tailwindcss-animate";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tailwindcss-animate/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        istok: ['"Istok Web"', "sans-serif"],
      },
      fontSize: {
        "20px": "20px",
      },
      dropShadow: {
        custom: "0 1px 1px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        customOrange: "#EB662B",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp"),
    animation,
  ],
};

export default config;
