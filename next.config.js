const path = require("path")
const optimizedImages = require("next-optimized-images")

module.exports = optimizedImages({
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(
      __dirname,
      "./src/components"
    )
    return config
  }
})
