import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
      },
      keyframes: {
        heartbeat: {
          "0%": {
            backgroundColor: "transparent",
            color: "#67e8f9",
            borderColor: "#155e75",
          },
          "30%": {
            backgroundColor: "#67e8f9",
            color: "#0f172a",
            borderColor: "#67e8f9",
          },
          "50%": {
            backgroundColor: "transparent",
            color: "#67e8f9",
            borderColor: "#155e75",
          },
          "80%": {
            backgroundColor: "#67e8f9",
            color: "#0f172a",
            borderColor: "#67e8f9",
          },
          "100%": {
            backgroundColor: "transparent",
            color: "#67e8f9",
            borderColor: "#155e75",
          },
        },
      },
      animation: {
        heartbeat: "heartbeat 1s ease-in-out 1",
      },
    },
  },
} satisfies Config;
