require('font-awesome/css/font-awesome.css');

import Vue from 'vue';

import minesweeper from '../modules/minesweeper/minesweeper';
import 'font-awesome/css/font-awesome.css';

new Vue({
    el: '#app',
    template: '<div><minesweeper/></div>',
    components: { minesweeper }
});
