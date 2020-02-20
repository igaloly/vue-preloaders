export default {
    cssClass: {
        type: String,
        default: ''
    },
    cssStyle: {
        type: Object,
        default: () => {
            return {}
        }
    },

    overlayStyle: {
        type: Object,
        default: () => {
            return {}
        }
    },

    component: {
        type: [Object, Boolean, Function],
        default: false
    },
    componentStyle: {
        type: Object,
        default: () => {
            return {}
        }
    },
    componentProps: {
        type: Object,
        default: () => {
            return {}
        }
    },

    assetWrapperStyle: {
        type: Object,
        default: () => {
            return {}
        }
    },
    assetSrc: {
        type: String,
        default: ''
    },
    assetStyle: {
        type: Object,
        default: () => {
            return {}
        }
    },

    text: {
        type: String,
        default: ''
    },
    textStyle: {
        type: Object,
        default: () => {
            return {}
        }
    },

    html: {
        type: String,
        default: ''
    },
    htmlStyle: {
        type: Object,
        default: () => {
            return {}
        }
    },
}
