import Vue from 'vue';

import TodoList from '../modules/todo-list/todo-list';

new Vue({
    el: '#app',
    template: '<div><todo-list/><todo-list/></div>',
    components: { TodoList }
});