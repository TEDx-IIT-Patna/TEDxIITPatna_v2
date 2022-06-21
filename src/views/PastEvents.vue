<template>

	<div class="pastevents">
		<Nav />
		<section class="tab-group">
			<!-- <img class="pastimgs" v-bind:src="illustrations[0]" alt=""> -->
			<div class="text">
				<h1 class="main-head" ><span class="highlight">P</span>ast Events.</h1>
			</div>
			<div class="container theme-group">
				<div class="row">
					<div class="col-md">
						<div class="card tab-element-box"></div>
						<router-link to="/past_events/2021">
							<div class="card bg-dark theme">
								<img src="../assets/pastevents/illustrations/theme21icon.png" class="card-img-top"
									alt="...">
							</div>

						</router-link>
					</div>

					<div class="col-md col23">
						<div class="card tab-element-box"></div>
						<router-link to="/past_events/2019">
							<div class="card bg-dark theme">
								<img src="../assets/pastevents/illustrations/theme2019icon.png" class="card-img-top"
									alt="...">
							</div>
						</router-link>
					</div>

					<div class="col-md col23">
						<div class="card tab-element-box"></div>
						<router-link to="/past_events/2016">
							<div class="card bg-dark theme">
								<img src="../assets/pastevents/illustrations/theme16icon.png" class="card-img-top"
									alt="...">
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</section>



	</div>
</template>

<script>
import Nav from '@/components/Nav.vue';
// @ is an alias to /src

export default {
	name: "PastEvents",
	components: { Nav },
	mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
}
}
</script>

<style scoped>
.pastevents {
	color: white;
	font-family: GothamMedium;
	height: 100vh;
}
.main-head
{
	padding-left: 20%;
}
.tab-group {
	height: 768px;
	max-width: 100vw;
	/* background-image: url("https://drive.google.com/uc?export=view&id=1zv7nWao1g5nDkSRThT4SOOTDqkK_KJ8p"); */
	background-image: url("https://drive.google.com/uc?export=view&id=1VnCqBNliFLv74ipW9ElyASII-Pe4fCJA");
}

.tab-element-box {
	width: 15rem;
	height: 15rem;
	transform: translate(10px, 250px);
	background-color: #410c14;
}

.text {
	width: 40vw;
	transform: translate(0px, 200px);

}

h1 {
	font-size: 70px;
}

.theme {
	width: 15rem;
}
.col23
{
	margin-left: -25%;
}
@media screen and (max-width: 600px) {

.main-head
{
	padding-left: 0%;
}
.col23
{
	margin-left: 0%;
}
	.tab-group {
		padding-left: 0%;
		height: 1000px;
		background-image: url("https://drive.google.com/uc?export=view&id=1BQyUsZ2lKhBA5rCR-qi6Ts5Zx1G9iqd0");
	}

	.theme-group {
		padding-top: 40%;

	}

	.text {
		padding-left: 10%;
		width: 100vw;
		transform: translate(0px, 100px);
		text-align: left;
	}

	h1 {
		font-size: 60px;
	}

	.highlight {
		color: black;
	}

	.tab-element-box {
		display: none;
	}

	.theme {
		width: 10rem;
		margin-bottom: 10%;
	}
}

@media screen and (min-width: 600px) and (max-width:1120px) {
	.tab-group {
		padding-left: 0%;
		height: 1500px;
		background-image: url("https://drive.google.com/uc?export=view&id=1o_ojNB-eXg36TjNn9mwYlB6PjUkPdRX6");
	}
.main-head
{
	padding-left: 0%;
}
.col23{
	margin-left: 0;
}
}
</style>