<template>
    <div class="container-fluid">
        <h1 style="text-align:center">GALLERY.</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-col-lg-4 ">
            <div class="gallery-col" v-for="image in images">
                <div class="card gallery-card" >
                    <div><img class="pastimg" v-bind:src="image"></div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    color: aliceblue;
    background-color: black;
    align-items: center;
        padding-bottom: 10%;

}

.gallery-card {
    margin: 10%;
    background-color: #7d0f15;
    width:15rem;
}

.pastimg {
    width: 15rem;
    padding: 2%;

}

h1 {
    font-family: GothamBold;
    font-size: 40px;
    text-decoration: underline red solid 10px;
    margin:5%;
}

@media screen and (max-width: 600px) {

    .row {
        margin-top: 25%;
        align-items: center;
    }

    h1 {
        font-family: GothamBold;
        font-size: 40px;
    }

    .gallery-card {
        margin: 10%;
        margin-top: 25%;
        background-color: #7d0f15;

    }

    .container {
        color: aliceblue;
        background-color: black;
        transform: translate(0, -350px);
        
    }
}
@media screen and (min-width: 1400px) and (max-width:3000px) 
{
    .pastimg
{
    min-width: 21vw;
    min-height: 12vw;
}
h1
{
    font-size: 4vw;
}
.gallery-card
{
    background-color: black;
}
}

</style>

<script>
import Footer from '../footer.vue'

export default {
    name: "Gallery",
    data() {
        return {
            images: ["https://drive.google.com/uc?export=view&id=1YbG-sKBzv6znPrkNGGJKMmpbAsUKPlHi", "https://drive.google.com/uc?export=view&id=1iIwIVt96WYzbNOniPx8rU04ckM7oK1hc", "https://drive.google.com/uc?export=view&id=1Yazj66dIBpBfqbf7JVoGUzmR2jFSiaKn", "https://drive.google.com/uc?export=view&id=1j-IU0GbQp5IoHY0h0F808pFHWMMTVLMV", "https://drive.google.com/uc?export=view&id=1ty2srCsxS1K0yTdu7aFTqxX84ZiKI20y", "https://drive.google.com/uc?export=view&id=1c09RhYT1Q-eGhNCgRcx9fbgyDPsiWHS9",
            ],
        };
    },
    components: { Footer }
}

</script>