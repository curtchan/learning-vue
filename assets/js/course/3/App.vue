<template>
    <div class="container">
        <h1 class="text-center">The Super Quiz</h1>
        <hr>
        <transition
            enter-active-class="animated flipInY"
            leave-active-class="animated flipOutY"
            mode="out-in"
            appear
        >
            <component :is="activeComponent"></component>
        </transition>
    </div>
</template>

<script>
    import Question from './components/Question';
    import Win from './components/Win';
    import {eventBus} from "./main";

    export default {
        data() {
            return {
                activeComponent: 'AppQuestion',
            };
        },
        components: {
            AppQuestion: Question,
            AppWin: Win,
        },
        methods: {
        },
        created() {
            eventBus.$on('clickedRetry', () => {
                this.activeComponent = 'AppQuestion';
            });
            eventBus.$on('clickedCorrectAnswear', () => {
                this.activeComponent = 'AppWin';
            })
        }
    }
</script>

<style>
</style>
