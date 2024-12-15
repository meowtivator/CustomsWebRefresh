/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "Noto Sans KR", "Arial", "sans-serif"], // 기본 Sans-serif
        body: ["Noto Sans KR", "Pretendard", "sans-serif"], // 본문용
        ui: ["Pretendard", "sans-serif"], // UI용
      },
      animation: {
        "pulse-scale": "pulseScale 2s infinite",
      },
      keyframes: {
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
