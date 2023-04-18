<script setup lang="ts">
import { watchEffect, ref } from 'vue';
import { getSingleEpisode } from '@/services/CharacterData';
import type { EpisodeModel } from '@/models/'

interface Props {
    idModal: string,
    idEpisode: string | null
}

const props = defineProps<Props>()
const episode = ref<EpisodeModel>()
const episodeError = ref<String>()

function loadEpisode() {
    getSingleEpisode(props.idEpisode).then((_resp: EpisodeModel) => {
        episode.value = _resp
        if (_resp.error) {
            episodeError.value = _resp.error
        }
    })
}

watchEffect(() => {
    if (props.idEpisode) {
        loadEpisode()
    }
})
</script>
<template>
    <div class="modal fade" :id="props.idModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Episode</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="content-inf" v-if="!episodeError">
                        <h1>{{ episode?.name }}</h1>
                        <p class="text-center">Episode: {{ episode?.episode }}</p>
                    </div>

                    <h1 v-if="episodeError">{{ episodeError }}</h1>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close Modal</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.modal {
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: hidden;

}

.modal-dialog {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

}

.modal-content {
    background-color: #061617;
    color: greenyellow;
}

.modal-body h1 {
    font-size: 20px;
    text-align: center;
}
</style>