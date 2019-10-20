<template>
    <div class="container">
        <app-menu></app-menu>
        <router-view class="mt-4"></router-view>
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

<style>
</style>
