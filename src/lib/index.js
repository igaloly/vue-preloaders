import helpers from '../helpers'
import consts from '../consts'
import loaderComponent from '../components/Preloader.vue'
import Vue from 'vue';

function preloaders(userDefaultOptions = {}) {
    // initiate loaders object if not exist
    userDefaultOptions.loaders = userDefaultOptions.loaders || {};

    // get default loader
    const defaultLoaderOptions = userDefaultOptions.loaders[userDefaultOptions.loader];

    // error if default loader declared but not found
    if (userDefaultOptions.loader && !defaultLoaderOptions) {
        return helpers.exeption.error('Default loader not found in loaders')
    }

    // parse user default options with default loader options
    let defaultOptions = helpers.deepMerge(
        {},
        helpers.getParsedOptions(userDefaultOptions), // user default options
        helpers.getParsedOptions(defaultLoaderOptions || {}) // default loader options
    );

    return {
        open(userOptions = {}) {
            // if server - abort and return close callback (to save from throwing error firing the callback that comes from .open())
            if (process && process.server) {
                return () => { };
            }

            // parse options
            let options = helpers.deepMerge(
                {},
                defaultOptions, // default options
                helpers.getParsedOptions(defaultOptions.loaders[userOptions.loader] || {}), // users [chosen loader] options
                helpers.getParsedOptions(userOptions) // user options
            )

            // get container
            let container = helpers.getContainer(options.container)
            // get controller (the object that's injected to the dom element to manipulate its loader)
            let containerController = container[consts.loaderVariableName] || {};

            // get container's css position
            const { position: containerCssPosition } = window.getComputedStyle(container)
            // set position change flag
            let isPositionChanged = !!containerController.isPositionChanged
            // if current position is static
            if (containerCssPosition === 'static') {
                // set to relative
                container.style.position = 'relative'
                // set flag
                isPositionChanged = true
            }

            // if loader already initialized - if controller in container
            if (consts.loaderVariableName in container) {
                // pass props if exists
                if (options.props) {
                    Object.entries(options.props).forEach(entry => {
                        const [key, value] = entry
                        containerController.props[key] = value
                    });
                }
                //set position changed flag
                containerController.isPositionChanged = isPositionChanged

                // if loader needs initialization
            } else {
                // extend loader
                const loaderConstructor = Vue.extend(loaderComponent);
                // pass props
                const loaderInstance = new loaderConstructor({
                    propsData: options.props
                });
                // mount
                loaderInstance.$mount()

                // init controller
                containerController = {
                    open() {
                        loaderInstance.isOpen = true
                    },
                    close() {
                        loaderInstance.isOpen = false
                    },
                    isPositionChanged,
                    props: loaderInstance.$props
                };
                // set controller to container
                container[consts.loaderVariableName] = containerController

                // append loader
                container.appendChild(loaderInstance.$el)
            }

            // open loader
            containerController.open()

            // return closing callback for loader
            return () => {
                this.close({ container })
            }
        },
        close({ container: userContainer } = {}) {
            // get container
            const container = helpers.getContainer(userContainer || defaultOptions.container);
            // get controller
            const containerController = container[consts.loaderVariableName];
            // handle close of never-opened container
            helpers.exeption.error('You must open a preloader before closing it.');

            // reset position after transition out
            setTimeout(() => {
                // if position changed and is relative now
                if (containerController.isPositionChanged && container.style.position === 'relative') {
                    // reset position
                    container.style.position = ''
                    // reset flag
                    containerController.isPositionChanged = false
                }
            }, consts.transitionDuration)

            // close
            containerController.close()
        }
    };
}

export default preloaders