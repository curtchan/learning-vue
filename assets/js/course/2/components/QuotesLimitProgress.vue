<template>
    <div>
        <h1>Quotes Added</h1>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuemin="0" :aria-valuemax="max"
                 :style="{width: percentage}"
                 :aria-valuenow="count">{{ count }} / {{ max }}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            count: Number,
            max: {
                type: Number,
                default: 10
            }
        },
        computed: {
            percentage(){
                return Math.floor(this.count / this.max * 100) + '%';
            }
        }
    }
</script>