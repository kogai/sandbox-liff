const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
// const yaml = require("yaml");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

// const serverlessEnv = yaml.parse(fs.readFileSync("serverless.env.yml", "utf8"));

module.exports = {
  entry: "./pages/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // {
      //   test: /\.css$/i,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      // {
      //   test: /\.(svg|png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //     },
      //   ],
      // },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "hidden-source-map",
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  // mode: "production",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 5000,
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "sandbox-liff",
      minify: false,
      //   template: "./page/template.html",
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].[hash].css",
    // }),
    new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [{ from: "static" }],
    // }),
    new webpack.DefinePlugin({
      "process.env": {
        LIFF_ID: JSON.stringify(process.env.LIFF_ID),
      },
    }),
  ],
};
