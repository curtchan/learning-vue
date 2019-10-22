import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

class Stock {
    constructor(name, value, maxChange) {
        this.name = name;
        this.value = value;
        this.maxChange = maxChange;
        this.lastChange = 0;
        this.amount = 0;
    }

    generateNewValue() {
        let priceChange = Math.floor(Math.random() * this.maxChange * 2) - this.maxChange;
        if(priceChange + this.value < 0) {
            priceChange = -1 * this.value;
        }
        this.lastChange = priceChange;
        this.value += priceChange;
    }
}

export const store = new Vuex.Store({
    state: {
        stocks: [
            new Stock('BMW', 150, 10),
            new Stock('Google', 350, 25),
            new Stock('Apple', 500, 40),
            new Stock('Windows', 900, 125),
            new Stock('Audi', 2000, 300)
        ],
        balance: 10000,
        day: 1,
    },
    getters: {
        balance: state => {
            return state.balance;
        },
        day: state => {
            return state.day;
        },
        stocks: state => {
            return state.stocks;
        },
        boughtStocks: state => {
            return state.stocks.filter((stock) => {
                return stock.amount > 0;
            });
        },
        hasAnyBoughtStocks: (state, getters) => {
            return getters.boughtStocks.length > 0;
        }
    },
    mutations: {
        incrementDay: state => {
            state.day++;
        },
        buyStock: (state, payload) => {
            let value = payload.amount * payload.stock.value;
            if(value > state.balance) {
                alert('Can\'t buy, balance too low!');
                return;
            }

            payload.stock.amount += payload.amount;
            state.balance -= value;
        },
        sellStock: (state, payload) => {
            payload.stock.amount -= payload.amount;
            state.balance += payload.amount * payload.stock.value;
        },
        generateNewStockValues: state => {
            for(let index in state.stocks) {
                state.stocks[index].generateNewValue();
            }
        }
    },
    actions: {
        endDay: ({commit}) => {
            commit('incrementDay');
            commit('generateNewStockValues');

            //todo change value on stocks
        },
        buyStock: ({commit}, payload) => {
            commit('buyStock', payload);
        },
        sellStock: ({commit}, payload) => {
            console.log(payload);
            commit('sellStock', payload);
        }
    }
});