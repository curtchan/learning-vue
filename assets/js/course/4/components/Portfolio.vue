<template>
    <div class="row">
        <div class="col-md-12" v-if="!hasAnyBoughtStocks">
            <p class="alert alert-info">Buy something @ Stocks!</p>
        </div>
        <app-stock v-for="stock in boughtStocks"
           :key="stock.name"
           :stock="stock"
           :buy="false"
        ></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock'
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters([
            'hasAnyBoughtStocks', 'boughtStocks'
        ]),
        components: {
            AppStock: Stock
        }
    }
</script>

