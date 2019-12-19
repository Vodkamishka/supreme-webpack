const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    "index.js": "./src/index.js",
    "ui-kit/colors-type/colors-type": "./src/ui-kit/colors-type/colors-type.js",
    "ui-kit/form-elements/form-elements":
      "./src/ui-kit/form-elements/form-elements.js",
    "ui-kit/headers-footers/headers-footers":
      "./src/ui-kit/headers-footers/headers-footers.js",
    "ui-kit/cards/cards": "./src/ui-kit/cards/cards.js",
    "ui-kit/demo/demo": "./src/ui-kit/demo/demo.js",
    "website-pages/landing/landing": "./src/website-pages/landing/landing.js",
    "website-pages/registration/registration":
      "./src/website-pages/registration/registration.js",
    "website-pages/sign-in/sign-in": "./src/website-pages/sign-in/sign-in.js",
    "website-pages/room-details/room-details":
      "./src/website-pages/room-details/room-details.js",
    "website-pages/search-room-filter/search-room-filter":
      "./src/website-pages/search-room-filter/search-room-filter.js"
  },
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          name: "[name].pug",
          pretty: true,
          self: true
        }
      },
      {
        test: /\.(gif|png|jpeg|svg|jpg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`
    }),
    new HTMLWebpackPlugin({
      filename: "ui-kit/cards/cards.html",
      hash: false,
      template: `./src/ui-kit/cards/cards.pug`,
      chunks: ["ui-kit/cards/cards"]
    }),
    new HTMLWebpackPlugin({
      filename: "ui-kit/colors-type/colors-type.html",
      hash: false,
      template: `./src/ui-kit/colors-type/colors-type.pug`,
      chunks: ["ui-kit/colors-type/colors-type"]
    }),
    new HTMLWebpackPlugin({
      filename: "ui-kit/form-elements/form-elements.html",
      hash: false,
      template: `./src/ui-kit/form-elements/form-elements.pug`,
      chunks: ["ui-kit/form-elements/form-elements"]
    }),
    new HTMLWebpackPlugin({
      filename: "ui-kit/headers-footers/headers-footers.html",
      hash: false,
      template: `./src/ui-kit/headers-footers/headers-footers.pug`,
      chunks: ["ui-kit/headers-footers/headers-footers"]
    }),
    new HTMLWebpackPlugin({
      filename: "website-pages/landing/landing.html",
      hash: false,
      template: `./src/website-pages/landing/landing.pug`,
      chunks: ["website-pages/landing/landing"]
    }),
    new HTMLWebpackPlugin({
      filename: "website-pages/registration/registration.html",
      hash: false,
      template: `./src/website-pages/registration/registration.pug`,
      chunks: ["website-pages/registration/registration"]
    }),
    new HTMLWebpackPlugin({
      filename: "website-pages/room-details/room-details.html",
      hash: false,
      template: `./src/website-pages/room-details/room-details.pug`,
      chunks: ["website-pages/room-details/room-details"]
    }),
    new HTMLWebpackPlugin({
      filename: "website-pages/search-room-filter/search-room-filter.html",
      hash: false,
      template: `./src/website-pages/search-room-filter/search-room-filter.pug`,
      chunks: ["website-pages/search-room-filter/search-room-filter"]
    }),
    new HTMLWebpackPlugin({
      filename: "website-pages/sign-in/sign-in.html",
      hash: false,
      template: `./src/website-pages/sign-in/sign-in.pug`,
      chunks: ["website-pages/sign-in/sign-in"]
    }),

    new HTMLWebpackPlugin({
      hash: false,
      template: `./src/ui-kit/cards/cards.pug`,
      chunks: ["ui-kit/cards/cards"]
    }),
    new CopyWebpackPlugin([
      { from: "./src/assets/img", to: "./assets/img" },
      { from: "./src/assets/fonts", to: "./assets/fonts" },
      { from: "./src/favicon.ico", to: "./favicon.ico" }
    ])
  ]
};
