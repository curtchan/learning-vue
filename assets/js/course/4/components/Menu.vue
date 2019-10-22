<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link to="/portfolio/" tag="li"
                             class="nav-item"
                            active-class="active">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link to="/stocks/" tag="li"
                             class="nav-item"
                             active-class="active">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
            <ul class="navbar-nav flex-row ml-md-auto d-md-flex">
                <li class="nav-item">
                    <a class="nav-link btn btn-outline-warning" @click="endDay">End day</a>
                </li>
                <li class="nav-item">
                    <span class="navbar-text">Day: <span class="badge badge-secondary">{{ day }}</span></span>
                </li>
                <li class="nav-item">
                    <span class="navbar-text">Funds: <span class="badge badge-secondary">{{ balance }}$</span></span>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        computed: mapGetters([
            'balance',
            'day'
        ]),
        methods: mapActions([
            'endDay'
        ])
    }
</script>