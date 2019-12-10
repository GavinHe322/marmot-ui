const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader');
console.log(
  __dirname, '????',
  path.join(__dirname, '../dist')
)
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path:  path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.vue', '.less'],
    alias: {
      '@': path.join(__dirname, '../src')
    },
  },
  stats: {
    children: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true,
    }),
  ]
}
