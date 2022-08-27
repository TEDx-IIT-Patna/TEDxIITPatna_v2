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
            @closeAboutModal="this.callback_function_when_close_button_is_clicked_in_modal" />
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
    <div class="booking-modal-wrapper mobile" v-if="this.showModal">
        <div class="close-btn" @click="this.$emit('closeBookingModal')"><i class="gg-close"></i></div>
        <div class="overlay" @click="this.$emit('closeBookingModal')"></div>
        <div class="container">
            <!-- <div class="modal-image">
                <img :src="Path" class="pic">
            </div> -->
            <div class="top">
                <div class="session"><span class="hash">#</span>{{ Session }}</div>
                <div class="session-text">session</div>
            </div>
            <div class="content">
                <div class="contents-wrapper">
                    <div class="speaker-img"><img :src="Path1" alt=""></div>
                    <div class="name-wrapper">
                    <div class="name">{{ Name1 }}</div>
                    <div class="time">{{ Time1 }}</div>
                    </div>
                </div>
                <div class="contents-wrapper">
                    <div class="speaker-img"><img :src="Path2" alt=""></div>
                    <div class="name-wrapper">
                    <div class="name">{{ Name2 }}</div>
                    <div class="time">{{ Time2 }}</div>
                    </div>
                </div>
                <!-- <div class="socials">
                    <div class="social-icon" v-for="(social, index) in Socials" :key="index">
                        <a target="__blank" :href="social[0]"><i class="fa-brands" :class="social[1]"></i></a>
                    </div>
                </div> -->
            </div>
            <div class="btn-container">
            <a :href="Link"><div class="booking-btn">
                Book
            </div></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TicketBookingModal',
    props: {
        'Path1': {
            type: String
        },
        'Path2': {
            type: String
        },
        'Name1': {
            type: String
        },
        'Name2': {
            type: String
        },
        'Time1': {
            type: String
        },
        'Time2': {
            type: String
        },
        'Link': {
            type: String
        },
        'Session': {
            type: String
        },
        'showModal': {
            type: Boolean,
            default: false
        },
    },
    emits: [
        'closeBookingModal'
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
@import '@/assets/css/ticket_booking_modal.css';
</style>