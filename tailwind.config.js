/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  devServer: {
    open: true,
    allowedHosts: [
      "localhost",
      ".poststead.online",
      "poststead.online",
      "www.poststead.online",
    ]
  }
}
