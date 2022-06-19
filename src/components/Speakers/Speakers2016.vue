<template>
    <section class="speakers">
        <h1 style="transform: translate(0,140px);">Speakers</h1>
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
                                    <div class="card speaker-card" style="width: 15rem;">
                                        <div><img class="pastimg" v-bind:src="speaker.image"></div>
                                    </div>
                                    <div class="card-name">{{speaker.name}}</div>
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
                                    <div class="card speaker-card" style="width: 15rem;">
                                        <div><img class="pastimg" v-bind:src="speaker.image"></div>
                                    </div>
                                    <div class="card-name">{{speaker.name}}</div>
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
                                                            <div class="container" v-if="speaker.linkactive===true"><a :href=speaker.link
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
                    text: "Ashok Krish is a multi faceted and dynamic leader he is a lifelong technology geek, an open source enthusiast and a talented musician.He is a classical violinist and a guitarist, an amateur cellist, columnist for various newspapers, and used to be a Radio Jockey. A strong believer in technology's ability to solve any problem, at TCS he brings this ideology to his work.",
                    linkactive: true,
                    link: "https://youtu.be/MiSbmP_VA38"

                },
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
                ],
            speakers2: [
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
                },
                
            ],

            illustration: "https://drive.google.com/uc?export=view&id=1DQzR9pKIv_5zL41FlxG1XBpRPFFhAq8J"
        }
    },

}

</script>

<style scoped>
.speaker {
    background-color: black;
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
    height: 300px;
    width: 800px;
    transform: translate(12vw, -60vh);
    color: black;
    padding-bottom: 5%;
    border-radius: 20px;
}

.modal-close {
    transform: translate(10px, 0);
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
.card-name
{
    font-size: 20px;
    transform: translate(-10%,-70px);
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
    background-color: #fff;
}

.pastimg {
    max-width: 15rem;
    max-height: 15rem;
}

.modalimg {
    margin-top: 40%;
    width: 15rem;
    transform: translate(-60px, 0px);
}
</style>