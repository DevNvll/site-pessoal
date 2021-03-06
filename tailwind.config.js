module.exports = {
  plugins: [require("tailwindcss-dark-mode")()],
  variants: {
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "active",
      "dark",
      "dark-hover",
      "dark-group-hover"
    ],

    borderColor: [
      "dark",
      "dark-focus",
      "dark-focus-within",
      "hover",
      "focus",
      "active"
    ],
    textColor: ["dark", "dark-hover", "dark-active"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"]
  },
  theme: {
    extend: {
      maxWidth: {
        "img-os": "80%"
      },
      fontFamily: {
        mono: ["Courier New", "monospace"]
      },
      colors: {
        gray: {
          100: "#E9E9E9",
          200: "#C8C8C8",
          300: "#A7A7A7",
          400: "#646464",
          500: "#222222",
          600: "#1F1F1F",
          700: "#141414",
          800: "#0F0F0F",
          900: "#0A0A0A"
        }
      }
    }
  }
}
