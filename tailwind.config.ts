import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        snow: "#fef6fa",
        aliceblue: "rgba(230, 239, 243, 0.5)",
        "second-grey": "#999",
        "grey-lighter": "#e6e6e6",
        blue: "#1d9bf0",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "50": "#fde6f4",
          "100": "#f8b1db",
          "400": "#ee35a3",
          500: "#EA028C",
          "600": "#7f56d9",
          700: "#6941C6",
          "800": "#81014d",
          "900": "#62013b",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          "50": "#e6eff3",
          "100": "#b2ccd8",
          "200": "#8cb4c6",
          "500": "#065b82",
          "600": "#055376",
          "800": "#033248",
          900: "#032637",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          "100": "#f2f4f7",
          "200": "rgba(150, 136, 136, 0.8)",
          "300": "#d0d5dd",
          "500": "#667085",
          "700": "#344054",
          "900": "#101828",
        },
        black: "#1a1a1a",
        description: "rgba(26, 26, 26, 0.8)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "3xs": "10px",
        "81xl": "100px",
        "181xl": "200px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", ...fontFamily.sans],
        "body-md-semibold": "'Maison Neue Extended'",
        "neue-montreal": "'Neue Montreal'",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
