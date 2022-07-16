<template>
    <section class="nav_section">
			<Nav :open_button_color="this.showWebView ? 'white' : 'black'" open_button_style="text" />
			<BackButton />
		</section>
		<section class="top_text">
			<div class="team_text">
				<h1>Team</h1>
			</div>
		</section>


		<section class="faculty_card">
			<div class="red_box1">
				<h1 class="faculty">Prof. InCharge</h1>
			</div>
			<div class="container container2">
				<div class="row vh-100 d-flex justify-content-center align-items-center">
					<div class="col-lg-4 col-12 my-3 card-container">
						<img src="../assets/images/Team_Image/prof.png" class="card-img-top" alt="...">
						<div class="card-body hoverbox">
							<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
							<div class="box-desc">
								<h5>Dr. Sujoy Kumar Samanta</h5>
								<p>PIC: Cultural & Technical Affairs</p>
							</div>
							<ul class="social">
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-facebook-f"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-instagram"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>

					</div>
				</div>
			</div>
		</section>

		<section class="faculty_card">
			<div class="red_box2">
				<h1 class="faculty">Organizers</h1>
			</div>
			<div class="container container2">
				<div class="row vh-100 d-flex justify-content-center align-items-center">
					<div class="col-lg-4 col-12 my-3 card-container" v-for="person in Organisers" :key="person.index">
						<img :src="person.Path" class="card-img-top" alt="...">
						<div class="card-body hoverbox">
							<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
							<div class="box-desc">
								<h5>{{ person.Name }}</h5>
								<p> {{ person.Committee }}</p>
							</div>
							<ul class="social">
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-facebook-f"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-instagram"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a :href="person.Linkedin"><i
											class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="faculty_card">
			<div class="red_box1">
				<h1 class="faculty">Planning and Curation</h1>
			</div>
			<div class="container container2">
				<div class="row vh-100 d-flex justify-content-center align-items-center">
					<div class="col-lg-4 col-12 my-3 card-container" v-for="person in PnC" :key="person.index">
						<img :src="person.Path" class="card-img-top" alt="...">
						<div class="card-body hoverbox">
							<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
							<div class="box-desc">
								<h5>{{ person.Name }}</h5>
								<p> {{ person.Committee }}</p>
							</div>
							<ul class="social">
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-facebook-f"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-instagram"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a :href="person.Linkedin"><i
											class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="faculty_card">
			<div class="red_box2">
				<h1 class="faculty">Hospitality</h1>
			</div>
			<div class="container container2">
				<div class="row vh-100 d-flex justify-content-center align-items-center">
					<div class="col-lg-4 col-12 my-3 card-container" v-for="person in Hosp" :key="person.index">
						<img :src="person.Path" class="card-img-top" alt="...">
						<div class="card-body hoverbox">
							<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
							<div class="box-desc">
								<h5>{{ person.Name }}</h5>
								<p> {{ person.Committee }}</p>
							</div>
							<ul class="social">
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-facebook-f"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-instagram"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a :href="person.Linkedin"><i
											class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="faculty_card">
			<div class="red_box1">
				<h1 class="faculty">WebnApp</h1>
			</div>
			<div class="container container2">
				<div class="row vh-100 d-flex justify-content-center align-items-center">
					<div class="col-lg-4 col-12 my-3 card-container" v-for="person in Webnapp" :key="person.index">
						<img :src="person.Path" class="card-img-top" alt="...">
						<div class="card-body hoverbox">
							<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
							<div class="box-desc">
								<h5>{{ person.Name }}</h5>
								<p> {{ person.Committee }}</p>
							</div>
							<ul class="social">
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-facebook-f"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-instagram"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a :href="person.Linkedin"><i
											class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="faculty_card">
			<div class="red_box2">
				<h1 class="faculty">Media and Public Relations</h1>
			</div>
			<div class="container container2">
				<div class="row vh-100 d-flex justify-content-center align-items-center">
					<div class="col-lg-4 col-12 my-3 card-container" v-for="person in MPR" :key="person.index">
						<img :src="person.Path" class="card-img-top" alt="...">
						<div class="card-body hoverbox">
							<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
							<div class="box-desc">
								<h5>{{ person.Name }}</h5>
								<p> {{ person.Committee }}</p>
							</div>
							<ul class="social">
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-facebook-f"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-instagram"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a :href="person.Linkedin"><i
											class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="faculty_card">
			<div class="red_box1">
				<h1 class="faculty">Editorial</h1>
			</div>
			<div class="container container2">
				<div class="row vh-100 d-flex justify-content-center align-items-center">
					<div class="col-lg-4 col-12 my-3 card-container" v-for="person in Editorial" :key="person.index">
						<img :src="person.Path" class="card-img-top" alt="...">
						<div class="card-body hoverbox">
							<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
							<div class="box-desc">
								<h5>{{ person.Name }}</h5>
								<p> {{ person.Committee }}</p>
							</div>
							<ul class="social">
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-facebook-f"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-instagram"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a :href="person.Linkedin"><i
											class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="faculty_card">
			<div class="red_box2">
				<h1 class="faculty">Registration</h1>
			</div>
			<div class="container container2">
				<div class="row vh-100 d-flex justify-content-center align-items-center" style="width: 63vw;">
					<div class="col-lg-4 col-12 my-3 card-container" v-for="person in Registration" :key="person.index">
						<img :src="person.Path" class="card-img-top" alt="...">
						<div class="card-body hoverbox">
							<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
							<div class="box-desc">
								<h5>{{ person.Name }}</h5>
								<p> {{ person.Committee }}</p>
							</div>
							<ul class="social">
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-facebook-f"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-instagram"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a :href="person.Linkedin"><i
											class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="faculty_card">
			<div class="red_box1">
				<h1 class="faculty">Production</h1>
			</div>
			<div class="container container2">
				<div class="row vh-100 d-flex justify-content-center align-items-center">
					<div class="col-lg-4 col-12 my-3 card-container" v-for="person in Prod" :key="person.index">
						<img :src="person.Path" class="card-img-top" alt="...">
						<div class="card-body hoverbox">
							<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
							<div class="box-desc">
								<h5>{{ person.Name }}</h5>
								<p> {{ person.Committee }}</p>
							</div>
							<ul class="social">
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-facebook-f"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-instagram"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a :href="person.Linkedin"><i
											class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="faculty_card">
			<div class="red_box2">
				<h1 class="faculty">Creative and Designing</h1>
			</div>
			<div class="container container2">
				<div class="row vh-100 d-flex justify-content-center align-items-center" style="width: 63vw;">
					<div class="col-lg-4 col-12 my-3 card-container" v-for="person in CnD" :key="person.index">
						<img :src="person.Path" class="card-img-top" alt="...">
						<div class="card-body hoverbox">
							<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
							<div class="box-desc">
								<h5>{{ person.Name }}</h5>
								<p> {{ person.Committee }}</p>
							</div>
							<ul class="social">
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-facebook-f"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-instagram"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a :href="person.Linkedin"><i
											class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="faculty_card">
			<div class="red_box1">
				<h1 class="faculty">Sponsor<br/>ship</h1>
			</div>
			<div class="container container2">
				<div class="row vh-100 d-flex justify-content-center align-items-center"
					style="width: 60vw;float: right;margin-left: -20vw;">
					<div class="col-lg-4 col-12 my-3 card-container" v-for="person in Spons" :key="person.index">
						<img :src="person.Path" class="card-img-top" alt="...">
						<div class="card-body hoverbox">
							<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
							<div class="box-desc">
								<h5>{{ person.Name }}</h5>
								<p> {{ person.Committee }}</p>
							</div>
							<ul class="social">
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-facebook-f"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a href="#"><i
											class="fab fa-instagram"></i></a></li>
								<li class="mx-1" style="text-align: center;"><a :href="person.Linkedin"><i
											class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<div class="footer_class">
		<Footer />
	</div>
</template>

<script scoped>
import Nav from '@/components/Nav.vue'
import BackButton from '@/components/BackButton.vue'
import Footer from '@/components/Footer.vue'
export default {
	name: 'teamweb',
	data() {
		return {
			
			Organisers: [
				{ index: "1", Name: "Palak Totala", "Committee": "Organiser", Roll: "2001CS84", Path: require('@/assets/images/Team_Image/1.jpg'), Linkedin: "https://www.linkedin.com/in/palak-totala-510875203/" },
				{ index: "2", Name: "Nischal Jain", "Committee": "Co-organiser", Roll: "2001ME41", Path: require('@/assets/images/Team_Image/2.jpg'), Linkedin: "https://www.linkedin.com/in/nischal-jain-4ab036195/" },
			],
			Webnapp: [
				{ index: "3", Name: "Pratyush Kumar", "Committee": "WebnApp", Roll: "2001ME51", Path: require('@/assets/images/Team_Image/3.jpg'), Linkedin: "https://www.linkedin.com/in/pratyushkumar1032/" },
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
	}
}
</script>

<style scoped>
@import '@/assets/css/about.css';
</style>