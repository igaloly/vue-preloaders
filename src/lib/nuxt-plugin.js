import preloaders from '~/node_modules/vue-preloaders/src/lib';

export default (ctx, inject) => {
    inject('preloaders', preloaders(JSON.parse(`<%= JSON.stringify(options).replace(/\\"/g, '\\\\"') %>`)))
}
