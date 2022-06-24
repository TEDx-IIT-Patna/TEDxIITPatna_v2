<template>
    <div class="speaker-modal-wrapper" v-if="this.showModal">
        <div class="overlay"></div>
        <!-- <div class="image" :style="{ 'background-image': `url(${imageSrc})`, 'color': 'white' }">
        {{name}} {{title}} {{content}}
        </div> -->
        <div class="container">
            <img :src="imageSrc" class="pic">
            <div class="content">
                <div class="name-wrapper">
                    <div class="name">{{ name }}</div>
                    <div class="title">{{ title }}</div>
                </div>
                <div class="desc">
                    <span v-html="content"></span>
                    <a :href="talkLink" target="_blank" class="talk" v-if="talkLink">Talk</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GallerySpeakerModal',
    props: {
        'imageSrc': {
            type: String
        },
        'name': {
            type: String
        },
        'title': {
            type: String
        },
        'content': {
            type: String
        },
        'showModal': {
            type: Boolean,
            default: false
        },
        'talkLink': {
            type: String,
            default: ""
        } 
    },
}
</script>

<style scoped>
@import '@/assets/css/gallery.speaker_modal.css';
</style>