<script setup lang="ts">
import { ref } from 'vue';
import { getAllCharacter, getFilterCharacter } from '@/services/CharacterData';
import TabWrapperComponent from '@/components/TabWrapperComponent.vue';
import TabItem from '@/components/TabItem.vue';
import CharacterItem from '@/components/CharacterItem.vue';
import type { CharacterModel } from '../models/CharacterModel';


const listCharacter = ref<CharacterModel[]>([])
const listCharacterFilter = ref<CharacterModel[]>([])
const listCharacterAlive = ref<CharacterModel[]>([])
const listCharacterDead = ref<CharacterModel[]>([])
const listCharacterMale = ref<CharacterModel[]>([])
const listCharacterFemale = ref<CharacterModel[]>([])
const searchInput = ref('')
const dataOptions: string[] = [
    'All',
    'Alive',
    'Dead',
    'Female',
    'Male',
]



getAllCharacter().then((_resp: CharacterModel[]) => {
    listCharacter.value = _resp
})

getFilterCharacter('status', 'alive').then((_resp: CharacterModel[]) => {
    listCharacterAlive.value = _resp
})
getFilterCharacter('status', 'dead').then((_resp: CharacterModel[]) => {
    listCharacterDead.value = _resp
})
getFilterCharacter('gender', 'female').then((_resp: CharacterModel[]) => {
    listCharacterFemale.value = _resp
})
getFilterCharacter('gender', 'male').then((_resp: CharacterModel[]) => {
    listCharacterMale.value = _resp
})

const handleSearch = () => {
    if (searchInput.value === "") {
        return listCharacter.value
    } else {
        return listCharacterFilter.value = listCharacter.value.filter(item => item.name.toLowerCase().includes(searchInput.value.toLowerCase()))
    }
}
</script>

<template>
    <header class="p-4">
        <h1>Rick y Morty</h1>
    </header>

    <div>
            <div class="search d-flex mb-4">
              <div class="input-search-x d-flex">
                <input @keyup="handleSearch" v-model="searchInput" type="text" class="search__input"
                    placeholder="Search Character...">
                <button class="search__button">
                    <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                        <g>
                            <path
                                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                            </path>
                        </g>
                    </svg>
                </button>
              </div>
            </div>
            <div class="text-center fs-5" v-if="listCharacterFilter.length  === 0 && searchInput">
                <p>No results found!</p>
            </div>

        </div>

<div class="container">
    <TabWrapperComponent :titles="dataOptions">
        <TabItem v-for="item in dataOptions" :title="item">
            <div v-if="item == 'All'">
                <CharacterItem :listCharacter="handleSearch()"></CharacterItem>
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
</div>
</template>

<style scoped>
header h1{
  font-size:5rem;
  color:white;
  text-align: center;
  animation-name:glow;
  animation-duration:1s;
  animation-iteration-count:infinite;
  animation-direction:alternate;
}


@keyframes glow{
  from{text-shadow:0px 0px 5px #9AC93B,0px 0px 5px #9AC93B;}
  to{text-shadow:0px 0px 20px #54B435,0px 0px 20px gold;}
}

.input-search-x input {
    border: 2px solid gold;
    border-radius: 5px;
    padding: 10px 25px;
    background-color: transparent;
    color: #646464;
    width: 600px;
    transition: all 0.4s;
    color: white;
    box-shadow: 0 0 .4vw rgba(0,0,0,0.5), 0 0 0 .15vw transparent;

}
.input-search-x input::placeholder{
    color: white;
}

.input-search-x input:focus {
  box-shadow: 0 0 0 .15vw yellow;
}

@media only screen and (max-width: 485px) {
    .input-search-x input {
        width: auto;
    }
    header h1{
        font-size: 2rem;
    }
}

.input-search-x {
    position: relative;
    margin: 0 auto;
}

.search input:focus {
    outline: none;
}

.search__button {
    border: none;
    position: absolute;
    right: 10px;
    top: 7px;
    background: transparent;
}

.search__button:hover {
    cursor: pointer;
}

.search__icon {
    height: 1.3em;
    width: 1.3em;
    fill: white;
}

</style>