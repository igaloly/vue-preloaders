module.exports = {
    productionSourceMap: false,
    css: { extract: true },
    configureWebpack: {
        output: {
            libraryExport: 'default',
        }
    }
}