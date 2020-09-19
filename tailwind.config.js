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
        background: "#c2d9d5",
        primary: "#f67c99",
        secondary: "#fbe7d1",
        tertiary: "#c5c7be",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "#f67c99" },
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
