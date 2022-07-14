<template>
    <div class="container">
		<div class="row vh-100" >
			<div class="col-6 col-sm-6 col-md-4 col-lg-3 my-3" v-for="person in team_members" :key="person.index">
				<div class="box shadow-sm p-4">
					<div class="image-wrapper mb-3">
						<img class="img-fluid" :src="person.Path" alt="..." />
					</div>
					<div class="box-desc">
						<h5>{{person.Name}}</h5>
						<p>Committee: {{person.Committee}}</p>
					</div>
					<ul class="social">
						<li class="mx-1"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
						<li class="mx-1"><a href="#"><i class="fab fa-instagram"></i></a></li>
						<li class="mx-1"><a :href="person.Linkedin"><i class="fab fa-linkedin"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>


<script scoped>
import team_members from '../assets/json/team.json';
export default {
    name: 'team',
    data() {
        return {
            team_members: [
    {index: "1",Name:  	"Palak Totala",	"Committee": 	"Organiser",	Roll: 	"2001CS84",	Path:	require('@/assets/images/Team_Image/1.jpg'),	Linkedin:	"https://www.linkedin.com/in/palak-totala-510875203/"},
    {index: "2",Name:  	"Nischal Jain",	"Committee": 	"Co-organiser",	Roll: 	"2001ME41",	Path:	require('@/assets/images/Team_Image/2.jpg'),	Linkedin:	"https://www.linkedin.com/in/nischal-jain-4ab036195/"},
    {index: "3",Name:  	"Pratyush Kumar",	"Committee": 	"WebnApp",	Roll: 	"2001ME51",	Path:	require('@/assets/images/Team_Image/3.jpg'),	Linkedin:	"https://www.linkedin.com/in/pratyushkumar1032/"},
    {index: "4",Name:  	"Suyog Vinod Chaudhari",	"Committee": 	"WebnApp",	Roll: 	"2001EE77",	Path:	require('@/assets/images/Team_Image/4.jpg'),	Linkedin:	"https://www.linkedin.com/in/suyog-chaudhari-5b95021b9/"},
    {index: "5",Name:  	"Vani Grover",	"Committee": 	"Hospitality",	Roll: 	"2001CE68",	Path:	require('@/assets/images/Team_Image/5.jpg'),	Linkedin:	"https://www.linkedin.com/in/vani-grover-77078a207/"},
    {index: "6",Name:  	"Pradipti Mondal",	"Committee": 	"PnC",	Roll: 	"2001EE44",	Path:	require('@/assets/images/Team_Image/6.jpg'),	Linkedin:	"https://www.linkedin.com/in/pradipti-mondal-3146ac/"},
    {index: "7",Name:  	"Sai Nandan",	"Committee": 	"Spons",	Roll: 	"2001CB46",	Path:	require('@/assets/images/Team_Image/7.jpg'),	Linkedin:	"https://www.linkedin.com/in/sai-nandan-panigrahy/"},
    {index: "8",Name:  	"Athul Krishna K",	"Committee": 	"Spons",	Roll: 	"2001ME85",	Path:	require('@/assets/images/Team_Image/8.jpg'),	Linkedin:	"https://www.linkedin.com/in/athul-krishna-k-688262223/"},
    {index: "9",Name:  	"Devna Srivastava",	"Committee": 	"Prod",	Roll: 	"2001MM13",	Path:	require('@/assets/images/Team_Image/9.jpg'),	Linkedin:	"https://www.linkedin.com/in/devna-srivastava-58040621a/"},
    {index: "10",Name:  	"Abhinav Mishra",	"Committee": 	"Registration",	Roll: 	"2001MM01",	Path:	require('@/assets/images/Team_Image/10.jpg'),	Linkedin:	"https://www.linkedin.com/in/abhinav2901/"},
    {index: "11",Name:  	"M.L.N. Keertana",	"Committee": 	"Registration",	Roll: 	"2001CS47",	Path:	require('@/assets/images/Team_Image/11.jpg'),	Linkedin:	"https://www.linkedin.com/in/mln-keertana-5aab50217/"},
    {index: "12",Name:  	"Khushi Shah",	"Committee": 	"Editorial",	Roll: 	"2001EE91",	Path:	require('@/assets/images/Team_Image/12.jpg'),	Linkedin:	"https://www.linkedin.com/in/khushishah8221/"},
    {index: "13",Name:  	"Hardik Tiwari",	"Committee": 	"MPR",	Roll: 	"2001MM15",	Path:	require('@/assets/images/Team_Image/13.jpg'),	Linkedin:	"https://www.linkedin.com/in/hardiktiwari/"},
    {index: "14",Name:  	"Rohit Sinha",	"Committee": 	"Spons",	Roll: 	"2001MM26",	Path:	require('@/assets/images/Team_Image/14.jpg'),	Linkedin:	"https://www.linkedin.com/in/rohit-sinha-1282a821b/"},
    {index: "15",Name:  	"Aarav Arya",	"Committee": 	"MPR",	Roll: 	"2001ME01",	Path:	require('@/assets/images/Team_Image/15.jpg'),	Linkedin:	"https://www.linkedin.com/in/aarav-arya-b80909239/"}
    ]
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
    @import '@/assets/css/team.css';
</style>