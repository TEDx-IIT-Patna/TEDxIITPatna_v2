<template>
    <section class="speakers">
        <h1 style="transform: translate(0,140px);">Speakers</h1>
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
                                        <div class="row speaker-name" >{{speaker.name}}</div>
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
                                        <div class="row speaker-name" >{{speaker.name}}</div>
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
                    name: "Dr Prashant Jha",
                    position:"Director BMJ innovations",
                    image: "https://drive.google.com/uc?export=view&id=1VHKFlFA5ZkktXWHBofHoAfQECTL_Ueez",
                    text: "He graduated with MBBS and studied Family Medicine for his post-graduation. He trained as a Physician in India and then as a GP with RCGP, London. He is a significant influencer and wants to put India as the leader in medical sciences. ",
                }

                ],
            speakers2: [
                {
                    id: 1,
                    position: "CEO, iCreate",
                    name:"Anupam Jalote",
                    
                    image: "https://drive.google.com/uc?export=view&id=10_PVpaYQ5C7EQbG9V1Zpq7WM8JlUzE6z",
                    text: "He is an innovator, leader and mentors with domain expertise in startup ecosystems, institute buildings, promotion and funding of startups, driving international collaborations, renewable energy, telecom, customer experience and customer value management and strategic consulting. He is currently CEO at iCreate.",
                },
                {
                    id: 2,
                    name: "Kaushalendra Kumar ",
                    position:"",
                    image: "https://drive.google.com/uc?export=view&id=1vwnaKVC58FG_gkscmfcZbcuKhH1iq0Vt",
                    text: "He is a social entrepreneur and founder of Kaushalya Foundation and KNIDS GREEN. His work wasn't only appreciated by society but by nations worldwide. He is an Ashoka Fellow and is included in the 256 future heroes of India, published by India Today.",
                },
                {
                    id: 3,
                    position:"Paralympic Swimmer",
                    name: "Shams Aalam ",
                    image: "https://drive.google.com/uc?export=view&id=1AqYzVE7pwFToolmOAqCSWuZ8AKH7gyo8",
                    text: "He is a true exemplification that the strength of their desire measures the size of one's success. He was awarded best emerging leader in disability sports and sports diplomacy by the US Department of State Global Sports Mentoring Program 2018. ",
                },
                {
                    id: 4,
                    position:"CTO and Co-founder, MishiPay",
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
h1{
    font-family:GothamBold;
    font-size:40px
}
.speakers {
    background-color: black;
}
.speaker-name
{
    padding:4%;
    font-size:30px;
    font-family:GothamBold;
}
.carousel-control {
    transform: translate(-9px, 120px);
}
.card-name
{
    font-size: 25px;
    transform: translate(-10%,-70px);
}
.row {
    margin: 1%;
}

.speaker-card2 {
    background-color: black;
    margin-top: 55%;
    border-width: 2px;
    border-color: #fff;
    text-align:left;
    font-family:GothamLight;
    width:20px;
    font-size:15px;
}

.speaker-card:hover {
    background-color: #fff;
}

.speaker-card {
    background-color: black;
    margin: 5%;
}

.pastimg {
    max-width: 15rem;
    max-height: 15rem;
}

.pastimg2 {
    padding-top:20px;
    max-width: 15rem;
    max-height: 15rem;
    transform:translate(-45px)
}

.tab-element-box {
    width: 15rem;
    height: 15rem;
    transform: translate(30px, 265px);
    background-color: #410c14;
}


.speaker-cards-section {
    padding-bottom: 100px;
}
</style>