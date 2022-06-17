<script>


</script>
<template>
    <div class="outer">
        <div class="he">
            <h1 class="headings"><span class="our_text">OU</span><span class="our_ttext">R</span> PARTNERS</h1>
        </div>

        <div class="row justify-content-space-between main">
            <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4">
                <div class="col my-5 ">
                    <img class="logo" src="..\assets\Grey_1.png">
                </div>
                <div class="col my-5">
                    <img class="logo" src="..\assets\Grey_1.png">
                </div>
                <div class="col   my-5">
                    <img class="logo" src="..\assets\Grey_1.png">
                </div>
                <div class="col  my-5">
                    <img class="logo" src="..\assets\Grey_1.png">
                </div>
                <div class="col  my-5">
                    <img class="logo" src="..\assets\Grey_1.png">
                </div>
                <div class="col  my-5">
                    <img class="logo" src="..\assets\Grey_1.png">
                </div>
                <div class="col  my-5">
                    <img class="logo" src="..\assets\Grey_1.png">
                </div>
                <div class="col-sm-6 col-lg-3 my-5">
                    <img class="logo" src="..\assets\Grey_1.png">
                </div>
                </div>
            </div>
        </div>
</template>
<style scoped>
h1{
    text-align: left;
}
.outer {
    /* height: 100vh; */

    overflow-x:hidden;
    color: black;
    font-family: 'Gotham Black', sans-serif;
    height: 100vh;
    background: linear-gradient(90deg, white 3.99%, #FF0039 3.99%, #FF0039 14.9%, white 14.9%);

}

.our_text {
    color: white;
    font-weight: 500;
}
.our_ttext {
    color: white;
    font-weight: 500;
}

.main {
    margin-left: 18vw;
}

@font-face {
    font-family: gothambold;
    src: url(gothambold.otf);
    /* font-weight: bold; */
}

.headings {
    font-family: gothambold;
    font-size: 68px;
    margin-left: 4.7vw;
    font-weight: 675;
    letter-spacing: -5.5px;
    word-spacing: 5px;
}


.logo {
        height: auto !important;
        width: 150px !important;
    }
@media screen and (max-width: 992px) and (min-width:320px) {
    
    .our_ttext {
    color: black;
    font-weight: 500;
}
    .our_text {
        color: white;
        font-weight: 500;
    }

}

@media screen and (max-width: 558px) and (min-width:320px) {
    .our_textt {
        color: black;
        font-weight: 500;
    }

    .headings {
        font-size: 38px;
    }
}
</style>