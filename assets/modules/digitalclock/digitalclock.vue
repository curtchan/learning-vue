<template>
    <div class="digitalclock">
        <div is="Digit"
              v-for="digit in digits"
              :digit="digit.digit"
              :key="digit.position"
              :color="color"
        ></div>
        <form>
            <label :style="{color: color}"><input type="checkbox" v-model="update" /> {{ checkboxLabel }}</label>
            <input type="color" v-model="color">
        </form>
    </div>
</template>
<script>
    import Digit from "./digit";

    export default {
        name: 'digitalclock',
        data: function() {
            return {
                digits: [{
                    position: 1,
                    digit: 0
                },{
                    position: 2,
                    digit: 0
                },{
                    position: 3,
                    digit: ':'
                },{
                    position: 4,
                    digit: 0
                },{
                    position: 5,
                    digit: 0
                },{
                    position: 6,
                    digit: ':'
                },{
                    position: 7,
                    digit: 0
                },{
                    position: 8,
                    digit: 0
                }],

                update: true,
                interval: null,

                color: '#32cd32',
            };
        },
        computed: {
            checkboxLabel: function() {
                return this.update ? 'stop' : 'start';
            }
        },
        components: {Digit},
        methods: {
            updateDigits: function() {
                if(!this.update)
                    return;

                let now = new Date();

                this.digits[0].digit = Math.floor(now.getHours() / 10);
                this.digits[1].digit = Math.floor(now.getHours() % 10);
                this.digits[3].digit = Math.floor(now.getMinutes() / 10);
                this.digits[4].digit = Math.floor(now.getMinutes() % 10);
                this.digits[6].digit = Math.floor(now.getSeconds() / 10);
                this.digits[7].digit = Math.floor(now.getSeconds() % 10);

                if(now.getSeconds() % 2) {
                    this.digits[2].digit = ' ';
                    this.digits[5].digit = ' ';
                } else {
                    this.digits[2].digit = ':';
                    this.digits[5].digit = ':';
                }
            },
        },
        mounted: function() {
            setInterval(this.updateDigits, 1000);
        }
    }
</script>
<style>
    body {
        margin: 0;
        background-color: black;
    }
    .digitalclock {
        display: flex;
    }
</style>