import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {

        'zoom': 'zoom 10s',
      },
      keyframes: {
        zoom: {
          from : {
            transform: 'scale(1 , 1)',
          }, to : {
            transform: 'scale(1.2 , 1.2)',
          },
        },
      },
      colors: {
        'ksentini-orange': {
            DEFAULT: "#E06C01",
        },
        'ksentini-yellow': {  
            DEFAULT: "#FEB106",
        },
        'ksentini-red': {
            DEFAULT: "#F80201",
        },
    },
      height: {
        "ksentini-navbar": "105px",
        "ksentini-footer": "451px",
        "ksentini-footer-mobile": "430px",
    }
    },
  },
  plugins: [],
};
export default config;
