/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/stylesheets/**/*.{html,js}", "./app/views/**/*"],
  darkMode: "media",
  plugins: [require("daisyui")],
};
