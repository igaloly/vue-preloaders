import helpers from '../helpers'

const path = require('path');

export default function (moduleOptions = {}) {
    const nuxtConfigOptions = this.options.preloaders || {};
    const options = helpers.deepMerge({}, moduleOptions, nuxtConfigOptions);
    this.addPlugin({
        src: path.resolve(__dirname, 'nuxt-plugin.js'),
        fileName: 'vue-preloaders.js',
        options
    })
}
module.exports.meta = require('../../package.json');
