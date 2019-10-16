<template>
    <form @submit.prevent="addQuote">
        <div class="form-group">
            <label for="new-quote">Quote</label>
            <textarea id="new-quote" class="form-control" v-model="quote"></textarea>
        </div>
        <div class="text-center">
            <input type="submit" value="Add Quote" class="btn btn-primary">
        </div>
    </form>
</template>
<script>
    import {eventBus} from "../main";

    export default {
        data: () => {
            return {
                quote: ''
            };
        },
        methods: {
            addQuote() {
                if(!this.quote) {
                    return;
                }

                eventBus.createdQuote(this.quote);

                this.quote = '';
            }
        }
    }
</script>
<style scoped>
</style>