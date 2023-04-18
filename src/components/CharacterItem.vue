
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import type { CharacterModel } from '../models/CharacterModel';

interface Props{
    listCharacter: CharacterModel[]
}

const props = defineProps<Props>()
const favorites = ref<CharacterModel[]>([])

const toggleFavorite = (item: CharacterModel) => {
    const index = favorites.value.indexOf(item);
    if (index === -1) {
        favorites.value.push(item);
    } else {
        favorites.value.splice(index, 1);
    }
}

const isFavorite = (item: CharacterModel) => {
    return favorites.value.indexOf(item) !== -1;
}
</script>
<template>
    <div class="container-grid-character">
        <div class="row">
            <div class="col-lg-4 col-xs-2 mt-4" v-for="(item, index) in props.listCharacter" :key="item.id">
            
                <div class="card-character d-flex gap-1 cursor-pointer">
                    <div class="image-character">
                        <img :src="item.image" alt="">
                        <RouterLink class="btn-view" :to="{ path: `/${item.id}`}">See detail</RouterLink>
                    </div>
                    <div class="info-character w-100 p-2 d-flex flex-column">
                        <div class="title d-flex justify-content-between">
                            <h3 class="fs-5">{{ item.name }}</h3>
                            <button @click="toggleFavorite(item)">
                                <i :class="isFavorite(item) ? 'fas fa-star' : 'far fa-star'"> </i>
                            </button>
                        </div>
                        <span :class="[item.status === 'Dead' ? 'bg-danger' : 'bg-success', 'badge p-2']">{{ item.status
                        }}</span>
                        <p class="text-gray">Location: <span class="text-light">{{ item.location.name }}</span></p>
                        <p class="text-gray"> <span class="text-light">{{ item.gender }} - {{ item.species }}</span></p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a{
    text-decoration: none;
    border: none;
}


.text-gray {
    color: rgb(158, 158, 158);
    font-weight: bold;
    font-size: 15px;
    margin: 0px;
}

.text-light {
    color: white;
    font-weight: normal;
    font-size: 13px;
}
.image-character{
    position: relative;
}
.image-character img {
    width: 165px;
    height: auto;
}
.btn-view{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 5px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 15px;
}

.card-character {
    width: 100%;
    height: 165px;
    overflow: hidden;
    border-width: 1px;
    /* border-color: rgba(219, 234, 254, 1); */
    /* border-radius: 1rem; */
    background-color: #061617;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    color: white;
}

@media only screen and (max-width: 340px) {
    .image-character img {
        width: 100px;
        /* height: auto; */
    }

    .card-character {
        height: 100px;
    }
    .text-gray{
        display: none;
    }
}

.info-character {
    font-size: 13.5px;
}

.badge {
    width: 80px;
    font-size: 12px;
    /* border: 1px solid #f2f2f2; */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

}

.bg-success {
    background-color: #4ADE80 !important;
}

.bg-danger {
    background-color: #D21312 !important;
}

.title button {
    background-color: transparent;
    border: none;
}

.title button i {
    font-size: 18px;
    color: gold;
}
</style>