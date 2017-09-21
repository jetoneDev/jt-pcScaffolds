var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: 'source-map', //配置生成Source Maps，选择合适的选项
    // devtool:'eval-source-map',
    entry: __dirname + "/app.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist/", //打包后的文件存放的地方
        filename: "bundle.js", //打包后输出文件的文件名
        style: "style.css"
    },
    externals: {
    },
    module: { //在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    "presets": ['es2015', 'react', 'stage-0'],
                    "plugins": [
                        "babel-plugin-transform-decorators-legacy",
                        'babel-plugin-transform-runtime',
                        ["import", { libraryName: "antd", style: true }]
                    ]

                }
            },

            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'//cssModule

            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }, , {
                test: /\.(png|jpg|svg)$/,
                loader: 'url?limit=25000'
            }, {

                test: /\.(woff|woff2|svg|eot|ttf)\?.*$/,
                loader: 'file?name=./static/fonts/[name].[ext]',
            },

        ],
    },
    devServer: {
        port: "9030",
        host: "localhost",
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),//样式分离输出文件
    ],
}