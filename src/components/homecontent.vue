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


                <div class="image image-1 col-3 ">

                    <img src="..\assets\hand_graphics.png" style="    height: 77vh;
    width: auto;" />
                </div>
                <div class="content content1 col">
                    <h1 class="heading">Togetherness</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatibus sapiente maxime
                        tempore, suscipit
                        repellat laboriosam? Temporibus dolorem debitis, sequi doloremque rem ab aut eaque, consequatur
                        fugiat corporis
                        autem consectetur itaque, nemo natus. Quisquam recusandae in aliquam esse laborum, nesciunt
                        consectetur rem nulla
                        quo ducimus architecto, aspernatur, commodi officiis qui nemo! Totam, quisquam illum maxime
                        accusantium beatae sunt
                        reprehenderit voluptate, voluptates sint praesentium quam sed pariatur non dolores libero enim
                        laboriosam
                        asperiores numquam qui! Exercitationem enim provident dolorem, minus sit et consequatur ut?
                        Nihil consequatur
                        vitae officiis voluptates quam? Vero a deserunt, non ullam ducimus recusandae eius quidem
                        nesciunt at.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatibus sapiente maxime
                        tempore, suscipit
                        repellat laboriosam? Temporibus dolorem debitis, sequi doloremque rem ab aut eaque, consequatur
                        fugiat corporis
                        autem consectetur itaque, nemo natus. Quisquam recusandae in aliquam esse laborum, nesciunt
                        consectetur rem nulla
                        quo ducimus architecto, aspernatur, commodi officiis qui nemo! Totam, quisquam illum maxime
                        accusantium beatae sunt
                        reprehenderit voluptate, voluptates sint praesentium quam sed pariatur non dolores libero enim
                        laboriosam
                        asperiores numquam qui! Exercitationem enim provident dolorem, minus sit et consequatur ut?
                        Nihil consequatur
                        vitae officiis voluptates quam? Vero a deserunt, non ullam ducimus recusandae eius quidem
                        nesciunt at.
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
                    <h1 class="heading my-2">TED<span class="letter_x">x</span> IIT Patna</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatibus sapiente maxime
                        tempore, suscipit
                        repellat laboriosam? Temporibus dolorem debitis, sequi doloremque rem ab aut eaque, consequatur
                        fugiat corporis
                        autem consectetur itaque, nemo natus. Quisquam recusandae in aliquam esse laborum, nesciunt
                        consectetur rem nulla
                        quo ducimus architecto, aspernatur, commodi officiis qui nemo! Totam, quisquam illum maxime
                        accusantium beatae sunt
                        reprehenderit voluptate, voluptates sint praesentium quam sed pariatur non dolores libero enim
                        laboriosam
                        asperiores numquam qui! Exercitationem enim provident dolorem, minus sit et consequatur ut?
                        Nihil consequatur
                        vitae officiis voluptates quam? Vero a deserunt, non ullam ducimus recusandae eius quidem
                        nesciunt at.
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

<style>
.main {
    box-sizing: border-box;
    position: absolute;
    margin-top: 450vh;
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
    margin-left: 10%;
    margin-top: 11%;
    font-size: larger;
}

.content2 {
    margin-top: 8%;
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
</style>