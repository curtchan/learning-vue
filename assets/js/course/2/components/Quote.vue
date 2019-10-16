<template>
    <div class="quote" @click="clickedQuote">
        <p><slot></slot></p>
    </div>
</template>
<script>
    import {eventBus} from "../main";

    export default {
        props: {
            index: Number
        },
        methods: {
            clickedQuote() {
                eventBus.clickedQuote(this.index);
            }
        }
    }
</script>
<style>
    .quote p {
        font-family: Arizonia;
    }

    .quote {
        margin-right: 15px;
        margin-bottom: 15px;
        max-width: 314px;
        display: inline-block;
        float: left;
        border: 1px solid black;
        padding: 5px 15px;
        font-size: 24px;
    }

    .quote:hover {
        background-color: #cccc00bb;
        cursor: pointer;
    }
</style>