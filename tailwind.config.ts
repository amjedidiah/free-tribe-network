import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },
      color: {
        slate: {
          50: "#E6EFF3",
          500: "#065B82",
        },
        pink: {
          50: "#FDE6F4",
          500: "#EA028C",
        },
        white: "#ffffff",
      },
      height: {
        "100": "28rem",
        "128": "32rem",
        "132": "36rem",
        "136": "40rem",
        "140": "44rem",
        "144": "48rem",
        "148": "52rem",
        "152": "56rem",
        "156": "60rem",
        "160": "64rem",
        "164": "68rem",
        "168": "72rem",
        "172": "76rem",
      },
      width: {
        "136": "40rem",
        "140": "44rem",
        "144": "48rem",
      },
    },
  },
  plugins: [],
};
export default config;
