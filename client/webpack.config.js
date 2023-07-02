const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx)$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "esbuild-loader",
            options: {
              loader: "tsx",
              target: "es2015",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: 'container',
    })
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3002,
    open: true,
    historyApiFallback: true,
  },
};