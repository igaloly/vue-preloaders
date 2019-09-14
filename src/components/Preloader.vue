<template>
    <transition name="fade">
        <span :class="[ consts.loaderClassName, cssClass ]" :style="cssStyle" v-if="isOpen">
            <span :class="`${consts.loaderClassName}-overlay`" :style="overlayStyle"></span>
            <component v-if="component" :is="component" v-bind="componentProps"
                       :class="`${consts.loaderClassName}-component`" :style="componentStyle"/>
            <span v-if="assetSrc" :class="`${consts.loaderClassName}-asset-wrapper`" :style="assetWrapperStyle">
                <img :class="`${consts.loaderClassName}-asset`" :src="assetSrc" :style="assetStyle"
                     alt="Loader" title="Loader">
            </span>
            <span v-if="text" :class="`${consts.loaderClassName}-text`" :style="textStyle">{{text}}</span>
            <span v-if="html" :class="`${consts.loaderClassName}-html`" :style="htmlStyle" v-html="html"></span>
        </span>
    </transition>
</template>

<script>
    import consts from '../consts'
    import props from '../consts/props'

    export default {
        name: consts.loaderName,
        props,
        data() {
            return {
                consts,
                isOpen: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../consts";

    .#{$loader-name} {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: inherit;
        z-index: 2;
    }

    .#{$loader-name}-overlay {
        z-index: -1;
        background-color: black;
        opacity: 0.75;
    }

    .#{$loader-name}, .#{$loader-name}-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    // Transitions
    .fade-enter-active, .fade-leave-active {
        transition: opacity $transition-duration*1ms;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
