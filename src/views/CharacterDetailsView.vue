<script setup lang="ts">
import { ref } from 'vue';
import { getSingleCharacter } from '@/services/CharacterData';
import { useRoute, RouterLink } from 'vue-router';
import type { CharacterModel } from '../models/CharacterModel';

const router = useRoute()
const { id }: any = router.params
const characterDetail = ref<CharacterModel>()
getSingleCharacter(id).then((_resp: CharacterModel) => {
    characterDetail.value = _resp
})


</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12 img-character">
                <img class="" :src="characterDetail?.image" alt="">
                <RouterLink to="/" class="text-center text-decoration-none fs-5 text-white">Go back</RouterLink>
            </div>
            <div class="col-lg-9 col-md-12">
                <div class="d-flex flex-column mx-4">
                    <div class="info-character d-flex flex-column mb-3">
                        <h1 class="text-white fs-1">{{ characterDetail?.name }}</h1>
                        <span :class="[characterDetail?.status === 'Dead' ? 'bg-danger' : 'bg-succes', 'badge p-2']">{{
                            characterDetail?.status
                        }}</span>
                        <p class="text-white fs-5">Gender: {{ characterDetail?.gender }}</p>
                        <p class="text-white fs-5">Location: {{ characterDetail?.location.name }}</p>
                    </div>

                    <ul class="list-epi mt-4">
                        <li v-for="(item, index) in characterDetail?.episode">
                            <RouterLink :to="{ path: `episode/${item.slice(-1)}` }"><span
                                    class="badge bg-success p-2">Episodio {{ index + 1 }}</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>
p {
    padding: 0px;
    margin: 0px;
}


.container {
    margin-top: 130px;
}


.img-character img {
    border-radius: 100%;
    box-shadow: 0px 1px 2px #2B3044,
        0px 4px 16px #2B3044;
}



.list-epi {
    width: 100%;
    /* overflow: auto; */
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 10px;
    margin: 0px;
    padding: 0px;
}

.list-epi li a {
    border: none;
    color: white;
    padding: 5px 10px;
}

.badge {
    width: 100px;
}

.bg-succes {
    background-color: #4ADE80 !important;
}

.bg-danger {
    background-color: #D21312 !important;
}

.bg-success:hover {
    background-color: gold !important;
    color: black;
}

.img-character {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }

@media only screen and (max-width: 1000px) {
    .container {
        margin-top: 50px;
    }
    .img-character img {
        width: 200px;
    }

    .info-character {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .list-epi {
        justify-content: center;
    }
}
</style>