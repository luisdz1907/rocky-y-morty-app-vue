<script setup lang="ts">
import { ref } from 'vue';
import type { ResponseCharacterModel } from '@/models/ResponseCharacterModel.js';
import { getAllCharacter, getFilterCharacter } from '@/services/CharacterData';
import TabWrapperComponent from '@/components/TabWrapperComponent.vue';
import TabItem from '@/components/TabItem.vue';
import CharacterItem from '@/components/CharacterItem.vue';

const listCharacter = ref<any[]>([])
const listCharacterAlive= ref<any[]>([])
const listCharacterDead= ref<any[]>([])
const listCharacterMale = ref<any[]>([])
const listCharacterFemale = ref<any[]>([])
const dataOptions: any = [
    'All',
    'Alive',
    'Dead',
    'Female',
    'Male',
]

getAllCharacter().then((_resp: ResponseCharacterModel) => {
    listCharacter.value = _resp.results
})

getFilterCharacter('status','alive').then((_resp: ResponseCharacterModel) => {
    listCharacterAlive.value = _resp.results
})
getFilterCharacter('status','dead').then((_resp: ResponseCharacterModel) => {
    listCharacterDead.value = _resp.results
})
getFilterCharacter('gender','female').then((_resp: ResponseCharacterModel) => {
    listCharacterFemale.value = _resp.results
})
getFilterCharacter('gender','male').then((_resp: ResponseCharacterModel) => {
    listCharacterMale.value = _resp.results
})




</script>

<template>
    <header class="">
        <h1>Rick y Morty</h1>
    </header>



    <TabWrapperComponent :titles="dataOptions">
        <TabItem v-for="item in dataOptions" :title="item">
            <div v-if="item == 'All'">
                <CharacterItem :listCharacter="listCharacter"></CharacterItem>
            </div>
            <div v-if="item == 'Alive'">
                <CharacterItem :listCharacter="listCharacterAlive"></CharacterItem>
            </div>
            <div v-if="item == 'Dead'">
                <CharacterItem :listCharacter="listCharacterDead"></CharacterItem>
            </div>
            <div v-if="item == 'Female'">
                <CharacterItem :listCharacter="listCharacterFemale"></CharacterItem>
            </div>
            <div v-if="item == 'Male'">
                <CharacterItem :listCharacter="listCharacterMale"></CharacterItem>
            </div>
        </TabItem>
    </TabWrapperComponent>
</template>

<style scoped></style>