/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#94A3B8", // Personaliza el color primario
        secondary: "#ffed4a", // Personaliza el color secundario
      },
    },
  },
  plugins: [],
};
