/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [
      {
        onedark: {
          primary: "#98c379",
          secondary: "#61afef",
          accent: "#c678dd",
          neutral: "#ABB2BF",
          "base-100": "#282c34",
          "base-200": "#2c313a",
          "base-300": "#31363f",
          info: "#56b6c2",
          success: "#98C379",
          warning: "#E5C07B",
          error: "#E06C75",
        },
      },
      "nord",
    ],
  },
};
