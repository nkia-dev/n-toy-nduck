const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')

const baseConfig = require('./webpack.common.js')
const paths = require('./config/paths')

const devPort = 8080
const host = 'localhost'
const mode = 'development'

module.exports = merge(baseConfig(mode), {
    mode,
    devtool: 'cheap-module-source-map',
    entry: {
        bundle: [
            // 'react-hot-loader/patch',
            // `webpack-dev-server/client?http://${host}:${devPort}`,
            // 'webpack/hot/only-dev-server',
            require.resolve('react-dev-utils/webpackHotDevClient'),
            paths.appIndexJs,
        ],
    },
    output: {
        path: undefined,
        publicPath: '',
        pathinfo: true,
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
    },
    devServer: {
        inline: true,
        port: devPort,
        contentBase: paths.appPublic,
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
        host,
        proxy: {
            '/api': {
                target: 'http://localhost',
            },
            '/api/ws': {
                target: 'ws://localhost',
                ws: true,
            },
        },
        headers: {
            'X-Frame-Options': 'sameorigin', // used iframe
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // HMR을 사용하기 위한 플러그인
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            title: 'N-Duck',
        }),
        new ModuleNotFoundPlugin(paths.appPath),
        new WatchMissingNodeModulesPlugin(paths.appNodeModules),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
})
