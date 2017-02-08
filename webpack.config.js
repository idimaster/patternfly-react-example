const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const failPlugin = require('webpack-fail-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const OmitTildeWebpackPlugin = require('omit-tilde-webpack-plugin');

module.exports = {
    entry: [
        "./src/index.tsx"
    ],
    //Config options on how to interpret requires imports
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
        modulesDirectories: ['node_modules']
    },
    output: {
        path: path.join(__dirname, 'docs'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                presets: ['es2015', 'stage-0', 'react']
            },
            //babel-loader is configured to run after ts-loader as ES6 compatibility layer
            {
                test: /\.(ts|tsx)/,
                loaders: ['react-hot', 'babel-loader', 'ts-loader'],
                presets: ['es2015', 'stage-0', 'react'],
                exclude: [/node_modules/],
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
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
        failPlugin,
        new ExtractTextPlugin("style.css"),
        new OmitTildeWebpackPlugin({deprecate: true}),
        new WebpackNotifierPlugin({ alwaysNotify: true })
    ],
    debug: true,
    devtool: 'eval'
};