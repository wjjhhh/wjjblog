/**
 * Created by Employee on 2017/3/14.
 */
var webpack = require('webpack');

module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude:/node_modules/,//屏蔽不需要处理的文件(夹)（可选）,
                loader: 'babel-loader',

            },
            { test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
        ]
    },

};