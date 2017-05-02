module.exports = {
  entry: './src/app.js',

  output: {
    path: __dirname,
    filename: 'lib/app.js'
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
}
