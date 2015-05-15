module.exports = {
  entry: {
    "./entry.js",
    "./src/fun.js"
  },
  output: {
    path: __dirname,
    filename: "[name]bundle.js",
    chunkFilename: "[id].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};