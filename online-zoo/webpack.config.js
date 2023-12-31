const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

const APP_PAGES = ["main", "donate"];

const generateMultiplePages = (pages) =>
  pages.map(
    (name) =>
      new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        template: path.join(__dirname, "pages", name, "index.html"),
        filename: `${name === pages[0] ? "index" : name}.html`,
        chunks: [`${name}`],
        favicon: "./src/img/favicon.png",
        // clean: true,
      })
  );

const generateMultipleJsEntries = (entries) =>
  entries.reduce(
    (resultEntry, entry) => ({
      ...resultEntry,
      [entry]: path.join(__dirname, "pages", entry, "script.js"),
    }),
    {}
  );

module.exports = {
  entry: {
    // main: "./pages/main/script.js",
    // donate: "./pages/donate/script.js",
    ...generateMultipleJsEntries(APP_PAGES),
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackHarddiskPlugin(),
    ...generateMultiplePages(APP_PAGES),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "assets"),
      src: path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(html)$/i,
        use: ["html-loader"],
      },
    ],
  },
};
