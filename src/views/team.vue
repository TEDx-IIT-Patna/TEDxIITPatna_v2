<template>
    <section class="main" v-if="screen > 1000">
    <section class="section1">
      <section class="navbar_mobile" >
      <!-- <nav>
        <router-link to="/nav-panel">Navigation Panel</router-link>
      </nav> -->
      <nav class="navbar_team">
      <Nav />
      </nav>
      <router-view/>
      </section>
      <div class="top-container">
        <span class="top_teams">Teams</span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="photo_gallery">


              <section class="first_row">
                <div class="row">
                  <div class="row-1 image1_img">
                    <img class="row1_photo image1" src="../assets/prof.png" alt="" />
                    <!-- <div class="image1_text">Dr Sujoy</div> -->
                    <div class="image1_text">
                      Sujoy Kumar Samanta<br />
                      Professor InCharge <br />
                      <br />
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                        class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </section>


              <section class="second_row">
                <div class="row2_main">
                  <div class="row-2 image2_img image3_img">
                    <img class="row2_photo image2" src="../assets/Palak_Organiser.jpg" alt="Deepshikha (1).jpeg" />
                    <div class="image2_text">
                      Palak Totala<br />
                      Organiser <br />
                      <br />
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </div>

                    <img class="row2_photo image3" src="../assets/Nischal_coorg.jpg" alt="Deepshikha (1).jpeg" />
                    <div class="image3_text">
                      Nischal Jain<br />
                      Co-organisers <br />
                      <br />
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>


          <div class="col-6">
            <div class="redbox">
              <span class="redbox_text">Faculty</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-container1">
        <span class="bottom_number1">1.8</span>
      </div>
    </section>


    <section class="section2 section2a">
      <div class="top-container2">
        <span class="top_teams">Teams</span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="photo_gallery">

              <div class="row-3 image4_img">
                <div class="col d-flex justify-content-center">
                  <img class="row3_photo image1" src="../assets/Aarav_mpr.jpg" alt="" />
                  <div class="image4_text img_text">
                    Aarav Arya<br />
                    MPR <br />
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                      class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="row-4 image5_img image6_img">
                <img class="row4_photo image2" src="../assets/pratyush_webnapp.jpg" alt="Deepshikha (1).jpeg" />
                <div class="image5_text img_text">
                  Pratyush Kumar<br />
                  WebnApp <br />
                  <br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <img class="row4_photo image3" src="../assets/Suyog_webnapp.jpg" alt="Deepshikha (1).jpeg" />
                <div class="image6_text img_text">
                  Suyog Vinod Chaudhari<br />
                  WebnApp <br />
                  <br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
              </div>

              <div class="row-5 image7_img image8_img image9_img">
                <img class="row5_photo image4" src="../assets/Abhinav_Registration.jpeg" alt="Deepshikha (1).jpeg" />
                <div class="image7_text img_text">
                  Abhinav Mishra<br />
                  Regisrtation<br />
                  <br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <img class="row5_photo image5" src="../assets/Athul_Spons.jpg" alt="Deepshikha (1).jpeg" />
                <div class="image8_text img_text">
                  Athul Krishna K<br />
                  Spons<br />
                  <br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <img class="row5_photo image6" src="../assets/Devna_Production.jpg" alt="Deepshikha (1).jpeg" />
                <div class="image9_text img_text">
                  Devna Srivastava<br />
                  Prod<br />
                  <br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>


          <div class="col-6 d-flex justify-content-center align-item-center sec_2_rhs">
            <div class="redbox2">
              <span class="redbox_text2">Organising Committee</span>
              <span class="coordinators">Coordinators</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-container2">
        <span class="bottom_number2">2.8</span>
      </div>
    </section>





    <section class="section2 section3">
      <!--<div class="top-container2">
        <span class="top_teams">Teams</span>
      </div>-->
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="photo_gallery photo_gallery2">

              <div class="row-5 row-5a image7_img image8_img image9_img" id="row-5">
                <img class="row5_photo image4" src="../assets/Rohit_Sponsorship.jpg" alt="Deepshikha (1).jpeg" />
                <div class="image7_text img_text">
                  Rohit Sinha<br />
                  Spons<br />
                  <br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <img class="row5_photo image5" src="../assets/Sai_Spons.png" alt="Deepshikha (1).jpeg" />
                <div class="image8_text img_text">
                  Sai Nandan<br />
                  Spons<br />
                  <br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <img class="row5_photo image6" src="../assets/Vani_Hospitality.jpg" alt="Deepshikha (1).jpeg" />
                <div class="image9_text img_text">
                  Vani Grover<br />
                  Hospitality<br />
                  <br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
              </div>

              <div class="row-4 row-4a image5_img image6_img" id="row-6">
                <img class="row4_photo image2" src="../assets/Khushi_Editorial_.jpg" alt="Deepshikha (1).jpeg" />
                <div class="image5_text img_text">
                  Khushi Shah<br />
                  Editorial <br />
                  <br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <img class="row4_photo image3" src="../assets/Pradipti_PnC.jpg" alt="Deepshikha (1).jpeg" />
                <div class="image6_text img_text">
                  Pradipti Mondal<br />
                  PnC<br />
                  <br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
              </div>

              <div class="row-3 row-3a image4_img" id="row-7">
                <div class="col d-flex justify-content-center">
                  <img class="row3_photo image1" src="../assets/Keertana_Registration.jpg" alt="" />
                  <div class="image4_text img_text">
                    M.L.N. Keertana<br />
                    Regisrtation<br />
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                      class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-container2">
        <span class="bottom_number2">2.8</span>
      </div>
    </section>
    <section class="footer_section">
      <footerVue />
    </section>
  </section>
  <section class="main2" v-else-if="screen < 1000">
    <team_mobile />
  </section>
</template>

<script>
/* eslint-disable */
import gsap from "gsap";
import { TweenMax, TimelineMax } from "gsap";
// import ScrollMagic from "scrollmagic";
import team_mobile from "@/components/team_mobile.vue";
import Nav from '@/components/navbarpanel.vue';
import footerVue from '@/components/footer.vue';
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
export default {
  name: "team",
  components: { team_mobile, Nav, footerVue },
  data() {
    return {
      screen: screen.width,
    };
  },
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

    var controller = new ScrollMagic.Controller();
    var tl = new gsap.timeline();
    tl.fromTo(
      ".bottom-container1",
      1.5,
      { opacity: 1 },
      { opacity: 0, ease: Linear.easeNone },
      0
    );
    tl.fromTo(
      ".row-1",
      1.5,
      { opacity: 1 },
      { opacity: 0, ease: Linear.easeNone },
      0
    );
    tl.fromTo(
      ".row-2",
      1.5,
      { opacity: 1 },
      { opacity: 0, ease: Linear.easeNone },
      0
    );
    tl.fromTo(
      ".row-3",
      1.5,
      { opacity: 0 },
      { opacity: 1, ease: Linear.easeNone },
      0
    );
    tl.fromTo(
      ".row-4",
      1.5,
      { opacity: 0 },
      { opacity: 1, ease: Linear.easeNone },
      0
    );
    tl.fromTo(
      ".row-5",
      1.5,
      { opacity: 0 },
      { opacity: 1, ease: Linear.easeNone },
      0
    );

    var tl2 = new gsap.timeline();
    tl.fromTo(
      ".redbox_text",
      1.5,
      { opacity: 1 },
      { opacity: 0, ease: Linear.easeNone },
      0
    );
    tl.fromTo(
      ".redbox_text2",
      1.5,
      { opacity: 0 },
      { opacity: 1, ease: Linear.easeNone },
      0
    );

    tl2.fromTo(
      ".bottom-container2",
      1.5,
      { opacity: 0 },
      { opacity: 1, ease: Linear.easeNone },
      1
    );
    var tl3 = new gsap.timeline();
    tl2.fromTo(
      ".row-4a",
      1.5,
      { opacity: 0 },
      { opacity: 1, ease: Linear.easeNone },
      0
    );
    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".top-container",
      triggerHook: "onLeave",
      duration: "100%",
    })
      .setPin("")
      .setTween(tl)
      // .addIndicators({
      //   colorTrigger: "blue",
      //   colorStart: "blue",
      //   colorEnd: "blue",
      //   indent: 40,
      // })
      .addTo(controller);
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".top-container2",
      triggerHook: "onStart",
      duration: "100%",
    })
      .setPin(".bottom-number2")
      .setTween(tl2)
      // .addIndicators({
      //   colorTrigger: "blue",
      //   colorStart: "blue",
      //   colorEnd: "blue",
      //   indent: 40,
      // })
      .addTo(controller);
    var scene3 = new ScrollMagic.Scene({
      triggerElement: ".redbox_text2",
      triggerHook: "onLeave",
      duration: "200%",
      offset: -50,
    })

      .setTween(tl3)
      // .addIndicators({
      //   colorTrigger: "blue",
      //   colorStart: "blue",
      //   colorEnd: "blue",
      //   indent: 40,
      // });
  },
};
window.addEventListener('scroll', () => {

  let scrollY = window.scrollY
  console.log(scrollY);
  let bottomHeight = window.innerHeight
  document.getElementById("row-5").style.opacity = (window.scrollY / 1570)
  document.getElementById("row-6").style.opacity = (window.scrollY / 1570)
  document.getElementById("row-7").style.opacity = (window.scrollY / 1570)
  // if(scrollY / bottomHeight <=1570
  //   document.getElementById("row-5").style.opacity = 1 - ( scrollY / bottomHeight )
  // }
})
</script>

<style scoped src="../assets/style/style_team.css"></style>