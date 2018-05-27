const env = process.env.NODE_ENV;

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
};

const config = {
  mode: env || 'development',
  entry: ['./src/thunkster.js'],
  output: {
    library: 'ReactForms',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  devtool: env === 'development' ? 'source-map' : false,
  externals: {
    react: reactExternal,
  },
};

module.exports = config;
