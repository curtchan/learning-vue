require('font-awesome/css/font-awesome.css');

import Vue from 'vue';

import digitalclock from '../modules/digitalclock/digitalclock';

new Vue({
    el: '#app',
    template: '<div><digitalclock/></div>',
    components: { digitalclock }
});
