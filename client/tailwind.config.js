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
      fontSize: {
        "2xs": ".625rem",
      },
      spacing: {
        "1/2": ".125rem",
      },
      inset: {
        "1/2": "50%",
        "-1/2": "-50%",
      },
      colors: {
        inherit: "inherit",
        background: "#727e84",
        accent: "#ebb7e7",
        primary: "#fcf5c3",
        secondary: "#729a98",
        tertiary: "#30404d",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "#ebb7e7" },
        },
      },
      animation: {
        typing:
          "typing 1.8s steps(18, start), blink-caret 1s step-end infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
