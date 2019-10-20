<template>
    <div class="row">
     <app-stock v-for="stock in stocks"
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
            'stocks'
        ]),
        components: {
            AppStock: Stock
        }
    }
</script>