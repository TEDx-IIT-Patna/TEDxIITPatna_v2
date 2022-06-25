<template>
    <div class="back-button" v-if="this.screeWidth > 800">
        <a @click="$router.go(-1)">Back</a>
    </div>
    <div class="back-button mobile" v-else>
        <a @click="$router.go(-1)" :style="{'color': this.arrowColor}"><i class="gg-arrow-left"></i></a>
    </div>
</template>

<script>
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