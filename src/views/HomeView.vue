<script setup lang="ts">
import { ref } from 'vue';
import type { ResponseCharacterModel } from '@/models/ResponseCharacterModel.js';
import { getAllCharacter } from '@/services/CharacterData';
import TabWrapperComponent from '@/components/TabWrapperComponent.vue';
import TabItem from '@/components/TabItem.vue';
import CharacterItem from '@/components/CharacterItem.vue';

const listCharacter = ref<any[]>([])

const dataOptions: any = [
    'All',
    'Alive',
    'Dead',
    'Female',
]

getAllCharacter().then(({ results }: ResponseCharacterModel) => {
    listCharacter.value = results
    console.log(results)
})


</script>

<template>
    <header class="">
        <h1>Rick y Morty</h1>
    </header>

    

    <TabWrapperComponent :titles="dataOptions">
        <TabItem v-for="item in dataOptions" :title="item"><CharacterItem :listCharacter="listCharacter"></CharacterItem></TabItem>
    </TabWrapperComponent>
</template>

<style scoped>

</style>