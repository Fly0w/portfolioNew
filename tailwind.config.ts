import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#76ABAE",
        lightBlack: "#31363F",
        darkBlack: "#222831",
        paleWhite: "#EEEEEE",
        yellowish: "#FDF0D1",
      },
      height: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
      fontFamily: {
        satisfy: ["var(--font-satisfy)"],
        cormo: ["var(--font-cormo)"],
        assistant: ["var(--font-assistant)"],
        jap: ["var(--font-jap)"],
        titan: ["var(--font-titan)"],
      },
    },
  },
  plugins: [],
};
export default config;
