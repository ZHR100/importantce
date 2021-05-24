// node环境中自带的一个模块
// 一般用来处理路径相关的操作
const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './main.js', // 入口文件，要打包的文件
    output: { // 打包到哪个位置
        // resolve() 拼接文件路径
        // __dirname：node环境的全局变量，当前文件的绝对路径
        path: path.resolve(__dirname, 'dist'), // 打包到哪个文件夹
        filename: 'bundle.js', // 生成的文件名称
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: './dist/',
                            name: 'imgs/[contenthash].[ext]'
                        }
                    },
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/i,
                use: ["vue-loader"],
            },
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('22222222222 \n 333333333'),
        new htmlWebpackPlugin({
            template: './index.html' // 打包的html用哪一个文件作为模板
        }),
        new uglifyjsWebpackPlugin()
    ],
    devServer: {
        port: '8888'
    }
}