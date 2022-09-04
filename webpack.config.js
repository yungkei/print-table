const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        library: 'printTable',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        filename: 'print-table.js',
        sourceMapFilename: 'print-table.map',
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.art$/,
                use: {
                    loader: 'raw-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            attributes: {
                                class: 'yk-print-style',
                            },
                        }
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                parallel: true
            })
        ]
    }
};