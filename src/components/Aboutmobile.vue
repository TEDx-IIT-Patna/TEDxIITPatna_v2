<template>
	<section class="nav_section">
		<Nav :open_button_color="this.showWebView ? 'black' : 'black'" open_button_style="icon" />
		<BackButton />
	</section>
	<section class="about_IITP">
		<h5>ABOUT</h5>
		<h1>IIT Patna</h1>
		<div class="about-bg" id="about_bg">About.</div>
		<div class="about-text">
			Indian Institute of Technology Patna is one of the new IITs established by an Act of
			the Indian Parliament on August 06, 2008. Offering various undergraduate, postgraduate, and
			post-doctoral degrees, it is one of the fastest developing colleges in India.<br /><br />
			Emerging as a center of thriving excellence, the lush green campus of IIT Patna spans 500 acres.<span
				id="dots">...</span><span id="more"> Many
				inquisitive minds, eager to expand their technical prowess, are ably supported by astute professors and
				state-of-the-art laboratories.<br /><br />
				As the site for vibrant fests – Nebula, Reverberance, Celesta, Anwesha, Infinito– IIT Patna sees
				overwhelming participation from all over the country. TEDxIITPatna is one of the more formal events in
				this Institute of National Importance. IIT Patna is committed to providing the nation with well-rounded
				individuals with professional and scientific competence of the highest degree.</span>
			<div class="expand-hr"></div>
			<a @click="myFunction()" class="mybtn" id="myBtn">EXPAND <i class="fa-solid fa-chevron-down"></i></a>
		</div>
		<div class="tedx-pic"><img src="../assets/images/tedxiitpatna_logo-1B.png" alt="">
		</div>
	</section>
	<section class="about_IITP">
		<h5>ABOUT</h5>
		<h1>TED</h1>
		<div class="about-text">
			TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in
			California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual
			TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of
			these talks are then made available, free, at TED.com. TED
				speakers have included Bill Gates, Jane
				Goodall, Elizabeth Gilbert<span id="dots2">...</span><span id="more2">, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala,
				Sal Khan and Daniel Kahneman.<br /><br />
				The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media
				initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides
				subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational
				initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to
				funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals
				or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows
				program, helping world-changing innovators from around the globe to amplify the impact of their
				remarkable projects and activities.<br /><br />
				Follow TED on Twitter at <a href="http://twitter.com/TEDTalks">http://twitter.com/TEDTalks</a>, or on
				Facebook at <a href="http://www.facebook.com/TED">http://www.facebook.com/TED</a>.</span>
			<div class="expand-hr"></div>
			<a @click="myFunction2()" class="mybtn" id="myBtn2">EXPAND <i class="fa-solid fa-chevron-down"></i></a>
		</div>
		<div class="tedx-pic"><img src="../assets/images/tedxiitpatna_logo-1B.png" alt="">
		</div>
	</section>

	<section class="team_mob">
		<h5>Team</h5>
		<h1>Faculty</h1>
		<div class="team-bg" id="team_bg">Team.</div>
		<div class="card card_mob">
			<img src="../assets/images/Team_Image/prof.png" class="card-img-top card-img-top-mob" alt="...">
			<div class="card-body card-body-mob" data-bs-toggle="modal" data-bs-target="#facultyModal">
				<div class="row name name-mob">
					<div class="col">
						Dr.Sujoy Kumar Samanta
					</div>
				</div>
				<div class="row post post-mob">
					<div class="col">
						Professor-In-Charge<br />(PIC)
					</div>
				</div>
				<div class="row icon">
					<div class="col">
						<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
						<a href="#" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="modal fade" id="facultyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
			<div class="card" style="width: 18rem;">
				<img src="../assets/images/Team_Image/prof.png" class="card-img-modal" alt="...">
				<div class="card-body">
					<h5 class="card-title">Dr.Sujoy Kumar Samanta</h5>
					<p class="card-text">Professor-In-Charge(PIC)</p>
					<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
					<a href="#" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
				</div>
			</div>
		</div>
	</div>



	<section class="team_mob">
		<h5>Team</h5>
		<h1>Organizers</h1>
		<div class="card card_mob" v-for="person in Organisers" :key="person.index" >
			<img :src="person.Path" class="card-img-top card-img-top-mob" alt="...">
			<div class="card-body card-body-mob" data-bs-toggle="modal" :data-bs-target="'#'+person.Name">
				<div class="row name name-mob">
					<div class="col">
						{{ person.Name }}
					</div>
				</div>
				<div class="row post post-mob">
					<div class="col">
						{{ person.Committee }}
					</div>
				</div>
				<div class="row icon">
					<div class="col">
						<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
						<a :href="person.Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div v-for="person in Organisers" :key="person.index">
	<div class="modal fade" :id="person.Name" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
		<div class="modal-dialog modal-dialog-centered">
			<!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
			<div class="card" style="width: 18rem;">
				<img :src="person.Path" class="card-img-modal" alt="...">
				<div class="card-body">
					<h5 class="card-title">{{ person.Name }}</h5>
					<p class="card-text">{{ person.Committee }}</p>
					<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
					<a :href="person.Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
				</div>
			</div>
		</div>
	</div>
	</div>

	<section class="team_mob">
		<h5>Team</h5>
		<h1>Planning and Curation</h1>
		<div class="card card_mob" v-for="person in PnC" :key="person.index">
			<img :src="person.Path" class="card-img-top card-img-top-mob" alt="...">
			<div class="card-body card-body-mob">
				<div class="row name name-mob">
					<div class="col">
						{{ person.Name }}
					</div>
				</div>
				<div class="row post post-mob">
					<div class="col">
						{{ person.Committee }}
					</div>
				</div>
				<div class="row icon">
					<div class="col">
						<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
						<a :href="person.Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="team_mob">
		<h5>Team</h5>
		<h1>Hospitality</h1>
		<div class="card card_mob" v-for="person in Hosp" :key="person.index">
			<img :src="person.Path" class="card-img-top card-img-top-mob" alt="...">
			<div class="card-body card-body-mob">
				<div class="row name name-mob">
					<div class="col">
						{{ person.Name }}
					</div>
				</div>
				<div class="row post post-mob">
					<div class="col">
						{{ person.Committee }}
					</div>
				</div>
				<div class="row icon">
					<div class="col">
						<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
						<a :href="person.Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="team_mob">
		<h5>Team</h5>
		<h1>Web&App</h1>
		<div class="card card_mob" v-for="person in Webnapp" :key="person.index">
			<img :src="person.Path" class="card-img-top card-img-top-mob" alt="...">
			<div class="card-body card-body-mob">
				<div class="row name name-mob">
					<div class="col">
						{{ person.Name }}
					</div>
				</div>
				<div class="row post post-mob">
					<div class="col">
						{{ person.Committee }}
					</div>
				</div>
				<div class="row icon">
					<div class="col">
						<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
						<a :href="person.Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="team_mob">
		<h5>Team</h5>
		<h1>Media and Public Relations</h1>
		<div class="card card_mob" v-for="person in MPR" :key="person.index">
			<img :src="person.Path" class="card-img-top card-img-top-mob" alt="...">
			<div class="card-body card-body-mob">
				<div class="row name name-mob">
					<div class="col">
						{{ person.Name }}
					</div>
				</div>
				<div class="row post post-mob">
					<div class="col">
						{{ person.Committee }}
					</div>
				</div>
				<div class="row icon">
					<div class="col">
						<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
						<a :href="person.Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="team_mob">
		<h5>Team</h5>
		<h1>Editorial</h1>
		<div class="card card_mob" v-for="person in Editorial" :key="person.index">
			<img :src="person.Path" class="card-img-top card-img-top-mob" alt="...">
			<div class="card-body card-body-mob">
				<div class="row name name-mob">
					<div class="col">
						{{ person.Name }}
					</div>
				</div>
				<div class="row post post-mob">
					<div class="col">
						{{ person.Committee }}
					</div>
				</div>
				<div class="row icon">
					<div class="col">
						<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
						<a :href="person.Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="team_mob">
		<h5>Team</h5>
		<h1>Registration</h1>
		<div class="card card_mob" v-for="person in Registration" :key="person.index">
			<img :src="person.Path" class="card-img-top card-img-top-mob" alt="...">
			<div class="card-body card-body-mob">
				<div class="row name name-mob">
					<div class="col">
						{{ person.Name }}
					</div>
				</div>
				<div class="row post post-mob">
					<div class="col">
						{{ person.Committee }}
					</div>
				</div>
				<div class="row icon">
					<div class="col">
						<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
						<a :href="person.Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="team_mob">
		<h5>Team</h5>
		<h1>Production</h1>
		<div class="card card_mob" v-for="person in Prod" :key="person.index">
			<img :src="person.Path" class="card-img-top card-img-top-mob" alt="...">
			<div class="card-body card-body-mob">
				<div class="row name name-mob">
					<div class="col">
						{{ person.Name }}
					</div>
				</div>
				<div class="row post post-mob">
					<div class="col">
						{{ person.Committee }}
					</div>
				</div>
				<div class="row icon">
					<div class="col">
						<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
						<a :href="person.Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="team_mob">
		<h5>Team</h5>
		<h1>Creative and Designing</h1>
		<div class="card card_mob" v-for="person in CnD" :key="person.index">
			<img :src="person.Path" class="card-img-top card-img-top-mob" alt="...">
			<div class="card-body card-body-mob">
				<div class="row name name-mob">
					<div class="col">
						{{ person.Name }}
					</div>
				</div>
				<div class="row post post-mob">
					<div class="col">
						{{ person.Committee }}
					</div>
				</div>
				<div class="row icon">
					<div class="col">
						<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
						<a :href="person.Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="team_mob last_team_mob">
		<h5>Team</h5>
		<h1>Sponsorship</h1>
		<div class="card card_mob" v-for="person in Spons" :key="person.index">
			<img :src="person.Path" class="card-img-top card-img-top-mob" alt="...">
			<div class="card-body card-body-mob">
				<div class="row name name-mob">
					<div class="col">
						{{ person.Name }}
					</div>
				</div>
				<div class="row post post-mob">
					<div class="col">
						{{ person.Committee }}
					</div>
				</div>
				<div class="row icon">
					<div class="col">
						<a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
						<a :href="person.Linkedin" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<br />
	<br />
	<br />

</template>

<script scoped>
import Nav from '@/components/Nav.vue'
import BackButton from '@/components/BackButton.vue'
import Footer from '@/components/Footer.vue'
export default {
	name: 'team-mobile',
	data() {
		return {

			Organisers: [
				{ index: "#1", Name: "Palak Totala", "Committee": "Organiser", Roll: "2001CS84", Path: require('@/assets/images/Team_Image/1.jpg'), Linkedin: "https://www.linkedin.com/in/palak-totala-510875203/" },
				{ index: "#2", Name: "Nischal Jain", "Committee": "Co-organiser", Roll: "2001ME41", Path: require('@/assets/images/Team_Image/2.jpg'), Linkedin: "https://www.linkedin.com/in/nischal-jain-4ab036195/" },
			],
			Webnapp: [
				{ index: "3", Name: "Pratyush Kumar", "Committee": "WebnApp", Roll: "2001ME51", Path: require('@/assets/images/Team_Image/3_1.jpg'), Linkedin: "https://www.linkedin.com/in/pratyushkumar1032/" },
				{ index: "4", Name: "Suyog Vinod Chaudhari", "Committee": "WebnApp", Roll: "2001EE77", Path: require('@/assets/images/Team_Image/4.jpg'), Linkedin: "https://www.linkedin.com/in/suyog-chaudhari-5b95021b9/" },
			],
			Spons: [
				{ index: "7", Name: "Sai Nandan", "Committee": "Sponsorship", Roll: "2001CB46", Path: require('@/assets/images/Team_Image/7.jpg'), Linkedin: "https://www.linkedin.com/in/sai-nandan-panigrahy/" },
				{ index: "8", Name: "Athul Krishna K", "Committee": "Sponsorship", Roll: "2001ME85", Path: require('@/assets/images/Team_Image/8.jpg'), Linkedin: "https://www.linkedin.com/in/athul-krishna-k-688262223/" },
				{ index: "14", Name: "Rohit Sinha", "Committee": "Sponsorship", Roll: "2001MM26", Path: require('@/assets/images/Team_Image/14.jpg'), Linkedin: "https://www.linkedin.com/in/rohit-sinha-1282a821b/" },
			],
			Prod: [
				{ index: "9", Name: "Devna Srivastava", "Committee": "Prod", Roll: "2001MM13", Path: require('@/assets/images/Team_Image/9.jpg'), Linkedin: "https://www.linkedin.com/in/devna-srivastava-58040621a/" },
			],
			Registration: [
				{ index: "10", Name: "Abhinav Mishra", "Committee": "Registration", Roll: "2001MM01", Path: require('@/assets/images/Team_Image/10.jpg'), Linkedin: "https://www.linkedin.com/in/abhinav2901/" },
				{ index: "11", Name: "M.L.N. Keertana", "Committee": "Registration", Roll: "2001CS47", Path: require('@/assets/images/Team_Image/11.jpg'), Linkedin: "https://www.linkedin.com/in/mln-keertana-5aab50217/" },
			],
			Editorial: [
				{ index: "12", Name: "Khushi Shah", "Committee": "Editorial", Roll: "2001EE91", Path: require('@/assets/images/Team_Image/12.jpg'), Linkedin: "https://www.linkedin.com/in/khushishah8221/" },
			],
			MPR: [
				{ index: "13", Name: "Hardik Tiwari", "Committee": "MPR", Roll: "2001MM15", Path: require('@/assets/images/Team_Image/13.jpg'), Linkedin: "https://www.linkedin.com/in/hardiktiwari/" },
				{ index: "15", Name: "Aarav Arya", "Committee": "MPR", Roll: "2001ME01", Path: require('@/assets/images/Team_Image/15.jpg'), Linkedin: "https://www.linkedin.com/in/aarav-arya-b80909239/" }
			],
			PnC: [
				{ index: "6", Name: "Pradipti Mondal", "Committee": "PnC", Roll: "2001EE44", Path: require('@/assets/images/Team_Image/6.jpg'), Linkedin: "https://www.linkedin.com/in/pradipti-mondal-3146ac/" },
				{ index: "16", Name: "Ashfaq Ahmed", "Committee": "PnC", Roll: "2001EE44", Path: require('@/assets/images/Team_Image/16.jpg'), Linkedin: "https://www.linkedin.com/in/ashfaq-iitp/" },
			],
			Hosp: [
				{ index: "5", Name: "Vani Grover", "Committee": "Hospitality", Roll: "2001CE68", Path: require('@/assets/images/Team_Image/5.jpg'), Linkedin: "https://www.linkedin.com/in/vani-grover-77078a207/" },
			],
			CnD: [
				{ index: "17", Name: "Farhaan Alam", "Committee": "CnD", Roll: "2001ME25", Path: require('@/assets/images/Team_Image/17.jpg'), Linkedin: "https://www.linkedin.com/in/farhaan-alam/" },

			],
			screen: screen.width,
		}
	},
	components: {
		Nav,
		BackButton,
		Footer,
	},
	mounted() {
		window.onscroll = function () {
			// console.log(screen.height);
			console.log(window.pageYOffset);
			var redbox = document.getElementById('about_bg');
			// var redbox_text = document.getElementById('redbox_text');
			var redbox1 = document.getElementById('team_bg');
			// var redbox_text1 = document.getElementById('redbox_text1');
			if (window.pageYOffset > 1320) {
				redbox.classList.add("none");
				// redbox_text.classList.remove("removed-none");
				redbox1.classList.remove("none");
				// redbox_text1.classList.add("removed-none");
			} else {
				redbox.classList.remove("none");
				// redbox_text.classList.add("removed-none");
				redbox1.classList.add("none");
				// redbox_text1.classList.remove("removed-none");
			}
		}
	},
	methods: {
		myFunction() {
			var dots = document.getElementById("dots");
			var moreText = document.getElementById("more");
			var btnText = document.getElementById("myBtn");

			if (dots.style.display === "none") {
				dots.style.display = "inline";
				btnText.innerHTML = "EXPAND <i class='fa-solid fa-chevron-down'></i>";
				moreText.style.display = "none";
			} else {
				dots.style.display = "none";
				btnText.innerHTML = "COLLAPSE <i class='fa-solid fa-chevron-up'></i>";
				moreText.style.display = "inline";
			}
		},
		myFunction2() {
			var dots = document.getElementById("dots2");
			var moreText = document.getElementById("more2");
			var btnText = document.getElementById("myBtn2");

			if (dots.style.display === "none") {
				dots.style.display = "inline";
				btnText.innerHTML = "EXPAND <i class='fa-solid fa-chevron-down'></i>";
				moreText.style.display = "none";
			} else {
				dots.style.display = "none";
				btnText.innerHTML = "COLLAPSE <i class='fa-solid fa-chevron-up'></i>";
				moreText.style.display = "inline";
			}
		}
	}

}
</script>

<style scoped>
@import '@/assets/css/about.mobile.css';
</style>