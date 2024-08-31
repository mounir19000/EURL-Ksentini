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
        'ksantini-blue': {
            DEFAULT: "#4285F4",
            button: "#1976D2",
            dark: "3069FE",
            container: "F2F6FF",
        },
        'ksantini-black': {
            DEFAULT: "#000103",
            light: "#252C32",
        },
        'ksantini-green': "#0D9D58",
        'ksantini-white': "#FFFFFF",
        "ksantini-gray": {
            DEFAULT: "#676C72",
            dark: "#696969",
            darker: "#5F6368",
            darkest: "#21243D",
            light: "#787878",
            lighter: "#231F1FBF",
            lightest: "#989B9E",
            // colors for specific elements:
            filter: "#646567",
            line: "#B0BABF",
            button: "#4A4A4A",
            "checkbox": "#F6F8F9",
        },
        'ksantini-red': {
            DEFAULT: "#EA4334",
        },
        'ksantini-yellow': {
            DEFAULT: "#FCBC05",
            button: "#F1B201",
        }
    },
      height: {
        "ksantini-navbar": "105px",
        "ksantini-footer": "451px",
        "ksantini-footer-mobile": "430px",
    }
    },
  },
  plugins: [],
};
export default config;
