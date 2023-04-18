<script setup lang="ts">
import { inject } from 'vue'
const props = defineProps({
    title: String
})
const selectedTitle = inject('selectedTitle')
</script>
<template>
    <div class="tabs-content" v-show="selectedTitle === props.title">
        <slot></slot>
    </div>
</template>


<style scoped>
.tabs-content {
    /* background-color: #bfbfbf; */
    min-height: 300px;
    display: grid;
    place-items: center;
    border-radius: 0 0 5px 5px;
    padding: 10px;
    background-color: blue;
}
</style>