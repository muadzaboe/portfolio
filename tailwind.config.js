/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightred: {
          ...require("daisyui/src/colors/themes")["[data-theme=cmyk]"],
          fontFamily: "Quicksand",
          primary: "#F67280",
          secondary: "#C06C84",
          accent: "#6C5B7B",
          neutral: "#355C7D",
        },
        darkred: {
          ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
          fontFamily: "Quicksand",
          primary: "#F67280",
          secondary: "#C06C84",
          accent: "#6C5B7B",
          neutral: "#355C7D",
        },
        lightgreen: {
          ...require("daisyui/src/colors/themes")["[data-theme=cmyk]"],
          fontFamily: "Quicksand",
          primary: "#1FAB89",
          secondary: "#62D2A2",
          accent: "#9DF3C4",
          neutral: "#D7FBE8",
        },
        darkgreen: {
          ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
          fontFamily: "Quicksand",
          primary: "#1FAB89",
          secondary: "#62D2A2",
          accent: "#9DF3C4",
          neutral: "#D7FBE8",
        },
      },
      "cupcake",
      "bumblebee",
      "emerald",
      "cyberpunk",
      "valentine",
      "halloween",
      "aqua",
      "pastel",
      "wireframe",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "night",
      "winter",
    ],
  },
}
