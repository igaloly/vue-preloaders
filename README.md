# Vue Preloaders 💡🍻📣
Stable, Flexible and Fully Customizable Vue and Nuxt preloaders library.

## Demo
https://vue-preloaders.netlify.com/

## Installation
```javascript
npm install vue-preloaders --save
```

## Mount
vue-preloaders instance is binded to **this**.
### Vue
main.js
```javascript
import VuePreloaders from 'vue-preloaders'
Vue.use(VuePreloaders, /*{ default global options }*/)
```

## Usage
Options are optional. They are deepMerged with global default options. 
### Open
If no options at all were set, loader will open on Body element.  
Returns callback for closing the opened preloader.
```javascript
this.$preloaders.open(/*{ options }*/)
```
```javascript
const close = this.$preloaders.open(/*{ options }*/)
setTimeout(close, 1500)
```

### Close
Container is optional. If no container was set, preloader on Body tag will be closed (if exists).
```javascript
this.$preloaders.close(/*{ options: { container } }*/)
```

## Options
### cssClass
Binds class of preloader root element.
```javascript
{
    cssClass: 'test' //String
}
```
### cssStyle
Binds style of preloader root element.
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
### assetStyle
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

**Content injections can be used together.**
   
## Have fun! :)
