# Vue Preloaders

Stable, Flexible and Fully Customizable Vue and Nuxt preloaders library.  
Attach your preloader at any time, to any element easily and quickly.

![vue-preloaders app use case](https://i.giphy.com/media/WV94760cIZli7S1Do0/giphy.webp)

## Demo

### https://vue-preloaders.netlify.com/

![vue-preloaders form use case](https://i.giphy.com/media/ckHT6Q76D9yaeB2c0P/giphy.webp) 

## Capabilities
* Attach a stunning preloader to any element with one line of code.
* Super simple usage with the ability to be super advanced and smart.
* Can contain:
    * Component
    * Asset
    * HTML
    * Text
    * **Any of them together**
* Modify props of the injected component.
* Modify any aspect of any element and their wrappers.
* Have a list of preset preloaders for easy use.
* Change options of already-opened preloader.
* Separate preloaders custom styling via custom class name.
* Smart deepMerge between all options:
    * User default options.
    * User default loader options (loader from loaders map).
    * Open() loader options (loader from loaders map).
    * Open() options.
* Stable in asyncData:
    * on SSR, asyncData doesn't break.
    * on client, asyncData works regularly.
* Close easily with returned callback.

And more!

![vue-preloaders showcase](https://i.giphy.com/media/LoBapQdtOncsUQzvgd/giphy.webp)

## Installation
```javascript
npm install vue-preloaders --save
```

## Mount
vue-preloaders instance is bound to **this** and **app**.
### Vue
main.js
```javascript
import VuePreloaders from 'vue-preloaders'
Vue.use(VuePreloaders, /*{ options }*/)
```
### Nuxt
nuxt.config.js
```javascript
{
    ...
    modules: [
        ['vue-preloaders/nuxt', /*{ options }*/]
    ]
    ...
}
```


## Usage
### Open
**Gets**: Object with options from the options list below.  
**Returns**: callback for closing the opened preloader.  

If no container was set, it will fallback to the body element.
```javascript
this.$preloaders.open(/*{ options }*/)
```
```javascript
const close = this.$preloaders.open(/*{ options }*/)
setTimeout(close, 1000)
```

### Close
**Gets**: Object with container key.

If no container was set, the preloader on the body tag will be closed (if it exists).
```javascript
this.$preloaders.close(/*{ options: { container } }*/)
```

## Options
### loaders
Use it **only** in the library init.  
Map of default, preset preloaders.
```javascript
{
    ...
    loaders: { //Object
        myAwesomeLoader: {
            container: '#app',
            cssStyle: { backgroundColor: 'pink' },
            overlayStyle: { opacity: 1 },
            component: MyAwesomeLoaderComponent
        },
        anotherAwesomeLoader: {
            html: '<div class="my-loader">Loader injected html</div>',
            text: 'This is my loader',
        }
    }
    ...
}
```
### loader
Loader to use from 'loaders' map.
```javascript
{
    ...
    loader: 'myAwesomeLoader' //String
    ...
}
```
### container
Element to be injected to.
```javascript
{
    ...
    container: '.class-name' //String(selector) / Element
    ...
}
```
### cssClass
Binds class for preloader's root element.
```javascript
{
    ...
    cssClass: 'test' //String
    ...
}
```
### cssStyle
Binds style for preloader's root element.
```javascript
{
    ...
    cssStyle: { dispaly: 'block' } //Object
    ...
}
```
### overlayStyle
Binds style for preloader's overlay element.
```javascript
{
    ...
    overlayStyle: { backgroundColor: 'pink', opacity: 0.5 } //Object
    ...
}
```
### component
Inject component to preloader.
```javascript
import MyAwesomeComp from '../components/MyAwesomeComp'
{
    ...
    component: MyAwesomeComp //Object
    ...
}
```
### componentStyle
Binds style for preloader's injected component.
```javascript
{
    ...
    overlayStyle: { textAlign: 'center' } //Object
    ...
}
```
### componentProps
Binds props for preloader's injected component.
```javascript
{
    ...
    componentProps: { isCentered: true } //Object
    ...
}
```
### assetWrapperStyle
Binds style for preloader's asset wrapper element.
```javascript
{
    ...
    assetWrapperStyle: { width: '50px' } //Object
    ...
}
```
### assetSrc
Inject src for preloader's image tag.
```javascript
{
    ...
    assetSrc: 'https://www.random-image.com' //String
    ...
}
```
#### assetStyle
Binds style for preloader's asset element.
```javascript
{
    ...
    assetStyle: { width: '100%', maxWidth: '30px' } //Object
    ...
}
```
### text
Inject text to preloader.
```javascript
{
    ...
    text: 'My text' //String
    ...
}
```
### textStyle
Binds style for preloader's text element.
```javascript
{
    ...
    textStyle: { textAlign: 'center' } //Object
    ...
}
```
### html
Inject HTML to preloader.
```javascript
{
    ...
    html: '<div class="my-class">Test</div>' //String
    ...
}
```
### htmlStyle
Binds style for preloader's injected HTML element.
```javascript
{
    ...
    htmlStyle: { backgroundColor: 'orange' } //Object
    ...
}
```
   
## Have fun! :)
