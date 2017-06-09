var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ss = require('./src/ss_routes');

module.exports = {

  entry: './src/index',
  output: {
    path: 'build',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },  
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: __dirname + '/src'
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract(
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        ),
        include: __dirname + '/src'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
            'style-loader', // backup loader when not building .css file
            'css-loader!sass-loader' // loaders to preprocess CSS
        )
      },
      {
        test: /\.(jpg|png)/,
        loader: 'file-loader?name=assets/img-[hash:6].[ext]',
        include: __dirname + '/src'
      },
      {
        test: /\.(ico|otf|pdf)/,
        loader: 'file-loader?name=[name].[ext]',
        include: __dirname + '/src/'
      }
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new StaticSiteGeneratorPlugin('main', ss.routes, ss),
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } })
  ]
};
