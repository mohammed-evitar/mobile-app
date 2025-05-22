/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0710",
        cardbg: "#231f28",
        mypurple: "#947EFB",
        btn_color: "#4C68F5",
      },
    },
  },
  plugins: [],
} 