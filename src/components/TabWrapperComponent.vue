<script setup lang="ts">
import { ref, provide } from 'vue';
interface Props {
    titles: string[]
}
const props = defineProps<Props>()
const tabTitles = ref(props.titles.map((item: any) => item))

const selectedTitle = ref('All')
provide('selectedTitle', selectedTitle)
</script>
<template>
    <div class="tabs">

        <ul class="tabs-header">
            <li v-for="title in tabTitles" :key="title" class="tabs-item" :class="{ selected: selectedTitle === title }"
                @click="selectedTitle = title">
                {{ title }}
            </li>
        </ul>

        <slot></slot>
    </div>
</template>


<style scoped>
.tabs-header {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    gap: 5px;
}

.tabs-item {
    flex: 1;
    border-bottom: 2.2px solid gold;
    color: white;
    padding: 5px 0;
    border-radius: 5px 5px 0 0;
    transition: .4s all ease-out;
    cursor: pointer;
    user-select: none;
    text-align: center;
    font-size: 20px;
}

.tabs-item.selected {
    background-color: gold;
    color: black;
}
</style>