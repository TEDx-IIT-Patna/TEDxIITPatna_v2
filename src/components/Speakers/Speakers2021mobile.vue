<template>
    <section class="speakers">
        <div class="speaker-cards-section">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" style="padding-left: 7vw;">

                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <div v-for="speaker in speakers1" style="align-items: center;">
                            <div @click="show = !show">
                                <div v-if="!show">
                                    <div class="card tab-element-box"></div>
                                    <div class="card speaker-card" style="width: 15rem;">
                                        <div><img class="pastimg" v-bind:src="speaker.image"></div>
                                    </div>
                                    <div class="card-name">{{ speaker.name }}</div>
                                </div>
                            </div>
                            <div @click="show = !show">
                                <div class="card speaker-card2" style="width: 20rem;" v-if="show">
                                    <div class="container">
                                        <div class="row speaker-name">{{ speaker.name }}</div>
                                        <div class="row container-fluid">{{ speaker.text }}</div>
                                        <div class="row">
                                            <div><img class="pastimg2" v-bind:src="speaker.image"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item " v-for="speaker in speakers2" style="align-items: center;">
                        <div @click="show = !show">
                            <div v-if="!show">
                                <div class="card tab-element-box"></div>
                                <div class="card speaker-card" style="width: 15rem;">
                                    <div><img class="pastimg" v-bind:src="speaker.image"></div>
                                </div>
                                <div class="card-name">{{ speaker.name }}</div>
                            </div>
                        </div>
                        <div @click="show = !show">
                            <div class="card speaker-card2" style="width: 20rem;" v-if="show">
                                <div class="container">
                                    <div class="row speaker-name">{{ speaker.name }}</div>
                                    <div class="row container-fluid">{{ speaker.text }}</div>
                                    <div class="row">
                                        <div><img class="pastimg2" v-bind:src="speaker.image"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <button @click="show = false" class="carousel-control-prev carousel-control" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button @click="show = false" class="carousel-control-next carousel-control" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
</template>



<script>
//let n=0;
export default {
    name: 'Speakers2021',
    data() {
        return {
            show: false,
            n: -1,
            speakers1:
                [{
                    id: 0,
                    name: "Darren Hood ",
                    position: "Principle UX Designer",
                    image: "https://drive.google.com/uc?export=view&id=1Rh0R3uZo2v9ETezi77Yzb92zSKXOvjtm ",
                    text: " He was our first speaker who is not only a UX Designer but also a UX Experience Architect.He has worked on projects for the Fortune 50 and is the host of The World of UX Podcast on CX of M radio via Michigan State University.",
                    linkactive: true,
                    link: " https://youtu.be/6INnG61FLag"

                },

                ],
            speakers2: [
                {
                    id: 1,
                    name: " Rahul Aggarwal ",
                    position: "Founder at Mission Oxygen",
                    image: "https://drive.google.com/uc?export=view&id=1BEH2r8QFo057eShBRJL8jwxpo-tetVPY",

                    text: " He was our second speaker, founder of Mission Oxygen and Co - founder of India 's first graphic design platform - Designhill.One of India 's youngest entrepreneurs, Rahul, is a passionate investor and marketer who acts as a startup advisor.",
                    linkactive: false,
                    link: ""
                },
                {
                    id: 2,
                    name: "Dr Rishi Raj",
                    position: "Associate Professor - IIT Patna",
                    image: "https://drive.google.com/uc?export=view&id=1rYyIbiNFXAbDAuVbeIllGBm4mNOLtfkZ ",
                    text: "He was our third speaker. He is a magnificent professor at IIT Patna. With five patents and more than 50 research papers, Dr Rishi has also worked as a Postdoctoral Associate at the Massachusetts Institute of Technology.",
                    linkactive: true,
                    link: " https://youtu.be/HMvYMLkoShg"
                },

                {
                    id: 3,
                    name: " Vivek Ram",
                    position: "Senapati at Vaanarsena Studios",
                    image: "https://drive.google.com/uc?export=view&id=1FXg2TLjzRl4bIHZpLaZATVTZUxswU2Ar ",
                    text: "He is a well-known CG and VFX artist and has worked on many international feature films, including Fast and Furious 3, The Incredible Hulk, Night at the Museum and many more. As the founder of Vanarsena studios, he is exceptionally passionate about mythical stories.",
                    linkactive: true,
                    link: " https://youtu.be/bG4VLt6uVUc"
                },
                {
                    id: 4,
                    name: "Yusra Mardini",
                    position: "Swimmer, Olympian",
                    image: "https://drive.google.com/uc?export=view&id=1ZKWNUBzAh8FPYmSAvBBZ1cNxk0490YZF",
                    text: "She is an Olympic swimmer and is the youngest ever Goodwill Ambassador for UNHCR, the UN Refugee Agency. A Syrian refugee herself, she advocates for refugees globally and has become a powerful voice for the forcibly displaced across the world. Yusra's incredible story is told in her memoir 'Butterfly: From Refugee to Olympian - My Story of Rescue, Hope and Triumph'",
                    linkactive: true,
                    link: " https://youtu.be/xQ3gAIX6a7E"
                },
                {
                    id: 5,
                    name: "Rupesh Mahore",
                    position: "Researcher and Innovator",
                    image: "https://drive.google.com/uc?export=view&id=1auY98XRy40uwzb-7keGNDTLz4-lQIJJs",

                    text: "Currently working as a remote research intern at Harvard University, Rupesh is deeply interested in physics. This brilliant personality is the mind behind OxyServe, a monitoring device that could save the lives of covid 19 patients. Having worked with Padma Shri Prof. H.C.Verma, he has also worked on a project used in the Chandrayan-2.",

                    linkactive: false,
                    link: ""
                },
                {
                    id: 6,
                    name: "Zoya Agarwal",
                    position: "Aircraft Pilot, UN Spokesperson",
                    image: "https://drive.google.com/uc?export=view&id=1w3Jx2yq2JQCQ-rNtMW-pu-_tFBFPq9LT",

                    text: "The youngest female pilot to fly a Boeing 777,  Captain Zoya turned a page in Indian aviation history when she commanded an all-female cockpit crew that went over the North Pole from San Francisco to Bengaluru on the world's longest non-stop commercial trip. Zoya is also the spokesperson of Generation Equality by the UN.",

                    linkactive: false,
                    link: "",
                },
            ],

            illustration: "https://drive.google.com/uc?export=view&id=1DQzR9pKIv_5zL41FlxG1XBpRPFFhAq8J"
        }
    },

}

</script>

<style scoped>
h1 {
    font-family: GothamBold;
    font-size: 40px
}

.speakers {
    background-color: black;
}

.speaker-name {
    padding: 4%;
    font-size: 30px;
    font-family: GothamBold;
}

.carousel-control {
    transform: translate(-9px, 120px);
}

.card-name  
{
    font-size: 25px;
    transform: translate(50px, -80px);
}

.row {
    margin: 1%;
}

.speaker-card2 {
    background-color: black;
    margin-top: 55%;
    border-radius: 20px;
    border-color: #fff;
    text-align: left;
    font-family: GothamLight;
    width: 20px;
    font-size: 15px;
    overflow-y: hidden;
}

.speaker-card:hover {
    background-color: red; cursor:pointer;
}

.speaker-card {
    background-color: black;
    margin: 5%;
    border-radius: 20px;

}

.pastimg {
    max-width: 15rem;
    max-height: 15rem;
}

.pastimg2 {
    padding-top: 20px;
    max-width: 15rem;
    max-height: 15rem;
    transform: translate(-45px)
}

.tab-element-box {
    width: 15rem;
    height: 15rem;
    transform: translate(30px, 265px);
    background-color: #410c14;
}


.speaker-cards-section {
    padding-bottom: 100px;
    transform: translate(0, -250px);

}
</style>