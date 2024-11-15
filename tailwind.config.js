/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      borderRadius: {
        home_center: "0% 0% 37% 0% / 10% 10% 7% 10%",
        
      },
    },
  },
  plugins: [],
};
