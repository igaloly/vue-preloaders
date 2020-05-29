import preloaders from './index'

export default {
    install(Vue, userDefaultOptions) {
        Vue.prototype.$preloaders = preloaders(userDefaultOptions);
    }
}
