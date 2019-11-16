const path = require('path');
import helpers from './src/helpers'

module.exports = function (moduleOptions = {}) {
    const nuxtConfigOptions = this.options.preloaders || {};
    const options = helpers.deepMerge({}, moduleOptions, nuxtConfigOptions);
    this.addPlugin({
        src: path.resolve(__dirname, 'src/lib/nuxt-plugin.js'),
        fileName: 'vue-preloaders.js',
        options
    })
}
module.exports.meta = require('../../package.json');
