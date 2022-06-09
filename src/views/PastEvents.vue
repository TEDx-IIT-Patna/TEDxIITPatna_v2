<template>

  <div class="pastevents">
	  
	  <section class="tab-group">
<!-- <img class="pastimgs" v-bind:src="illustrations[0]" alt=""> -->

<router-link to="/past_events/2021"><button class="btn btn-danger"> 2021 </button></router-link> 
<router-link to="/past_events/2019"><button class="btn btn-danger"> 2019 </button></router-link> 
<router-link to="/past_events/2016"><button class="btn btn-danger"> 2016 </button></router-link> 
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
.pastevents
{
	background-color: black;
	color:aliceblue;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	height:100vh;
}
.tab-group
{
	height: 110vh;
	max-width:100vw;
	padding-top: 30vh;
	padding-left: -5vw;
	background-image: url("https://drive.google.com/uc?export=view&id=1U_zgI8G7nyiRKvgVPBUU4OJV8O8cSY0m");
  
}

.tab-element
{
	width:300px;
	height:300px;
	margin-left: 1vw;
}
.pastimgs
{
	width:30vw;
}
.eventyears
{
	min-height: 100vh;
}
.back
{
	background-color: transparent;
	left: 0%;
}

</style>