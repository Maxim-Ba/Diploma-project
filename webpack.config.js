const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash'); 
const webpack = require('webpack'); 
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const fs = require('fs');
const publicPath = './';

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        if (item.endsWith('.html')) {
            const parts = item.split('.');
            const name = parts[0];
            const extension = parts[1];
        
            return new HtmlWebpackPlugin({
                filename: `${name}.html`,
                template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
                inject: false,
                hash: true,
            })
        
        }
    })
}
const htmlPlugins = generateHtmlPlugins('./src/html')

module.exports = {
    entry: {
        index: './src/script/main.js',  
        about: './src/script/about.js',
        analytics: './src/script/analytics.js'        
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].[chunkhash].js',
        
    },
    
// 

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                    
                    (isDev ? 'style-loader' : {loader:MiniCssExtractPlugin.loader, options:{publicPath: '../'}})
                    ,
                    'css-loader', 
                    'postcss-loader',
                ]
            },
            {
                test: /\.(png|gif)$/i,
                use: [
                    'file-loader?name=./images/[name].[ext]', 
                    {
                        loader: 'image-webpack-loader'
                    }
                ],
            },
            {
                test: /\.(jpg|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader?name=./images/[name].[ext]'
                    },
                    
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            }
        ]
    },
    plugins: [ 
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new MiniCssExtractPlugin({
                filename: './style/[name].[contenthash].css',
                
                    
            
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new WebpackMd5Hash()    
    ].concat(htmlPlugins)
    
};