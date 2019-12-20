const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarWebpackPlugin = require("progress-bar-webpack-plugin")

const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: {
    "marmot-mobile":  "./docs/site/mobile/main.js",
    "marmot-docs":  "./docs/site/desktop/main.js",
  },
  output: {
    path: path.join(__dirname, "../docs/dist"),
    publicPath: "/",
    chunkFilename: "async_[name].js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: "eslint-loader",
        enforce: "pre",
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(less|css)$/,
        sideEffects: true,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              paths: [path.resolve(__dirname, "node_modules")],
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "vue-loader",
          },
          {
            loader: "vue-markdown-loader/lib/markdown-compiler",
            options: {
              raw: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".vue", ".less"],
    alias: {
      "@": path.join(__dirname, "../src"),
    },
  },
  stats: {
    children: false,
  },
  devServer: {
    host: "0.0.0.0",
    open: true,
    stats: "errors-only",
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ["marmot-mobile"],
      template: "docs/site/mobile/index.html",
      filename: "mobile.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      chunks: ["marmot-docs"],
      template: "docs/site/desktop/index.html",
      filename: "index.html",
      inject: true,
    }),

  ],
}
