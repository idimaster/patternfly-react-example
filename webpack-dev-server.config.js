const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const failPlugin = require('webpack-fail-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const OmitTildeWebpackPlugin = require('omit-tilde-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        "./src/index.tsx"
    ],
    //Config options on how to interpret requires imports
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
    },
    //Server Configuration options
    devServer:{
        contentBase: 'docs',  //Relative directory for base of server
        historyApiFallback: {
            index: '/'
        },
        devtool: 'inline-source-map',
        hot: true,        //Live-reload
        inline: true,
        port: 3000        //Port Number
    },
    output: {
        path: path.join(__dirname, 'docs'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['react-hot-loader','babel-loader'],
                exclude: [/node_modules/],
                presets: ['es2015-loose', 'stage-0', 'react']
            },
            {
                test: /\.(ts|tsx)/,
                loaders: ['react-hot', 'babel-loader', 'ts-loader'],
                presets: ['es2015-loose', 'stage-0', 'react'],
                exclude: [/node_modules/],
				plugins: ["react-hot-loader/babel"]
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.(gif|png)$/, loader: "file-loader?name=[name].[ext]"},
            {test: /\.jpg$/, loader: "url-loader?mimetype=image/jpeg"},
            {test: /\.ico$/, loader: "file-loader?name=[name].[ext]"},
            {test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" },
            {test: /baseUrl\.json$/, loader: "file-loader?name=baseUrl.json"},
            {test: /\.json$/, loader: "json-loader"}
        ]
    },
    plugins: [
        //Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        failPlugin,
        new ExtractTextPlugin("style.css"),
        new OmitTildeWebpackPlugin({deprecate: true}),
        new WebpackNotifierPlugin({ alwaysNotify: true })
    ],
    debug: true,
    devtool: 'inline-source-map'
};