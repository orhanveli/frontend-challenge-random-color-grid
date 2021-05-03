const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: {
      import: path.resolve(__dirname, '../src/index.js'),
      dependOn: 'react',
    },
    react: ['react', 'react-dom'],
  },
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
                    'autoprefixer',
                    {},
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
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
  },
  target: 'web',
  output: {
    filename: '[name]-[fullhash].js',
    path: path.resolve(__dirname, '../public/dist'),
  },
  plugins: [new CleanWebpackPlugin()],
};
