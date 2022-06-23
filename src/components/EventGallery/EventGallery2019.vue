<template>
    <div class="container-fluid">
        <h1 style="text-align:center">GALLERY.</h1>
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
.container-fluid {
    color: aliceblue;
    background-color: black;
    margin-left:12%;
    align-items: center;
        padding-bottom: 10%;

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

h1 {
    font-family: GothamBold;
    font-size: 40px;
    margin-left: -12%;
    margin-top:10%;
    text-decoration: underline red solid 10px;
}

@media screen and (max-width: 600px) {
    .row {
        margin-left: 6%;
        align-items: center;
    }

    h1 {
        font-family: GothamBold;
        font-size: 40px;
        margin-top: 25%;
    }

    .container-fluid {
        color: aliceblue;
        background-color: black;
        margin-left: 8px;
        margin-top: -30%;
    }
}
@media screen and (min-width: 1400px) and (max-width:3000px) 
{
    .pastimg
{
    min-width: 19vw;
    min-height: 8vw;
    margin-right: 2%;
}
h1
{
    font-size: 4vw;
}
.container-fluid{
   transform: translate(-5%);
}
}

</style>

<script>

export default {
    name: 'Gallery',
    data() {
        return {
            images: ["https://drive.google.com/uc?export=view&id=1kL7sAqSjgECrn9cnkEh7ynlHoTTYn6YQ",
                "https://drive.google.com/uc?export=view&id=1DJRH5C3rmcyMeblVjytSYQtXBwojTayH",
                "https://drive.google.com/uc?export=view&id=1mgMxAv82eFQ-g7pRvjlCyTBVYHuVWn3U",
                "https://drive.google.com/uc?export=view&id=1dH_EwkkIujgMZjga6Gn1x5x9VfEtjysa",
                "https://drive.google.com/uc?export=view&id=1Lss0gNBMiDfAuDZ-YhyiQV9utP25-l_K",
                "https://drive.google.com/uc?export=view&id=1Hizjn4IUwxCQIMV3z0vIcTwEjT3qFIUB",
                "https://drive.google.com/uc?export=view&id=1nz_BOkamc_j4JROjEwUVZ6QUm6fjcOWK",
                "https://drive.google.com/uc?export=view&id=1TbaYTzkWUbNFuvFxwUmtfjPx9itiw_3X",
                "https://drive.google.com/uc?export=view&id=1j4LSTDDHFE8anrKoaxJwnWUXEUc0Jwvj",
                "https://drive.google.com/uc?export=view&id=144A9E9nBdnXDiINnA6qzl4yk9fH3l5U-",
                "https://drive.google.com/uc?export=view&id=1cSE8-eZKKSYcCf4bsY-04NuO5pfD8kGx",
                "https://drive.google.com/uc?export=view&id=13MGTdUwA78ptlHzwp0JtzypdkgaBvRN3",
                "https://drive.google.com/uc?export=view&id=1YQBaiUnpzcNtRGTpr3qTntLKGwS4fVUj",
            ],
        }
    }

}

</script>