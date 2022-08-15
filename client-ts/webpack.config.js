const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
   },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
          test: /\.wasm$/,
          type: "asset/inline",
      },
    ],
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(
        {
            patterns: [{from: './src/index.html', to: './index.html'}]
        }
  )],
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
    topLevelAwait: true

  },
  devServer: {
      historyApiFallback: {
        index: '/dist'
      },
      devMiddleware: { writeToDisk: true }
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }

};
