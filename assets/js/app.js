require('../css/app.css');

import Vue from 'vue';

import TodoList from './todo-list';

new Vue({
    el: '#app',
    template: '<div><todo-list/><todo-list/></div>',
    components: { TodoList }
});