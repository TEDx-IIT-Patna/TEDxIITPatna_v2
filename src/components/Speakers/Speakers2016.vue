<template>
    <section class="speakers container-fluid">
        <h1 class="speaker-head">SPEAKERS.
        </h1>
        <div class="speaker-card-section">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" style="padding-left: 7vw;">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
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
                                        <div class="card speaker-card">
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
                                                                <div class="modal-text">{{ speaker.text }}
                                                                <br/><br/>
                                                                <a :href=speaker.link
                                                                        class="modal-link2">Talk </a>
                                                                </div>
                                                                <br />
                                                                <div class="container"><a :href=speaker.link
                                                                        class="modal-link">Talk </a></div>
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
                                        <div class="card speaker-card">
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
                                                                <div class="modal-text">{{ speaker.text }}
                                                                <br/><br/>
                                                                <a :href=speaker.link
                                                                        class="modal-link2">Talk </a>
                                                                </div>
                                                                <br />
                                                                <div class="container" v-if="speaker.linkactive === true"><a
                                                                        :href=speaker.link class="modal-link">Talk </a>
                                                                </div>
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
    name: 'Speakers2016',
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
                    text: "A multi-faceted and dynamic leader, a lifelong technology geek, an open-source enthusiast and a talented musician, he is specialised in the 'Human cloud', which describes the architecture of social technologies and their interplay between people and technology.",
                    linkactive: true,
                    link: "https://youtu.be/MiSbmP_VA38"

                },
                {
                    id: 1,
                    name: "Dr. George Puthuran",
                    position: "Doctor, Ophthalmologist",
                    image: "https://drive.google.com/uc?export=view&id=1QChaPv175Blqm39-Y6VKOJltsHlLCcic",
                    text: "Currently heads the department of Glaucoma at Aravind Eye Hospital, Madurai; Dr George is the South Zone representative of the present executive committee of the Glaucoma Society Of India. His video, Evolution Of An Affordable Aqueous Drainage Implant – The Indian Story, was one of the three winning films at the World Glaucoma Congress 2013 held in Vancouver. ",
                    linkactive: true,
                    link: "https://youtu.be/MhhvNLztZKI "
                },
                {
                    id: 2,
                    name: "Dr. Mohan Kameswaran",
                    position: "Doctor, Otorhinolaryngologist",
                    image: "https://drive.google.com/uc?export=view&id=12LQYodl5b_9YKH4Uk7Nt1Jfjn-NWfik3",
                    text: "Being the founder of the MERF Institute of Speech and Hearing, Dr Mohan Kameswaran has many firsts to his credit, such as the performance of the first auditory brain stem implantation surgery, the first pediatric brain stem implantation surgery etc. He was awarded the fourth highest civilian honour of the Padma Shri, in 2006, for his contributions to Indian medicine. ",
                    linkactive: false,
                    link: ""
                },
                ],
            speakers2: [
                {
                    id: 0,
                    name: "Dr. Pushpak Bhattacharyya",
                    position: "Professor, Computer Science and Engineering",
                    image: "https://drive.google.com/uc?export=view&id=14csUm5fhmscBx8hhqxKVznxlKZS7630l",
                    text: "Being president of ACL, the international apex body of NLP, he has made seminal contributions in NLP and ML, working in these fields for the last 25 years. Being a professor at the Dept. of CSE in IIT Bombay, he has written a textbook called 'Machine Translation', published by CRC Press, the USA, which brings foundational light points on the translation of Indian languages.",
                    linkactive: false,
                    link: ""
                },
                {
                    id: 1,
                    name: "Dr. Satyajit Singh",
                    position: "Doctor, Urologist",
                    image: "https://drive.google.com/uc?export=view&id=1Kvy548QukaUn0lYkMMYC6CWrJ8xOzIek",
                    text: "Dr. Satyajit Singh is a consultant Urologist associated with Ruban Memorial Hospital, Patna. He served as a registrar, consultant and lecturer in various countries like UK, Scotland and Saudi Arabia.  ",
                    linkactive: false,
                    link: ""
                },
                {
                    id: 2,
                    name: "Tapabrata Chakraborty",
                    position: "Mentalist",
                    image: "https://drive.google.com/uc?export=view&id=1yC7CM-II7yeTQm_ag0VoYCzwFhwq9oQl",
                    text: "Tapabrata Chakraborty, a modern-day Mystifier from Kolkata who is a close up magician and mentalist. He excels in cards and coin tricks , thought implantation, mind reading , hypnosis, psychokinesis, telekinesis and blind- folded driving and lots more. Touted as India's next sensation in the field, he has been doing Magic for ten years now. He is the Semi-Finalist of India's Got Talent and has appeared in some prominent televised shows.",

                    linkactive: false,
                    link: ""
                },

            ],

            illustration: "https://drive.google.com/uc?export=view&id=1DQzR9pKIv_5zL41FlxG1XBpRPFFhAq8J"
        }
    },

}

</script>

<style scoped>
.speakers {
    background-color: black;
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
    max-height: 15vw;
    max-width: 60vw;
    transform: translate(12vw, -60vh);
    color: black;
    padding-bottom: 5%;
    border-radius: 20px;
}

.modal-close {
    transform: translate(10px, 0);
}

.modal-head {
    font-size: 5vh;
    font-weight: 600;
    padding-bottom: 2%;
    text-align: left;
}

.modal-head2 {
    font-size: 3.2vh;
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
    font-size: 2.2vh;
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

.modal-link {
    text-decoration: none;
    color: red;
    font-weight: 600;
    margin-top: 20%;
    text-align: right;
    margin-left: 150px;
}
.modal-link2 {
    display: none;
}
.speaker-card {
    background-color: black;
    margin: 5%;

}

.speaker-card:hover {
    background-color: red; cursor:pointer;
}

.pastimg {
    max-width: 15rem;
    max-height: 15rem;
}

.modalimg {
    margin-top: 30%;
    width: 15rem;
    transform: translate(-6px, 0px);
}
@media screen and (min-width: 1400px) and (max-width:3000px) 
{
    .carousel-control
    {
        transform: translate(0,0);
    }
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
.modal-text {
    text-align: left;
    padding-right: 5%;
    font-size: 2vh;
    margin-bottom: -25vh;
}
.modal-card {
    min-height: 50vh;
    min-width: 50vw;
    transform: translate(10vw, -40vh);
    color: black;
    padding-bottom: 0%;
    background-color: rgba(0, 0, 0, 0);
}
.modal-close {
    transform: translate(0, 0);
}
.modal-head {
    font-size: 5vh;
    font-weight: 600;
    padding-bottom: 2%;
    text-align: left;
}
.modal-head2 {
    font-size: 3vh;
    font-weight: 300;
    padding-bottom: 2%;
    text-align: left;
}
.modalimg {
    margin-top: 40%;
    width: 15vw;
    transform: translate(-6px, 0px);
}
.modal-link {
    display: none;
}
.modal-link2 {
    text-decoration: none;
    color: red;
    display: contents;
    margin-top: 10%;
}
}
</style>