<template>
    <div class="container">
        <app-quotes-limit-progress :count="quotes.length"></app-quotes-limit-progress>
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
                <app-new-quote></app-new-quote>
            </div>
        </div>
        <div class="quotes clearfix">
            <app-quote v-for="(quote, index) in quotes"
               :key="index"
               @click.native="removeQuote(index)"
            >{{ quote.quote }}</app-quote>
        </div>
        <div class="alert alert-info text-center" >
            <p>Info: Click on a Quote to delete it</p>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "./main";
    import QuotesLimitProgress from './components/QuotesLimitProgress';
    import NewQuote from './components/NewQuote';
    import Quote from './components/Quote';

    export default {
        data: function() {
            return {
                quotes: [{
                    quote: 'Lorem Ipsum'
                }],
            };
        },
        components: {
            AppQuotesLimitProgress: QuotesLimitProgress,
            AppNewQuote: NewQuote,
            AppQuote: Quote,
        },
        created() {
            eventBus.$on('createdQuote', (quote) => {
                if(this.quotes.length >= 10) {
                    alert('Can\'t add more, delete some quotes!');
                    return;
                }

                this.quotes.push({quote: quote});
            });
        },
        methods: {
            removeQuote(index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
    .quotes {
        margin-top: 15px;
    }
</style>
