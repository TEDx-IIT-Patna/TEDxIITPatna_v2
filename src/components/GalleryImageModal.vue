<!--
    Modal to display gallery images/images in general
-->
<!--
    Usage:
    <template>
        ...
        <ImageModal showModal="true","false" imageSrc="/absolute/path/to/image"
            @closeImageModal="this.callback_function_when_close_button_is_clicked" />
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
-->
<!--
    NOTE: We are not writing the code to close the modal inside the component
    itself because we are passing the show and hide states as props to the
    component. And component props are mutable in nature, ie, cannot be changed.
    Therefore, we have to define the code to close the modals in the parent views/components
    where the this component is used
-->
<!--
    NOTE: When passing the imageSrc prop, you can pass require('@/relative/path/to/image')
    to use relative paths instead.

    This is the recommended method.
-->

<template>
    <div class="gallery-modal-wrapper" v-if="this.showModal">
        <div class="modal-close-btn" @click="this.$emit('closeImageModal')">
            <i class="gg-close"></i>
        </div>
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
    emits: [
        'closeImageModal'
    ],
}
</script>

<style scoped>
@import '@/assets/css/gallery_image_modal.css';
</style>