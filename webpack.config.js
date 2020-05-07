const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production';

const mode = devMode ? 'development' : 'production';
const devtool = devMode ? 'inline-cheap-module-source-map' : 'source-map';

let main = ['./src/index.jsx'];
if (devMode) {
    main.unshift('webpack-hot-middleware/client?reload=true');
}

module.exports = {
    mode,

    devtool,

    devServer: {
        port: process.env.PORT || 4000
    },

    entry: {
        main,
    },

    output: {
        filename: 'bundles/[name].js',
        path: __dirname + '/dist',
        devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath),
        publicPath: '/',
    },

    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json',
            '.scss',
            '.css'
        ]
    },

    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.ejs$/,
                    /\.scss$/,
                    /\.json$/,
                    /\.(ts|tsx)$/
                ],
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ]
    },

    plugins: [
        new CaseSensitivePathsPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
