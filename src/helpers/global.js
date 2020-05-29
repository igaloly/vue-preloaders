import deepMerge from 'lodash.merge'

const exeption = {
    error(error) {
        throw new TypeError(error)
    },
    warn(error) {
        console.warn(`[vue-preloaders] - ${error}`);
    }
};

const helpers = {
    exeption,
    deepMerge
};

export default helpers
