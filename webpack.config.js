const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',

    entry: {
        'nuxt-module': './src/lib/nuxt-module.js',
        'vue-plugin': './src/lib/vue-plugin.js',
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },

    resolve: {
        extensions: ['.js', '.vue']
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
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};