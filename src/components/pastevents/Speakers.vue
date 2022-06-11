<template>
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
                        <div class="col" v-for="n in num">
                        <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div class="card tab-element-box"></div>
                            <div class="card speaker-card" style="width: 15rem;">
                                <div><img class="pastimg" v-bind:src="images[n]"></div>
                            </div>
                        </div>
                        <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="color: black;">
        Text
      </div>
      
    </div>
  </div>
</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <div class="row">
                        <div class="col" v-for="n in num">
                            <div class="card tab-element-box"></div>
                            <div class="card speaker-card" style="width: 15rem;">
                                <div><img class="pastimg" v-bind:src="images[n]"></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Speakers',
    data() {
        return {
            num: [0, 1, 2],
            images: ["https://drive.google.com/uc?export=view&id=1aPsCWBi1ycGgRxzvczpcYb9-3YhcvMxE",
                "https://drive.google.com/uc?export=view&id=1aPsCWBi1ycGgRxzvczpcYb9-3YhcvMxE", "https://drive.google.com/uc?export=view&id=1aPsCWBi1ycGgRxzvczpcYb9-3YhcvMxE"
            ]
        }
    }

}
</script>

<style scoped>
.tab-group {
    height: 110vh;
    max-width: 100vw;
    background-image: url("https://drive.google.com/uc?export=view&id=1U_zgI8G7nyiRKvgVPBUU4OJV8O8cSY0m");

}

.tab-element-box {
    width: 15rem;
    height: 15rem;
    transform: translate(10px, 250px);
    background-color: #410c14;
}

.speaker-card {
    background-color: black;
}

.speaker-card:hover {
    background-color: #fff;
}

.pastimg {
    width: 15rem;
}
</style>