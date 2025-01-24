export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {},
    screens: {
      sm: { max: "639px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: { max: "1279px" },
    },
  },
  plugins: [],
};
