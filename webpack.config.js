const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports={
    mode: 'development',
    entry: {
        app: './src/index.js'
        
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        contentBase: './dist',
        liveReload: true,
        port: 9000
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Management',
        template:"./src/index.html"
      }),
      new CleanWebpackPlugin()
    ],
    output:{
        filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/',
    },
    module:{
        rules:[
            {

            test: /\.css$/,
            use:[
                "style-loader",
                "css-loader",
                ],
            },
            {
                test: /\.(pgng|svg|jpg|jpeg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                'file-loader',
              ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
              {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
              },
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
              },
        ],
    },
};