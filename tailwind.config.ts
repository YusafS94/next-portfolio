import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "1": "1px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
    },
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
        primary: {
          1: "#01080E",
          2: "#011627",
          3: "#011221",
        },
        secondary: {
          1: "#607B96",
          2: "#3C9D93",
          3: "#4D5BCE",
          4: "#FFFFFF",
        },
        accent: {
          1: "#FEA55F",
          2: "#43D9AD",
          3: "#43D9AD",
          4: "#C98BDF",
        },
        lines: {
          1: "#1E2D3D",
        },
        gradients: {
          1: "#4D5BCE",
          2: "#43D9AD",
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
