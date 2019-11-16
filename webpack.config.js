const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',

    entry: {
        'vue-plugin': './src/lib/vue-plugin.js',
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        libraryExport: 'default',
        library: 'vue-preloaders',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    resolve: {
        extensions: ['*', '.js', '.vue']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};