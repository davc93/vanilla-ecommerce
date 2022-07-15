const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.ts','tsx','.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer:{
    static:'./public/'
  },
  plugins:[
    new CopyPlugin({
      patterns: [
        // { from: "./public/index.html", to: "./index.html" },
        { from: "./public/styles", to: "./styles" },
        { from: "./public/assets/images/Logo.png", to: "./assets/images/Logo.png" },

      ],
    })
  ]
};

