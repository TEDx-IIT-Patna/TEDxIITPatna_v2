<template>
    <section class="speakers container-fluid">
        <h1 class="speaker-head">SPEAKERS.
        </h1>
        <div class="speaker-card-section">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" style="padding-left: 7vw;">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row">
                                <div class="col" v-for="speaker in speakers1">
                                    <div @click="n = speaker.id; show = !show">
                                        <div class="card tab-element-box"></div>
                                        <div class="card speaker-card" >
                                            <div><img class="pastimg" v-bind:src="speaker.image"></div>
                                        </div>
                                        <div class="card-name">{{ speaker.name }}</div>
                                    </div>

                                </div>
                                <div v-for="speaker in speakers1">
                                    <div v-if="speaker.id === n">
                                        <div v-if="show">
                                            <Transition>
                                                <div class="card modal-card">
                                                    <div class="container modal-body">
                                                        <div class="row">
                                                            <button class="btn-close modal-close"
                                                                @click="show = !show"></button>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col"><img class="modalimg"
                                                                    v-bind:src="speaker.image"></div>
                                                            <div class="col">
                                                                <div class="modal-head">{{ speaker.name }}</div>
                                                                <div class="modal-head2">{{ speaker.position }}</div>
                                                                <div class="modal-text">{{ speaker.text }}</div>
                                                                <br />
                                                                <!-- <div class="container"><a :href=speaker.link
                                                                    class="modal-link">Talk </a></div> -->
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div class="container">
                            <div class="row">
                                <div class="col" v-for="speaker in speakers2">
                                    <div @click="n = speaker.id; show = !show">
                                        <div class="card tab-element-box"></div>
                                        <div class="card speaker-card" >
                                            <div><img class="pastimg" v-bind:src="speaker.image"></div>
                                        </div>
                                        <div class="card-name">{{ speaker.name }}</div>
                                    </div>

                                </div>
                                <div v-for="speaker in speakers2">
                                    <div v-if="speaker.id === n">
                                        <div v-if="show">
                                            <Transition>
                                                <div class="card modal-card">
                                                    <div class="container modal-body">
                                                        <div class="row">
                                                            <button class="btn-close modal-close"
                                                                @click="show = !show"></button>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col"><img class="modalimg"
                                                                    v-bind:src="speaker.image"></div>
                                                            <div class="col">
                                                                <div class="modal-head">{{ speaker.name }}</div>
                                                                <div class="modal-head2">{{ speaker.position }}</div>
                                                                <div class="modal-text">{{ speaker.text }}</div>
                                                                <br />

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <button class="carousel-control-prev carousel-control" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next carousel-control" type="button"
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
    name: 'Speakers2019',
    data() {
        return {
            show: false,
            n: -1,
            speakers1:
                [{
                    id: 0,
                    name: "Dr Prashant Jha",
                    position: "Director BMJ innovations",
                    image: "https://drive.google.com/uc?export=view&id=1VHKFlFA5ZkktXWHBofHoAfQECTL_Ueez",
                    text: "He graduated with MBBS and studied Family Medicine for his post-graduation. He trained as a Physician in India and then as a GP with RCGP, London. He is a significant influencer and wants to put India as the leader in medical sciences. ",
                },
                {
                    id: 1,
                    position: "CEO, iCreate",
                    name: "Anupam Jalote",

                    image: "https://drive.google.com/uc?export=view&id=10_PVpaYQ5C7EQbG9V1Zpq7WM8JlUzE6z",
                    text: "He is an innovator, leader and mentors with domain expertise in startup ecosystems, institute buildings, promotion and funding of startups, driving international collaborations, renewable energy, telecom, customer experience and customer value management and strategic consulting. He is currently CEO at iCreate.",
                },
                {
                    id: 2,
                    name: "Kaushalendra Kumar ",
                    position: "",
                    image: "https://drive.google.com/uc?export=view&id=1vwnaKVC58FG_gkscmfcZbcuKhH1iq0Vt",
                    text: "He is a social entrepreneur and founder of Kaushalya Foundation and KNIDS GREEN. His work wasn't only appreciated by society but by nations worldwide. He is an Ashoka Fellow and is included in the 256 future heroes of India, published by India Today.",
                }],
            speakers2: [
                {
                    id: 0,
                    position: "Paralympic Swimmer",
                    name: "Shams Aalam ",
                    image: "https://drive.google.com/uc?export=view&id=1AqYzVE7pwFToolmOAqCSWuZ8AKH7gyo8",
                    text: "He is a true exemplification that the strength of their desire measures the size of one's success. He was awarded best emerging leader in disability sports and sports diplomacy by the US Department of State Global Sports Mentoring Program 2018. ",
                },
                {
                    id: 1,
                    position: "CTO and Co-founder, MishiPay",
                    name: "Tanvi Bhardwaj",
                    image: "https://drive.google.com/uc?export=view&id=14RB3Cq_RTOobWa6wVXQY6xoDdj-gsQWj",
                    text: "She graduated from the University of Manchester with a First Class Honours degree in Computer Systems Engineering. She is now the co-founder and CTO of multi-award-winning retail technology company MishiPay, based in London and Banglore.",
                }
            ],

            illustration: "https://drive.google.com/uc?export=view&id=1DQzR9pKIv_5zL41FlxG1XBpRPFFhAq8J"
        }
    },

}

</script>

<style scoped>
.speakers {
    margin-top: 5%;
}
.speaker-card
{
    width: 15rem;
}
.carousel-control {
    transform: translate(0px, 110px);
}

.tab-element-box {
    width: 15rem;
    height: 15rem;
    transform: translate(30px, 265px);
    background-color: #410c14;
}

.modal-card {
    height: 200px;
    width: 800px;
    transform: translate(12vw, -60vh);
    color: black;
    padding-bottom: 5%;
    border-radius: 20px;
}

.modal-close {
    transform: translate(15px, 0);
}

.modal-head {
    font-size: 40px;
    font-weight: 600;
    padding-bottom: 2%;
    text-align: left;
}

.modal-head2 {
    font-size: 20px;
    font-weight: 300;
    padding-bottom: 2%;
    text-align: left;
}

.modal-body {
    border-radius: 20px;
    background-image: url("https://drive.google.com/uc?export=view&id=1DQzR9pKIv_5zL41FlxG1XBpRPFFhAq8J");
}

.modal-text {
    text-align: left;
    padding-right: 5%;
}

.modal-link {
    text-decoration: none;
    color: red;
    font-weight: 600;
    margin-top: 20%;
    text-align: right;
    margin-left: 150px;
}

.speaker-card {
    background-color: black;
    margin: 5%;

}

.speaker-card:hover {
    background-color: red;
    cursor: pointer;
}

.card-name {
    background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, .05) 10%, rgba(0, 0, 0, .6) 40%, rgba(0, 0, 0, .75) 75%, rgba(0, 0, 0, 1) 100%) repeat scroll 0 0;
    position: relative;
    height: 60px;
    width: 15rem;
    padding-left: 4%;
    font-size: 20px;
    transform: translate(8%, -70px);
}
.speaker-card-section
{
    margin-top: -10%;
}
.speaker-head {
    text-decoration: underline red solid 10px;
    text-align: center;
    font-family: GothamBold;
}

.pastimg {
    max-width: 15rem;
    max-height: 15rem;
}

.modalimg {
    margin-top: 25%;
    width: 15rem;
    transform: translate(-6px, 0px);
}
@media screen and (min-width: 1400px) and (max-width:3000px) 
{
    .speakers{
        padding-top: 5%;
        background-color: black;
        min-height: 50vh;
        background-size: cover;
    }
    .speaker-card-section
{
    margin-top: 10%;
    padding-bottom: 15%;
}
.tab-element-box {
    display: none;
}
 .speaker-head{
    font-size: 4vw;
  }
  .speaker-card
{
    width: 10vw;
}
.pastimg
{
    min-width: 12vw;
    min-height: 12vw;
}
}
</style>