import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        body: "Montserrat, sans-serif",
      },
      width: {
        "62": "246px",
        "75": "305px",
        "85": "335px",
      },
      height: {
        "13": "55px",
      },
      fontSize: {
        "text-sm-2": "14.4px",
      },
      colors: {
        emerald: {
          800: "#10744f",
        },
        yellow: {
          400: '#fcb900',
        }
      },
      spacing: {
        '18': '72px',
        '30': '120px'
      },
    },
  },
  plugins: [],
};
export default config;
