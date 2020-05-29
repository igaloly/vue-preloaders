<template>
    <transition name="preloaders" @afterLeave="isTransitionDone = true">
        <span :class="[ 'preloaders', cssClass ]" :style="cssStyle" v-if="isOpen">
            <span class="preloaders-overlay" :style="overlayStyle"></span>
            <component v-if="component" :is="component" v-bind="componentProps"
                       class="preloaders-component" :style="componentStyle"/>
            <span v-if="assetSrc" class="preloaders-asset-wrapper" :style="assetWrapperStyle">
                <img class="preloaders-asset" :src="assetSrc" :style="assetStyle"
                     alt="Loader" title="Loader">
            </span>
            <span v-if="text" class="preloaders-text" :style="textStyle">{{text}}</span>
            <span v-if="html" class="preloaders-html" :style="htmlStyle" v-html="html"></span>
        </span>
    </transition>
</template>

<script>
    import consts from '../consts'
    import props from '../consts/props'

    export default {
        name: 'Preloaders',
        props,
        data() {
            return {
                consts,
                isOpen: false,
                isTransitionDone: false
            }
        },
        watch: {
            isOpen(isOpen) {
                if(isOpen) this.isTransitionDone = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../consts";

    .preloaders {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: inherit;
        z-index: 2;
    }

    .preloaders-overlay {
        z-index: -1;
        background-color: black;
        opacity: 0.75;
    }

    .preloaders, .preloaders-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    // Transitions
    .preloaders-enter-active, .preloaders-leave-active {
        transition: opacity 150ms;
    }

    .preloaders-enter, .preloaders-leave-to {
        opacity: 0;
    }
</style>
