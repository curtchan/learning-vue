<template>
    <div class="col-md-6 mb-4" v-if="display">
        <div class="card">
            <div class="card-header">
                {{ stock.name }}
                <small>(Price: {{ stock.value }} $)</small>
                <span v-if="stock.lastChange !== 0"
                      class="badge"
                    :class="{
                        'badge-danger': stock.lastChange < 0,
                        'badge-success': stock.lastChange > 0
                    }">{{ stock.lastChange }} $</span>
                <span v-if="!buy" class="badge badge-info">Amount: {{ stock.amount }}</span>
            </div>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <input class="form-control" type="number" placeholder="Quantity" v-model.number="quantity" :max="buy ? false : stock.amount">
                        </div>
                        <div class="col-md-6">
                            <div class="input-group">
                                <input class="form-control disabled" readonly v-model="value">
                                <div class="input-group-append">
                                    <input class="pull-right btn" type="submit"
                                       :class="{
                                           'btn-success': buy,
                                           'btn-danger': !buy
                                       }"
                                       @click.prevent="btnClicked" :value="buy ? 'Buy' : 'Sell'" >
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: {
            buy: {
                type: Boolean,
                default: true
            },
            stock: Object,
        },
        data() {
            return {
                quantity: null
            }
        },
        computed: {
            value() {
                return this.quantity * this.stock.value + ' $';
            },
            display() {
                return this.buy || (this.stock.amount > 0);
            }
        },
        methods: {
            ...mapActions([
                'buyStock', 'sellStock'
            ]),
            btnClicked() {
                const payload = {
                    stock: this.stock,
                    amount: this.quantity
                };

                if(this.quantity < 0) {
                    alert('Amount must be greater than 0');
                    return;
                }

                if(!this.buy && (this.quantity > this.stock.amount)) {
                    alert('Can\'t sell more than you have!');
                    return;
                }

                if(this.buy) {
                    this.buyStock(payload);
                } else {
                    this.sellStock(payload);
                }

                this.quantity = null;
            },
        }
    }
</script>