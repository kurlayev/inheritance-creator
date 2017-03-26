var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:   './test/example.js',
    output:  {
        path:     './test',
        filename: 'example.bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/InheritanceCreator.js', to: '../' }
        ])
    ],
    devtool: 'sourcemap'
};