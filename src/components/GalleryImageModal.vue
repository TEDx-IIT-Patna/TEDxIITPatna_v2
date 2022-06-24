<template>
    <div class="wrapper" v-if="this.showModal">
        <div class="overlay"></div>
        <div class="image" :style="{ 'background-image': `url(${imageSrc})`, 'color': 'white' }"></div>
    </div>
</template>

<script>
export default {
    name: 'GalleryImageModal',
    props: {
        'imageSrc': {
            type: String
        },
        'showModal': {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style scoped>
@import '@/assets/css/gallery.image_modal.css';
</style>