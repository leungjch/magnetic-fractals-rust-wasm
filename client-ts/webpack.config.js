const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    app: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
   },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
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
      client: {
        overlay: {
          warnings: false,
          errors: true
        },
      },

      headers: {
       "Cross-Origin-Embedder-Policy": "require-corp",
       "Cross-Origin-Opener-Policy": "same-origin" 
      },
      devMiddleware: { writeToDisk: true }
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }

};
