module.exports = {
  output: {
    filename: "spec.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?optional[]=runtime'
      },
      { test: /\.css$/, loader: "style!css" }

    ]
  },
  watch: true
};