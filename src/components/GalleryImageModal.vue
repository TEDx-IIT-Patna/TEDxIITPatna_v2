<!--
    Modal to display gallery images/images in general
-->
<!--
    Usage:
    <template>
        ...
        <div class="modal-close-btn" @click="this.callback_function_when_close_button_is_clicked">
            <i class="gg-close"></i>
        </div>
        <ImageModal showModal="true","false" imageSrc="/absolute/path/to/image" />
        ...
    </template>
    <script scoped>
        ...
        import ImageModal from '@/components/GalleryImageModal.vue'
        ...
        export default {
            ...
            components: {
                ...
                ImageModal,
                ...
            },
            methods: {
                callback_function_when_close_button_is_clicked() {
                    // code to close the modal
                }
            },
            ...
        }
    </script>
    <style scoped>
        .modal-close-btn{
            /* styles */
        }
    </style>
-->
<!--
    NOTE: When passing the imageSrc prop, you can pass require('@/relative/path/to/image')
    to use relative paths instead.

    This is the recommended method.
-->

<template>
    <div class="gallery-modal-wrapper" v-if="this.showModal">
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
@import '@/assets/css/gallery_image_modal.css';
</style>