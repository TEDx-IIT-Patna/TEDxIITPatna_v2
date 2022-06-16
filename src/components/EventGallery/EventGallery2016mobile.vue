<template>
    <div class="container">
        <h1 style="transform: translate(0,140px); color: white; margin-bottom: 10%;">Gallery</h1>
        <div class="row row-cols-1 gallery-images">
            <div v-for="image in images">
                <div class="card tab-element-box"></div>
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
.gallery-images
{
    margin-left: 10%;
}
.tab-element-box {
    width: 15rem;
    height: 10rem;
    transform: translate(15px, 180px);
    background-color: #410c14;
}
.pastimg {
    width: 15rem;
}
</style>

<script>

export default {
    name: 'Gallery',
    data() {
        return {
            images: ["https://drive.google.com/uc?export=view&id=1GVyIBlmj1dxaQMPX43FO-ho2arcsp6HI",
"https://drive.google.com/uc?export=view&id=1Xa8ZAVYOonfwvC1Lo5FN2oSMv2CH9aWh",
"https://drive.google.com/uc?export=view&id=1BicdhMLciy8AWAafx1ws7fryS9rjUjKm",
"https://drive.google.com/uc?export=view&id=1ioQ9GaE6gjr9ocF5W95LXV5EnC4rwwSq",
"https://drive.google.com/uc?export=view&id=1z6MbQU3okyfGhjAraqNDB2NipXxHePtr",
"https://drive.google.com/uc?export=view&id=1sWG3fDXlBuMAd-6vz3ZZACaEqGCQVTRu",
            ],
        }
    }

}

</script>