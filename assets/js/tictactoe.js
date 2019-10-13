require('../css/tictactoe.css');
require('font-awesome/css/font-awesome.css');

import Vue from 'vue';

import tictactoe from '../modules/tictactoe/tictactoe';

new Vue({
    el: '#app',
    template: '<div><tictactoe/></div>',
    components: { tictactoe }
});
