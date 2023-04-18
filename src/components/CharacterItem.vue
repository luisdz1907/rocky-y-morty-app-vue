
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    listCharacter:ref<any>([])
})
</script>
<template>
    <div class="container-grid-character">
        <div class="row">
            <div class="col-lg-4 mt-4" v-for="item in props.listCharacter">
                <div class="card-character d-flex gap-1 cursor-pointer">
                    <div class="image-character">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="info-character w-100 p-2 d-flex flex-column">
                        <h3 class="fs-5">{{ item.name }}</h3>
                        <span :class="[item.status === 'Dead' ? 'bg-danger' : 'bg-success', 'badge p-2']">{{ item.status
                        }}</span>
                        <span>Location: {{ item.location.name }}</span>
                        <span>Gender: {{ item.gender }}</span>
                        <span>Species: {{ item.species }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-character img {
    width: 150px;
    height: auto;
}

.card-character {
    width: 100%;
    height: 150px;
    overflow: hidden;
    border-width: 1px;
    border-color: rgba(219, 234, 254, 1);
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.info-character {
    font-size: 13.5px;
}

.badge {
    width: 80px;
    font-size: 12px;
    border: 1px solid #f2f2f2;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

}

.bg-success {
    background-color: #4ADE80 !important;
}

.bg-danger {
    background-color: #D21312 !important;
}
</style>