import '../../../css/foundation.min.css';
import '../../../css/course/1.css';

import Vue from 'vue';
import MonsterSlayer from './MonsterSlayer';

new Vue({
    el: '#app',
    template: '<MonsterSlayer/>',
    components: { MonsterSlayer }
});
