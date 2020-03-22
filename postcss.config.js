const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
    whitelist: ["mode-dark"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
]
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
}
