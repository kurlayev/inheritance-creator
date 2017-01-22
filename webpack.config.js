var CopyWebpackPlugin = require('copy-webpack-plugin');

console.log('---> From Webpack.config! <---');
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