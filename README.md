# Vue Preloaders 💡🍻📣
Stable, Flexible and Fully Customizable Vue and Nuxt preloaders library.

## Demo
![vue-preloaders demo](https://i.giphy.com/media/SvRxu0XqXvTptu1j8w/giphy.webp)


All preloaders were bound via vue-preloaders.  
They all have source code to see which options were used.    

https://vue-preloaders.netlify.com/

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
    modules: [
        ['vue-preloaders/nuxt', /*{ options }*/]
    ]
}
```


## Usage
Options are optional. They are deepMerged with initialization options. 
### Open
If no options at all were set, the loader will open on the body element.  
Returns callback for closing the opened preloader.
```javascript
this.$preloaders.open(/*{ options }*/)
```
```javascript
const close = this.$preloaders.open(/*{ options }*/)
setTimeout(close, 1000)
```

### Close
Container is optional.  
If no container was set, the preloader on the body tag will be closed (if exists).
```javascript
this.$preloaders.close(/*{ options: { container } }*/)
```

## Options
### loaders
Use it **only** in library init.  
Map of default, pre-set preloaders.
```javascript
{
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
}
```
### loader
Uses loader from 'loaders' map.
```javascript
{
    loader: 'myAwesomeLoader' //String
}
```
### container
Element to be injected to.
```javascript
{
    container: '.class-name' //String(selector) / Element
}
```
### cssClass
Binds class for preloader's root element.
```javascript
{
    cssClass: 'test' //String
}
```
### cssStyle
Binds style for preloader's root element.
```javascript
{
    cssStyle: { dispaly: 'block' } //Object
}
```
### overlayStyle
Binds style for preloader's overlay element.
```javascript
{
    overlayStyle: { backgroundColor: 'pink', opacity: 0.5 } //Object
}
```
### component
Injects component as preloader content.
```javascript
import MyAwesomeComp from '../components/MyAwesomeComp'
{
    component: MyAwesomeComp //Object
}
```
### componentStyle
Binds style for preloader's injected component element.
```javascript
{
    overlayStyle: { textAlign: 'center' } //Object
}
```
### componentProps
Binds props for preloader's injected component element.
```javascript
{
    componentProps: { isCentered: true } //Object
}
```
### assetWrapperStyle
Binds style for preloader's asset wrapper element.
```javascript
{
    assetWrapperStyle: { width: '50px' } //Object
}
```
### assetSrc
Injects src for preloader's image tag.
```javascript
{
    assetSrc: 'https://www.random-image.com' //String
}
```
#### assetStyle
Binds style for preloader's asset element.
```javascript
{
    assetStyle: { width: '100%', maxWidth: '30px' } //Object
}
```
### text
Injects text as preloader's content.
```javascript
{
    text: 'My text' //String
}
```
### textStyle
Binds style for preloader's text element.
```javascript
{
    textStyle: { textAlign: 'center' } //Object
}
```
### html
Injects HTML as preloader's content.
```javascript
{
    html: '<div class="my-class">Test</div>' //String
}
```
### htmlStyle
Binds style for preloader's injected HTML element.
```javascript
{
    htmlStyle: { backgroundColor: 'orange' } //Object
}
```
   


## Have fun! :)
