<!-- <script setup lang="ts">

// defineProps<{
//   content: string;
//   img :string;
  
// }>();


</script> -->


<template>
    <div class="main">
        <!-- first image and content -->
        <div class="info info-1 container">
            <div class="row">


                <div class="image image-1 col-md-3 " style="margin-right: 0px;">

                    <img src="..\assets\hand_graphics.png" style="    height: 77vh;
    width: auto;" />
                </div>
                <div class="content content1 col">
                    <h1 class="heading">Togetherness</h1>

                    <p>
                        Isn't everyone a part of everyone else?  Like every raindrop, a part of the ocean. Like every sand particle, a part of the sand castle.We might think of our achievements and our thoughts to be of our own individual contribution but in the end, they are a sum of every relationship we have made, a string of thoughts we share with every person we meet.We believe that “Together, we are capable of anything!”
The theme of Infinite Affinities speaks for togetherness. It signifies how people on the same journey reach their destination early if they work with harmony and integrity.

                    </p>
                </div>
            </div>
        </div>

        <!-- second image and content -->
        <div class="info info1 info-2 container my-3">
            <div class="row">
                <div class="content content2 col ">
                    <h1 class="heading">What is TED<span class="letter_x">x</span>?</h1>

                    <p>
                        TEDx is a grassroots initiative, created in the spirit of TED’s overall mission to research and discover “ideas worth spreading.”  
TEDxIITPatna has continued to be a guiding light since 2016. Three stellar editions later - we've still got more to share! Going strong through Covid (with an impressive footfall of 1500+ participants), we are back with a REBOOT.
This year TEDx IITPATNA  proudly presents it’s fourth edition. In this event, we shall highlight symbiosis and the team spirit that allows us to ascend to greater heights. Featuring diverse speakers from various walks of life, we hope to provide an enlightening experience to our community.

                    </p>
                </div>

                <div class="image image-2 col-5">
                    <img src="..\assets\qestion_mark_1.png" height="550" width="500" />
                </div>
            </div>
        </div>
        <!-- third image and content -->

        <div class="info info-3 container ">
            <div class="row my-5">
                <div class="image image-3 col-3">
                    <img src="..\assets\xxx_img.png" height="600" width="400" />
                </div>
                <div class="content content3  col ">
                    <h1 class="heading my-2">TED<span class="letter_x">x</span>IIT Patna</h1>

                    <p>
                        TEDxIITPatna has continued to be a guiding light since 2016. Three stellar editions later - we've still got more to share!

Going strong through Covid (with an impressive footfall of 1500+ participants), we are back with a REBOOT. 

This year TEDx IITPATNA presents the fourth edition of its Tedx Conference.
In this event, we shall highlight symbiosis and the team spirit that allows us to ascend to greater heights.
Featuring diverse speakers from various walks of life, we hope to provide an enlightening experience to our community.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homecontent'
}

</script>

<style scoped>
.main {
    box-sizing: border-box;
    position: absolute;
    margin-top: 450vh;
    margin-inline: 5vw;
    margin-left: 13vw;
}

.info {
    display: flex;
}

.heading {
    font-size: 60px;
    text-align: center;
}


.content {
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    width: 50%;
    margin-left: 31vw;
    margin-top: 13vh;
    font-size: larger;
}

.content2 {
    margin-top: 8%;
        margin-left: 5vw;
    margin-top: 23vh;
}

.content3 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    width: 50%;
    margin-left: 10%;
    margin-top: 10%;
    font-size: larger;
}

.letter_x {
    color: red;
}

/* @media (max-width:760px) and (min-width:318px) {
        .info{
            display: block !important;
        }
        h1{
            font-size: 40px;
        }
         .content2{
        margin-top: 0%;
    }
        .image{
            margin-left: 0px !important;
        }
        .info1 :nth-child(1) { order: 2; }
        .imagee{
            margin-left: -10px !important;
        }
        .content {
            width:100%;
        }
        .content3{
             width:100%;
        }
    }
    
    /* background-image: linear-gradient(to right, red , white); */
/* margin-left: 10%; */
.image{
    position: absolute;
}
.image-1{
    position:absolute;
    margin-right: 0px;
}

.content2{
    position: absolute;
    margin-left: 1vw;
}

.image-2{
        left: 39vw;
    position: absolute;
    top: 80vh;
}

.image-3{
        position: absolute;
    top: 157vh;
}

.content3{
        position: absolute;
    top: 151vh;
    left: 25vw;
}
</style>