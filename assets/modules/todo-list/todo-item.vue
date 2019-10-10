<template>
<li>
    <input type="checkbox" v-on:click="$emit('remove')">
    <span>{{ title }}</span>
</li>
</template>
<script>
    export default {
        name: 'todo-item',
        props: ['title']
    };
</script>