const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  watch: true,
  entry: path.resolve(__dirname, '../src/index.js'),
  module: {
    rules: [
      {
        test: /\.[t|j]sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    // 'postcss-preset-env',
                    // {
                    //   // Options
                    // },
                    'autoprefixer', {},
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.jsx', '.ts', '.js' ],
  },
  target: 'web',
  output: {
    filename: '[name]-[fullhash].js',
    path: path.resolve(__dirname, '../public/dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: false,
    liveReload: false,
    clientLogLevel: 'debug',
    // lazy: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Talwind Test React App',
      template: path.join(__dirname, './index.html'),
    }),
    new CleanWebpackPlugin()
  ]
};
