const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3003,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      })
    ],
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [ '@babel/preset-react', '@babel/preset-typescript' ],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe2',
      filename: 'remoteEntry.js',
      exposes: {
        './Widget': './src/Widget',
      },
      shared: [
        { react: { singleton: true }, 'react-dom': { singleton: true } },
        'moment',
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
