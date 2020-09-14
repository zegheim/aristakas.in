module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        inherit: "inherit",
        background: "#c2d9d5",
        primary: "#f67c99",
        secondary: "#c5c7be",
        "primary-light": "#e6b6b5",
        "secondary-light": "#fbe7d1",
      },
    },
  },
  variants: {},
  plugins: [],
};
