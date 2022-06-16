<template>
  <div class="navbody">
    <section>
      <div class="nav-body">
          <div class="nav-link-right">
          <a class="nav-link-rgt" href="#">CLOSE</a>
          </div>
        <div class="nav-link-left-up">
          <a class="nav-link" href="#">SPEAKERS</a>
        </div>

        <a class="nav-link" href="#">PAST EVENTS</a>
        <a class="nav-link" href="#">PARTNERS</a>
        <a class="nav-link" href="#">ABOUT</a>
      </div>
    </section>
    <section>
      <div class="nav-img">
        <img src="../assets/navpicture.png" class="card-img" alt="...">
      </div>
    </section>
  </div>
</template>
<style>
.navbody {
  padding: 0px;
  margin-left: 1060px;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 305px;
  height: 560px;
  border-radius: 20px;
}

.nav-body {
  background-color: #000000;
  color: white;
  text-align: center;
}

.nav-link-left-up {
  padding-top: 10px;
}

.nav-link {
  color: white;
  text-align: left;
  padding-left: 40px;
  padding-bottom: 10px;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  font-family: 'Gotham SSm A', 'Gotham SSm B', Helvetica, sans-serif;
}
.nav-link-rgt {
  color: white;
  padding-right: 30px;
  text-decoration: none;
   font-size: 10px;
  font-weight: 700;
  font-style: normal;
  font-family: 'Gotham SSm A', 'Gotham SSm B', Helvetica, sans-serif;
}

.nav-link-right {
  color: white;
  text-align: right;
  padding-left: 180px;
  padding-top: 20px;
}

.nav-link:hover {
  color: red;
}
.nav-link-rgt:hover {
  color: red;
}
</style>