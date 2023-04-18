<script setup lang="ts">
import { ref, provide } from 'vue';
const props = defineProps({
    titles: []
})
// @ts-ignore: Object is possibly 'null'.
const tabTitles = ref(props.titles.map((item: any) => item))

const selectedTitle = ref(tabTitles.value)
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
    background-color: #eee;
    padding: 5px 0;
    border-radius: 5px 5px 0 0;
    transition: .4s all ease-out;
    cursor: pointer;
    user-select: none;
    text-align: center;
}

.tabs-item.selected {
    background-color: #bfbfbf;
}
</style>