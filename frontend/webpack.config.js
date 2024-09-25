const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const tryResolve = (name) => {
  try {
    return require.resolve(name);
  } catch (e) {
    return false;
  }
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src", "assets"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@contexts": path.resolve(__dirname, "src", "contexts"),
      "@data": path.resolve(__dirname, "src", "data"),
      "@features": path.resolve(__dirname, "src", "features"),
      "@images": path.resolve(__dirname, "src", "assets", "images"),
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@styles": path.resolve(__dirname, "src", "assets", "styles"),
      "@utils": path.resolve(__dirname, "src", "utils"),
    },
    fallback: {
      crypto: tryResolve("crypto-browserify"),
      path: tryResolve("path-browserify"),
      stream: tryResolve("stream-browserify"),
      buffer: tryResolve("buffer"),
      process: tryResolve("process/browser"),
      vm: false,
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/_redirects", to: "" }],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
