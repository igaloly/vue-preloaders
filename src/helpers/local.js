import props  from '../consts/props'
import helpers from './global'

export default {
    // take options and parse then so that each key that is in options and in props will be pushed into props object.
    getParsedOptions(userOptions) {
        let options = {}
        Object.entries(userOptions).forEach(entry => {
            let [key, value] = entry

            if (key in props) {
                if (!('props' in options)) {
                    options.props = {}
                }
                options.props[key] = value
            } else {
                options[key] = value
            }
        })

        return options
    },
    getContainer(container){
        // if container is NOT DOM element
        if (typeof Element !== 'undefined' && !(container instanceof Element)) {

            // if no document
            if(typeof document === 'undefined'){
                return helpers.exeption.warn('Document is not defined')
            }

            // if no container
            if (!container) {
                // take body as container
                container = document.body
                
            // if container is a string
            } else if (typeof container === 'string') {
                container = document.querySelector(container);
                // if queryselector container not found
                if (!container) {
                    // take body as container
                    container = document.querySelector('body');
                    helpers.exeption.warn('Container not found. Fallback to document.body')
                }
            } else {
                return helpers.exeption.warn('Container must be dom element OR query selector string')
            }
        }

        return container
    }
}
