<script setup lang="ts">
defineProps(["start", "end", 'maxLength']);
const emit = defineEmits(["next", "prev"]);
</script>
<template>
    <div class="d-flex justify-content-between">
        <button type="button" :disabled="start == 0" @click="$emit('prev')" class="btn btn-outline-primary">
            Anterior
        </button>
        <button type="button" :disabled="end >= maxLength" @click="$emit('next')" class="btn btn-outline-primary">
            Siguiente
        </button>
    </div>
</template>

<style scoped></style>