<template>
    <div class="container">
        <h1 style="transform: translate(0,140px); color: white; margin-bottom: 10%;">Gallery</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-col-lg-4 ">
            <div class="gallery-col" v-for="image in images">
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
.tab-element-box {
    width: 15rem;
    height: 10rem;
    transform: translate(10px, 170px);
    background-color: #410c14;
}
.pastimg {
    width: 15rem;
}
@media screen and (max-width: 600px) {
.gallery-col
{
    align-items: center;
    margin-left: 20%;
}
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