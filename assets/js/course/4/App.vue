<template>
    <div class="container">
        <app-menu></app-menu>
        <transition
                enter-active-class="animated slideInLeft"
                leave-active-class="animated zoomOutRight"
                mode="out-in"
                appear>
            <router-view class="mt-4"></router-view>
        </transition>
    </div>
</template>

<script>
    import Menu from './components/Menu'

    export default {
        components: {
            appMenu: Menu
        }
    }
</script>
