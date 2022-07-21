const path = require('path')
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
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
        port: 8081,
        open: true,

        onListening: function (devServer) {
            if (!devServer) {
                throw new Error ('dev-server not defined');
            }

            const port = devServer.server.address().port;
            console.log("Listening on port:", port);
        },
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