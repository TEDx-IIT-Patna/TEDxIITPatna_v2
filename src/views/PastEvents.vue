<template>

	<div class="pastevents">

		<section class="tab-group">
			<!-- <img class="pastimgs" v-bind:src="illustrations[0]" alt=""> -->
			<div class="text"><h1>Past Events.</h1></div>
			<div class="container">
				<div class="row">
					<div class="col">
				<div class="card tab-element-box"></div>
				<router-link to="/past_events/2021" style="width: 15rem;">
					<div class="card bg-dark" style="width: 15rem;">
						<img src="../assets/pastevents/illustrations/theme21icon.png" class="card-img-top" alt="...">
					</div>
				</router-link>
				</div>

				<div class="col">
				<div class="card tab-element-box"></div>
				<router-link to="/past_events/2019">
					<div class="card bg-dark" style="width: 15rem;">
						<img src="../assets/pastevents/illustrations/theme2019icon.png" class="card-img-top" alt="...">
					</div>
				</router-link>
				</div>

				<div class="col">
				<div class="card tab-element-box"></div>
				<router-link to="/past_events/2016">
					<div class="card bg-dark" style="width: 15rem;">
						<img src="../assets/pastevents/illustrations/theme16icon.png" class="card-img-top" alt="...">
					</div>
				</router-link>
				</div>
				</div>
			</div>
		</section>



	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'PastEvents',
}
</script>

<style scoped>
.pastevents {
	color: aliceblue;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	height: 100vh;
}

.tab-group {
	height: 110vh;
	max-width: 100vw;
	padding-left: 30%;
	background-image: url("https://drive.google.com/uc?export=view&id=1U_zgI8G7nyiRKvgVPBUU4OJV8O8cSY0m");

}

.tab-element-box {
	width: 15rem;
	height: 15rem;
	transform: translate(10px, 250px);
	background-color: #410c14;
}

.text {
	width: 30vw;
	transform: translate(0px, 200px);
	
}
h1
{
	font-size: 70px;
}
.eventyears {
	min-height: 100vh;
}

.back {
	background-color: transparent;
	left: 0%;
}
</style>