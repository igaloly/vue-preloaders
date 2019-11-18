import consts from '~/node_modules/vue-preloaders/src/consts';
import preloaders from '~/node_modules/vue-preloaders/src/lib';

export default (ctx, inject) => {
    inject(consts.loaderInjectName, preloaders(JSON.parse(`<%= JSON.stringify(options).replace(/\\"/g, '\\\\"') %>`)))
}
