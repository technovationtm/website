<template>
<div class="banner mb-5">
    <TransitionGroup name="banner-fade">
        <div v-for="(photo, i) in photos" v-show="i === current" class="banner-item" :key="`banner-item-${i}`">
            <div class="banner-image-wrap">
                <img :src="photo.path" class="banner-image"/>
            </div>
            <div class="container position-relative h-100">
                <div v-if="i in intro" class="banner-caption">
                    <h1 v-html="intro[i].caption"></h1>
                </div>
            </div>
        </div>
    </TransitionGroup>
    <button v-if="photos.length > 1" class="btn banner-previous" aria-label="Previous" @click="handlePrevClick">
        <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button v-if="photos.length > 1" class="btn banner-next" aria-label="Next" @click="handleNextClick">
        <i class="fa-solid fa-chevron-right"></i>
    </button>
</div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps({
    intro: {
        type: Array,
        default: () => []
    }
})
const photos = [
    {
        path: '/assets/banner/photo-1.jpg'
    }
]
const current = ref(0)
const handlePrevClick = () => {
    current.value === 0 ? current.value = photos.length - 1 : current.value--
}
const handleNextClick = () => {
    current.value === photos.length - 1 ? current.value = 0 : current.value++
}
</script>
