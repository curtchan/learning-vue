import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
        createdQuote(quote) {
            this.$emit('createdQuote', quote);
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})
