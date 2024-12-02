/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        text: "var(--text-color)",
        text2: "var(--text2-color)",
        text3: "var(--text3-color)",
        text4: "var(--text4-color)",
        font: "var(--cairo)",
        btn: "var(--btn-color)",
      },
     
    },
  },
  plugins: [
    require("tailwindcss-rtl"),
    // يمكنك إضافة إضافات أخرى هنا
  ],
};
