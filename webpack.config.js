const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const devMode = process.env.NODE_ENV !== 'production';
const devMode = false
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json'], // 支持的文件扩展名
        alias: {
            '@': path.resolve(__dirname, 'src') // 路径别名（与 tsconfig 同步）
        }
    },
    mode: 'development',
    //配置loader
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            // 处理 TypeScript 文件
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/] // 为 .vue 文件添加 .ts 后缀解析
                }
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                //use里面执⾏顺序是从右往左的顺序，先模块化再引入
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: true, //默认为true,可以处理css中的url图片路径
                            esModule: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer'],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer'],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|webp|svga)(\?.*)?$/,
                type: 'asset',
                generator: {
                    filename: 'imgs/[name].[contenthash:4][ext]',
                },
                parser: {
                    // 生成Data URI 的条件
                    dataUrlCondition: {
                        // 当资源模块不超过 4kb 时，生成 DataURI，超过 4kb 时，单独打包成文件
                        maxSize: 4 * 1024, // 4b
                    },
                },
            },
            {
                test: /\.(eot|ttf|otf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[contenthash:4][ext]',
                },
            }

        ]
    },
    devtool: 'inline-source-map', // 启用 source map 以便调试
    devServer: {
        static: path.join(__dirname, 'dist'), // 启动一个静态文件服务器
        hot: true, // 启用热更新
        open: true, // 启动时自动打开浏览器
        port: 8089, // 服务器端口
    },
    //配置plugins
    plugins: [
        new MiniCssExtractPlugin({
            // 长期缓存:使用 filename: "[contenthash].css" 启动长期缓存
            filename: devMode ? 'css/[name].css' : 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash:8].chunk.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'), //模板
            filename: 'index.html', //打包的 HTML 文件名字
            favicon: path.resolve(__dirname, './favicon.ico'), //网页图标
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
};