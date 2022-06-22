<template>
    <section class="speakers">
        <h1 class="speaker-head">SPEAKERS.
        </h1>
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
                    name: "Ashok Krish",
                    position: "Head of Social Media & Workplace Reimagination Practice at TCS Digital Enterprise at Tata Consultancy Services",
                    image: "https://drive.google.com/uc?export=view&id=1h1UtKUzwfC3GuxjpEVEh3jiCKLuspXHE",
                    text: "Ashok Krish is a multi faceted and dynamic leader he is a lifelong technology geek, an open source enthusiast and a talented musician.He is a classical violinist and a guitarist, an amateur cellist, columnist for various newspapers, and used to be a Radio Jockey. A strong believer in technology's ability to solve any problem, at TCS he brings this ideology to his work.",
                    linkactive: true,
                    link: "https://youtu.be/MiSbmP_VA38"

                },

                ],
            speakers2: [
                {
                    id: 1,
                    name: "Dr. George Puthuran",
                    position:"Doctor, Ophthalmologist",
                    image: "https://drive.google.com/uc?export=view&id=1QChaPv175Blqm39-Y6VKOJltsHlLCcic",
                    text: "Dr. George V Puthuran hailing from Kochi, Kerala. He currently heads the department of Glaucoma at Aravind Eye Hospital, Madurai. Dr George is the South Zone representative of the present executive committee of the Glaucoma Society Of India. He has presented at various international forums, is an editor of a textbook on Practical Perimetry published by Jaypee Medical Publishers. ",
                    linkactive: true,
                    link: "https://youtu.be/MhhvNLztZKI "
                },
                {
                    id: 2,
                    name: "Dr. Mohan Kameswaran",
                    position:"Doctor, Otorhinolaryngologist",
                    image: "https://drive.google.com/uc?export=view&id=12LQYodl5b_9YKH4Uk7Nt1Jfjn-NWfik3",
                    text: "Dr. Mohan Kameswaran is an Indian otorhinolaryngologist, medical academic and the founder of MERF Institute of Speech and Hearing, a Chennai-based institution providing advanced training in audiology and speech-language pathology. The Government of India awarded him the fourth highest civilian honour of the Padma Shri, in 2006, for his contributions to Indian medicine.",
                    linkactive: false,
                    link: ""
                },
                
                {
                    id: 0,
                    name: "Dr. Pushpak Bhattacharyya",
                    position:"Professor, Computer Science and Engineering",
                    image: "https://drive.google.com/uc?export=view&id=14csUm5fhmscBx8hhqxKVznxlKZS7630l",
                    text: "Dr. Pushpak Bhattacharyya has made seminal contributions in NLP and ML, working in these fields for last 25 years. In addition to being Professor at Dept. of CSE in IIT Bombay, he has been a visiting Professor at Stanford University (2004), Distinguished lecturer at University of Houston, USA (2012), and Visiting Scholar- MIT (1990). ",
                    linkactive: false,
                    link: ""
                },
                {
                    id: 1,
                    name: "Dr. Satyajit Singh",
                    position:"Doctor, Urologist",
                    image: "",
                    text: "Dr. Satyajit Singh is a consultant Urologist associated with Ruban Memorial Hospital, Patna. He served as a registrar, consultant and lecturer in various countries like UK, Scotland and Saudi Arabia.  ",
                    linkactive: false,
                    link: ""
                },
            {
                    id: 2,
                    name: "Tapabrata Chakraborty",
                    position:"Mentalist",
                    image: "https://drive.google.com/uc?export=view&id=1yC7CM-II7yeTQm_ag0VoYCzwFhwq9oQl",
                    text: "Tapabrata Chakraborty, a modern-day Mystifier from Kolkata who is a close up magician and mentalist. He excels in cards and coin tricks , thought implantation, mind reading , hypnosis, psychokinesis, telekinesis and blind- folded driving and lots more. Touted as India's next sensation in the field, he has been doing Magic for ten years now. He is the Semi-Finalist of India's Got Talent and has appeared in some prominent televised shows.",

                    linkactive: false,
                    link: ""
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
    height: 100vh;
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
.card-name {
    background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, .05) 10%, rgba(0, 0, 0, .6) 40%, rgba(0, 0, 0, .75) 75%, rgba(0, 0, 0, 1) 100%) repeat scroll 0 0;
    position: relative;
    height: 65px;
    width: 15rem;
    padding-left: 4%;
    font-size: 25px;
    transform: translate(8%,-80px);
    width: 15rem;
}
.row {
    margin: 1%;
}

.speaker-card2 {
    background-color: black;
    margin-top: 55%;
    border-radius: 20px;
    border-color: #fff;
    text-align:left;
    font-family:GothamLight;
    width:20px;
    font-size:15px;
    overflow-y: hidden;
}

.speaker-card:hover {
    background-color: red; cursor:pointer;
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
    transform: translate(0,-20%);
}
.speaker-head
{
    text-decoration: underline red solid 10px;
  text-align: center;
  font-family: GothamBold;
}
@media all and (max-width: 600px) {
.speaker-head
{
    display: none;
}
}
@media all and (min-width: 600px) {
.speakers
{
    height:60vh;
    margin-top: 10%;
}
}
</style>