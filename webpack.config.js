const path = require('path');

module.exports = {
  entry: './src/bg.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'bg.js',
    path: path.resolve(__dirname, 'lib'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
