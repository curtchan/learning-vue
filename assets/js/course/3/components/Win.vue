<template>
    <div class="alert alert-success text-center">
        <p class="text-center">Congrats! Correct answear!</p>
        <button @click="retry" class="btn btn-secondary">Try again!</button>
    </div>
</template>
<script>
    import {eventBus} from './../main';

    export default {
        methods: {
            retry() {
                eventBus.clickedRetry();
            }
        }
    }
</script>