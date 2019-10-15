<template>
    <div class="digit" v-if="digit !== ':' && digit !== ' '">
        <div class="top" v-bind:class="{active: digitActive(1)}" v-bind:style="{backgroundColor: color}"></div>

        <div class="top-left" v-bind:class="{active: digitActive(2)}" v-bind:style="{backgroundColor: color}"></div>
        <!--<div class="top-center" v-bind:class="{active: digitActive(3)}"></div>-->
        <div class="top-right" v-bind:class="{active: digitActive(4)}" v-bind:style="{backgroundColor: color}"></div>

        <div class="center" v-bind:class="{active: digitActive(5)}" v-bind:style="{backgroundColor: color}"></div>

        <div class="bottom-left" v-bind:class="{active: digitActive(6)}" v-bind:style="{backgroundColor: color}"></div>
        <!--<div class="bottom-center" v-bind:class="{active: digitActive(7)}"></div>-->
        <div class="bottom-right" v-bind:class="{active: digitActive(8)}" v-bind:style="{backgroundColor: color}"></div>

        <div class="bottom" v-bind:class="{active: digitActive(9)}" v-bind:style="{backgroundColor: color}"></div>
    </div>
    <div class="symbol" v-else>
        <div class="top" v-bind:class="{active: symbolActive()}" v-bind:style="{backgroundColor: color}"></div>
        <div class="bottom" v-bind:class="{active: symbolActive()}" v-bind:style="{backgroundColor: color}"></div>
    </div>
</template>
<script>
    export default {
        name: 'Digit',
        props: {
            digit: {
                type: [Number, String],
                required: true,
            },
            color: String
        },
        methods: {
            digitActive: function(position) {
                switch(position) {
                    case 1:
                        return [2, 3, 5, 6, 7, 8, 9, 0].includes(this.digit);
                    case 2:
                        return [4, 5, 6, 8, 9, 0].includes(this.digit);
                    case 3:
                        return false;
                    case 4:
                        return [1, 2, 3, 4, 7, 8, 9, 0].includes(this.digit);
                    case 5:
                        return [2, 3, 4, 5, 6, 8, 9].includes(this.digit);
                    case 6:
                        return [2, 6, 8, 0].includes(this.digit);
                    case 7:
                        return false;
                    case 8:
                        return [1, 3, 4, 5, 6, 7, 8, 9, 0].includes(this.digit);
                    case 9:
                        return [2, 3, 5, 6, 8, 9, 0].includes(this.digit);
                }

                return false;
            },

            symbolActive: function() {
                return this.digit === ':';
            }
        }
    }
</script>
<style>
    .digit {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(9, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        width: 40px;
        height: 90px;
    }

    .digit .top { grid-area: 1 / 2 / 2 / 3; }
    .digit .top-left { grid-area: 2 / 1 / 5 / 2; }
    .digit .top-center { grid-area: 2 / 2 / 5 / 3; }
    .digit .top-right { grid-area: 2 / 3 / 5 / 4; }
    .digit .center { grid-area: 5 / 2 / 6 / 3; }
    .digit .bottom-left { grid-area: 6 / 1 / 9 / 2; }
    .digit .bottom-center { grid-area: 6 / 2 / 9 / 3; }
    .digit .bottom-right { grid-area: 6 / 3 / 9 / 4; }
    .digit .bottom { grid-area: 9 / 2 / 10 / 3; }

    .digit > div, .symbol > div {
        border-radius: 20px;
        opacity: 0.1;
    }

    .digit > div.active, .symbol > div.active {
        opacity: 1;
    }

    .digit .top, .digit .center, .digit .bottom {
        margin: 3px 0;
    }

    .digit .top-left, .digit .top-right, .digit .bottom-left, .digit .bottom-right {
        margin: 0 4px;
    }

    .symbol {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(7, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        width: 20px;
        height: 90px;
    }

    .symbol .top { grid-area: 3 / 1 / 4 / 2; }
    .symbol .bottom { grid-area: 5 / 1 / 6 / 2; }

    .symbol .top, .symbol .bottom {
        margin: 0 4px;
    }
</style>