const isProd = process.env.ENV === 'prod'
const filename = isProd
   ? 'lib/app.min.js' : 'lib/app.js'

module.exports = {
  entry: './src/app.js',

  output: {
    path: __dirname,
    filename
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
}
