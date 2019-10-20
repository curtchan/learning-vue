<template>
    <div class="card">
        <div class="card-body">
            <h1>Trade or View your Portfolio</h1>
            <p>You may Save & Load your Data <br />
                Click on 'End Day' to begin a new Day!</p>
            <hr>
            <h3>Your Funds: {{ balance }}$</h3>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: mapGetters([
        'balance'
    ])
}
</script>