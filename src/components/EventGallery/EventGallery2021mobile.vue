<template>
    <div class="container">
        <h1 style="transform: translate(0,140px); color: white; margin-bottom: 10%;">Gallery</h1>
        <div class="row row-cols-1 gallery-images">
            <div class= "gallery-image" v-for="image in images">
                <div class="card speaker-card" style="width: 15rem;">
                    <div><img class="pastimg" v-bind:src="image"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    color: aliceblue;
    background-color: black;
}
.gallery-image
{
    margin-left: 10%;
    margin-top: 10%;
}
.gallery-images{
    margin-top: 40%;
}
.pastimg {
    width: 15rem;
   padding: 2%;
  
}

</style>

<script>

export default {
    name: 'Gallery',
    data() {
        return {
            images: ["https://drive.google.com/uc?export=view&id=1YbG-sKBzv6znPrkNGGJKMmpbAsUKPlHi",
"https://drive.google.com/uc?export=view&id=1iIwIVt96WYzbNOniPx8rU04ckM7oK1hc",
"https://drive.google.com/uc?export=view&id=1Yazj66dIBpBfqbf7JVoGUzmR2jFSiaKn",
"https://drive.google.com/uc?export=view&id=1j-IU0GbQp5IoHY0h0F808pFHWMMTVLMV",
"https://drive.google.com/uc?export=view&id=1ty2srCsxS1K0yTdu7aFTqxX84ZiKI20y",
"https://drive.google.com/uc?export=view&id=1c09RhYT1Q-eGhNCgRcx9fbgyDPsiWHS9",
            ],
        }
    }

}

</script>