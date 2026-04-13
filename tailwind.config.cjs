/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")], // <--- ĐÂY LÀ DÒNG BẮT BUỘC PHẢI THÊM
  theme: {
    extend: {},
  },
  plugins: [],
}