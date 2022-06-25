<template>
    <div class="back-button">
        <a @click="$router.go(-1)">Back</a>
    </div>
</template>

<script>
export default {
    name: "BackButton",
}
</script>

<style scoped>
.back-button{
    position: fixed;
    top: 3rem;
    left: 3.5rem;
    cursor: pointer;
    color: var(--red-l1);
    transition: all 0.2s;
    
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    z-index: 1;
}
.back-button::before{
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
.back-button:hover{
    transform: translateX(5px);
}
.back-button:hover:before{
    opacity: 1;
    right: calc(100% + 0.5ch);
}
</style>