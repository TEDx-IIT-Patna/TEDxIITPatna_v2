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
        <!-- <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> -->
        <!-- <div class="modal-dialog modal-dialog-centered"> -->
            <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
            <div class="card" style="width: 18rem;">
                <img :src="Path" class="card-img-modal" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ Name }}</h5>
                    <p class="card-text">{{ Committee }}</p>
                    <a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
                    <a :href="Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
                </div>
            </div>
            <!-- </div> -->
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name: 'AboutMobileModal',
    props: {
        'Path': {
            type: String
        },
        'Name': {
            type: String
        },
        'Committee': {
            type: String
        },
        'showModal': {
            type: Boolean,
            default: false
        },
        'Linkedin': {
            type: String,
            default: ""
        }
    },
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
/* @import '@/assets/css/speaker_detail_modal.css'; */
/* @import '@/assets/css/speaker_detail_modal.mobile.css'; */
</style>