<script setup lang="ts">
import { ref } from 'vue';
import type { ResponseCharacterModel } from '@/models/ResponseCharacterModel.js';
import { getAllCharacter, getFilterCharacter } from '@/services/CharacterData';
import TabWrapperComponent from '@/components/TabWrapperComponent.vue';
import TabItem from '@/components/TabItem.vue';
import CharacterItem from '@/components/CharacterItem.vue';
import PaginatePost from '@/components/PaginatePost.vue';
import { computed } from '@vue/reactivity';

const listCharacter = ref<any[]>([])
const listCharacterAlive = ref<any[]>([])
const listCharacterDead = ref<any[]>([])
const listCharacterMale = ref<any[]>([])
const listCharacterFemale = ref<any[]>([])
const searchInput = ref('')
const dataOptions: any = [
    'All',
    'Alive',
    'Dead',
    'Female',
    'Male',
]

const postXPagina = 9;
const start = ref(0);
const end = ref(postXPagina);

const next = () => {
    start.value = start.value + postXPagina;
    end.value = end.value + postXPagina;
};

const prev = () => {
    start.value += -postXPagina;
    end.value += -postXPagina;

}

getAllCharacter().then((_resp: ResponseCharacterModel) => {
    listCharacter.value = _resp.results
})

getFilterCharacter('status', 'alive').then((_resp: ResponseCharacterModel) => {
    listCharacterAlive.value = _resp.results
})
getFilterCharacter('status', 'dead').then((_resp: ResponseCharacterModel) => {
    listCharacterDead.value = _resp.results
})
getFilterCharacter('gender', 'female').then((_resp: ResponseCharacterModel) => {
    listCharacterFemale.value = _resp.results
})
getFilterCharacter('gender', 'male').then((_resp: ResponseCharacterModel) => {
    listCharacterMale.value = _resp.results
})

const handleSearch = (event: any) => {
    listCharacter.value = listCharacter.value.filter(item => item.name.toLowerCase().includes(searchInput.value.toLowerCase()))
}
const maxLength = computed(() => listCharacter.value.length);
</script>

<template>
    <header class="">
        <h1>Rick y Morty</h1>
    </header>

    <div>
        <div class="search d-flex mb-4">
            <input @keyup="handleSearch" v-model="searchInput" type="text" class="search__input w-100"
                placeholder="Search Character...">
        </div>
        <div class="text-center fs-5" v-if="!listCharacter.length">
            <p>No results found!</p>
        </div>

    </div>

    <!-- <PaginatePost class="my-2" @next="next" @prev="prev" :start="start" :end="end" :maxLength="maxLength"></PaginatePost> -->

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

<style scoped>
.search input {
    border: 2px solid #f2f2f2;
    border-radius: 5px;
    padding: 10px 25px;
    background: transparent;
}
</style>