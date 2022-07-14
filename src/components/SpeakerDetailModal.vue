<!--
    Modal to display individual speaker details
-->
<!--
    Usage:
    <template>
        ...
        <SpeakerModal showModal="true","false"
            imageSrc="/absolute/path/to/image" name="speaker_name" title="speaker_title_aka_designation"
            content="speaker_details" talkLink="link_to_speakers_talk"
            @closeSpeakerModal="this.callback_function_when_close_button_is_clicked_in_modal" />
        ...
    </template>
    <script scoped>
        ...
        import SpeakerModal from '@/components/SpeakerDetailModal.vue'
        ...
        export default {
            ...
            components: {
                ...
                SpeakerModal,
                ...
            },
            methods: {
                callback_function_when_close_button_is_clicked_in_modal() {
                    // code to hide the modal
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
    <div :class="['speaker-modal-wrapper', 0.9 * this.screenWidth >= this.screenHeight ? 'web' : 'mobile']"
        v-if="this.showModal">
        <div class="overlay"></div>
        <div class="container">
            <div class="close-btn" @click="this.$emit('closeSpeakerModal')"><i class="gg-close"></i></div>
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
    emits: [
        'closeSpeakerModal'
    ],
    data() {
        return {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
        }
    },
    methods: {
        onResize() {
            this.screenWidth = window.innerWidth
            this.screenHeight = window.innerHeight
        },
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize)
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    }
}
</script>

<style scoped>
@import '@/assets/css/speaker_detail_modal.css';
@import '@/assets/css/speaker_detail_modal.mobile.css';
</style>