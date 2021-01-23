const path = require('path')

module.exports = {

    // entry: path.join(__dirname,'public','src','app.js'),
    entry: path.join(__dirname,'public','src','playground','redux-expensify.js'),

    output: {
        path:path.join(__dirname,'public', '/'),
        filename:'bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }]
    },

    devtool: "cheap-module-eval-source-map",

    devServer:{
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true,
        publicPath: '/'
    }
}