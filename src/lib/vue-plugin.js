import preloaders from './index'
import consts from '../consts'

export default {
    install(Vue, userDefaultOptions) {
        Vue.prototype[consts.loaderVariableName] = preloaders(userDefaultOptions);
    }
}
