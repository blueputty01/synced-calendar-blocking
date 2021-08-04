const path = require('path');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        serviceWorker: './src/serviceWorker.js',
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/64.png",
                    to: "64.png"
                }
            ]
        })
    ]
};