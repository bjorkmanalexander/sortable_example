const { resolve, join } = require('path');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    mode: mode,
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }, 
                    { loader: 'sass-loader'}
                ]
            },
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    }
}