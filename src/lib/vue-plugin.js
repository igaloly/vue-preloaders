import preloaders from './index'
import consts from '../consts'

export default {
    install(Vue, userDefaultOptions) {
        Vue.prototype.$preloaders = preloaders(userDefaultOptions);
    }
}
