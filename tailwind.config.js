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
        secondary: "#fbe7d1",
        tertiary: "#c5c7be",
      },
    },
  },
  variants: {},
  plugins: [],
};
