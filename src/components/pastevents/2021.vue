<template>
  <div class="e2021 container-fluid">
    <div class="container">
      <div class=" text">
   
    <router-link to="/past_events"><button class="btn btn-danger back"> Go Back </button></router-link> 
<h1>
          ROAR | 2021
        </h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum. Exercitationem nobis doloribus
        consequatur ducimus labore quo voluptas nam error neque tempora corporis aut, qui, omnis minus facere excepturi
        totam.
      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: '2021',
  data() {
    return {
      illustrations: ["https://drive.google.com/uc?export=view&id=1xouLV0haUBa0AKCS4jp4W2t4y1LJx5rW"]
    }
  }

}
</script>

<style scoped>
.e2021 {
  background-image: url("https://drive.google.com/uc?export=view&id=1ZrmLIf0YGcE4i0P7p-iknJLw6K7Ty_Cr");
  color: aliceblue;
}


.text {
  height: 110vh;
  width: 60vw;
  padding-top: 40vh;
  padding-left: 5vw;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: left;
}

h1 {
  font-size: 40px;
  margin-bottom: 3vh;
}
.back
{
  margin-bottom: 10px;
}
</style>