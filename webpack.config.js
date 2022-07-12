const path = require('path')
const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-import'),
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, 'app'),
    },
    devServer: {
        static: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        open: true,
    },
    mode: 'development',
    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', {loader: 'css-loader', options: {url: false}}, {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
            }
        ]
    }
}