<!--
    Adds a back button that takes you back by 1 in the history stack
    Ref: https://router.vuejs.org/guide/essentials/navigation.html
-->
<!--
    Hard-coding the back button for each page can also be explored more (will require an 'href' prop).
    However, I thought this approach will make the site more self-contained with all the
    links and back-tracking implemented inherently.
-->
<!--
    Usage:
    <template>
        ...
        <BackButton [arrowColor="whatever_color_you_want"] />
        ...
    </template>
    
    <script scoped>
        ...
        import BackButton from '@/components/BackButton.vue'
        ...
        export default {
            ...
            components: {
                ...
                BackButton,
                ...
            }
        }
    </script>
-->

<template>
    <div class="back-button" v-if="this.screenWidth > 800">
        <a @click="$router.go(-1)">Back</a>
    </div>
    <div class="back-button mobile" v-else>
        <a @click="$router.go(-1)" :style="{ 'color': this.arrowColor }"><i class="gg-arrow-left"></i></a>
    </div>
</template>

<script>
// NOTE: the screen size related variables and methods used here
// are a used as a template to get the real-time screen width and height
// 
// one drawback can be in cases like ones that occur
// on mobiles where pulling down the URL bar will change the screen width and height values.
// In a critical case, pulling down the URL bar can change the width and heigth such that the 
// site changes completely according to the mobile view and web view specifications defined in
// specific pages.
// 
// *** This approach is to be reviewed and refined.

export default {
    name: "BackButton",
    props: [
        'arrowColor'
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
/* default (web) */
.back-button {
    position: fixed;
    top: 5%;
    left: 5%;
    cursor: pointer;
    color: var(--red-l1);
    transition: all 0.2s;

    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    z-index: 1;
}

.back-button::before {
    content: '‹';
    display: block;
    position: absolute;
    top: 50%;
    right: calc(100%);
    font-size: 3rem;
    transform: translate(0, -60%);
    pointer-events: none;
    transition: all 0.2s;
    opacity: 0;
}

.back-button:hover {
    transform: translateX(5px);
}

.back-button:hover:before {
    opacity: 1;
    right: calc(100% + 0.5ch);
}

/* mobile */
.back-button.mobile {
    position: fixed;
    top: 5%;
    left: 5%;
    cursor: pointer;
    color: var(--red-l1);
    transition: all 0.2s;

    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 500;
    z-index: 1;
}

.back-button.mobile::before {
    display: none;
}

.back-button.mobile:hover {
    transform: translateX(0);
}
</style>