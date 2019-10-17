import 'animate.css/animate.min.css';

import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
        clickedRetry() {
            this.$emit('clickedRetry');
        },
        clickedCorrectAnswer() {
            this.$emit('clickedCorrectAnswear');
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
});
