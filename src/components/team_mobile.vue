<template>
  <section>
    <nav>
        <router-link to="/nav-mob-panel"><span class="nav_span">Navigation Panel</span></router-link>
      </nav>
      <!-- <nav class="navbar_team">
      <Nav />
      </nav> -->
      <router-view/>
    <div class="top-teams" style="margin-top: 6vh; !important"><span >Team</span></div>
    <div class="faculty">
      <h1 class="faculty_text">Faculty</h1>
      <div class="d-flex justify-content-center">
        <div class="red1"></div>
      </div>
      <div class="card-wrapper">
        <div
          class="cards d-flex justify-content-center align-items-center flex-column"
          style="margin-top: 10vh"
        >
          <div class="card" style="width: 15rem">
            <img src="../assets/prof.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <!-- <p class="card-text">Dr. Sujoy K. Samanta
                            <br>Professor In-Charge</p> -->
              <div class="card-text row">
                <div class="col-8">
                  Dr. Sujoy K. Samanta<br />Professor In-Charge
                </div>
                <div class="col-4 d-flex align-items-center">
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    /></svg
                  ><svg -->
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card" style="width: 15rem">
            <img src="../assets/org.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Dr. Sujoy K. Samanta<br />Professor In-Charge
                </div>
                <div class="col-4 d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    /></svg
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="bottom-number1">
      <span style="margin-right: 1.5vh">1.8</span>
    </div>
  </section>

  <section class="team_section_2">
    <div class="top-teams"><span style="margin-right: 1.5vh">Team</span></div>
    <div class="faculty">
      <h1 class="faculty_text">Organising Committee</h1>
      <div class="d-flex justify-content-center">
        <div class="red1"></div>
      </div>
      <div class="card-wrapper">
        <div
          class="cards d-flex justify-content-center align-items-center flex-column"
          style="margin-top: 10vh"
        >
          <div class="card" style="width: 15rem">
            <img src="../assets/prof.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <!-- <p class="card-text">Dr. Sujoy K. Samanta
                            <br>Professor In-Charge</p> -->
              <div class="card-text row">
                <div class="col-8">
                  Dr. Sujoy K. Samanta<br />Professor In-Charge
                </div>
                <div class="col-4 d-flex align-items-center">
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card" style="width: 15rem" v-for="(item, i) in team" :key="i">
            <img  :src="item.Path" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  {{item.Name}}<br />{{item.Committee}}
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href={{item.Linkedin}} target="_blank">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div> -->
           <div class="card" style="width: 15rem">
            <img src="../assets/Palak_Organiser.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Palak Totala<br />Organiser
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/palak-totala-510875203/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style="width: 15rem">
            <img src="../assets/Nischal_coorg.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <!-- <p class="card-text">Dr. Sujoy K. Samanta
                            <br>Professor In-Charge</p> -->
              <div class="card-text row">
                <div class="col-8">
                  Nischal Jain<br />Co-organiser
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/nischal-jain-4ab036195/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style="width: 15rem">
            <img src="../assets/pratyush_webnapp.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Pratyush Kumar<br />WebnApp
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/pratyushkumar1032/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style="width: 15rem">
            <img src="../assets/Suyog_webnapp.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Suyog Vinod Chaudhari<br />WebnApp
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/suyog-chaudhari-5b95021b9/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style="width: 15rem">
            <img src="../assets/Vani_Hospitality.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Vani Grover<br />Hospitality
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/vani-grover-77078a207/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style="width: 15rem">
            <img src="../assets/Pradipti_PnC.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Pradipti Mondal<br />PnC
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/pradipti-mondal-3146ac/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card" style="width: 15rem">
            <img src="../assets/.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Chirag Bharadwaj<br />PnC
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/chirag-bhardwaj-016428217/"></a>
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div> -->
          <!-- <div class="card" style="width: 15rem">
            <img src="../assets/org.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Shaheer Tanveer<br />PnC
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/shaheertanveer/"></a>
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div> -->
          <div class="card" style="width: 15rem">
            <img src="../assets/Sai_Spons.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Sai Nandan<br />Spons
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/sai-nandan-panigrahy/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card" style="width: 15rem">
            <img src="../assets/org.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Rohit Sinha<br />Spons
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/rohit-sinha-1282a821b/"></a>
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div> -->
          <div class="card" style="width: 15rem">
            <img src="../assets/Athul_Spons.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Athul Krishna K<br />Spons
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/athul-krishna-k-688262223/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card" style="width: 15rem">
            <img src="../assets/org.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Yash Ajitsaria<br />Prod
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/yash-ajitsaria-0b56a11bb/"></a>
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div> -->
          <div class="card" style="width: 15rem">
            <img src="../assets/Devna_Production.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Devna Srivastava<br />Prod
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/devna-srivastava-58040621a/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card" style="width: 15rem">
            <img src="../assets/Abhinav_Registration.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Abhimanyu Singh Bisht<br />Prod
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/abhimanyu-singh-bisht-91b3b0200/"></a>
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div> -->
          <!-- <div class="card" style="width: 15rem">
            <img src="../assets/org.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Farhaan Alam<br />CnD
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/farhaan-alam/"></a>
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div> -->
          <div class="card" style="width: 15rem">
            <img src="../assets/Abhinav_Registration.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Abhinav Mishra<br />Registration
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/abhinav2901/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style="width: 15rem">
            <img src="../assets/Keertana_Registration.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  M.L.N. Keertana<br />Registration
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/mln-keertana-5aab50217/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style="width: 15rem">
            <img src="../assets/Khushi_Editorial.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Khushi Tiwari<br />Editorial
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/khushishah8221/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style="width: 15rem">
            <!-- <img src="../assets/Hardik_MPR.JPG" class="card-img-top" alt="..." /> -->
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Hardik Tiwari<br />MPR
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/hardiktiwari/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style="width: 15rem">
            <img src="../assets/Aarav_mpr.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Aarav Arya<br />MPR
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/aarav-arya-b80909239/">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card" style="width: 15rem" v-for="(index,items) in items" :key="index">
            <img src="../assets/Palak_Organiser.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text row">
                <div class="col-8">
                  Palak Totala<br />Organiser
                </div>
                <div class="col-4 d-flex align-items-center">
                  <a href="https://www.linkedin.com/in/palak-totala-510875203/"></a>
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div> -->
          
        </div>
      </div>
    </div>
    <div class="bottom-number1 bottom-number2">
      <span style="margin-right: 1.5vh">2.8</span>
    </div>
  </section>
  <section class="footer_section">
      <footerVue />
    </section>
</template>

<script>
  import team from "../assets/team.json"
  import footerVue from "../components/footer_mobile.vue"
  import Nav from '@/components/navbarpanel_mobile.vue';
export default {
  name: "team_mobile",
data () {
    return {
      team: team,
    }
  },
  components: {
    footerVue,Nav
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

nav{
      text-align: end;
    margin-right: 2vw;
}

a{
  text-decoration-color: black;
}
a:hover{
  text-decoration-color: black;
}
.nav_span{
  color: black;
      position: fixed;
    top: 0;
    right: 1vw;
}
.nav_span:hover{
  color: red;
}
.faculty {
  width: 100%;
  text-align: center;
  height: 110vh;
}

.faculty_text {
  font-family: "Gotham";
  font-style: normal;
  font-weight: 700;
  font-size: 250%;
  line-height: 140%;
  letter-spacing: -0.05em;
}

.red1 {
  background-color: red;
  width: 82%;
  height: 5%;
  position: absolute;
  /* left: 10%; */
  display: block;
}

.cards {
  /* display: block; */
  /*position: absolute !important;*/
  top: 40vh !important;
  margin-top: 20vh !important;
}

svg {
  margin-inline: 0.3vh;
}

.card-text {
  font-size: small !important;
  font-weight: 700 !important;
}

.card-img-top{
  border-radius: 25px;
}

.card {
  margin-bottom: 5vh;
}

.top-teams {
  width: 100%;
  font-size: 5vh;
  font-weight: 600;
  text-decoration: underline;
  text-align: right;
  margin-right: 2vh;
}
.bottom-number1 {
  /* width: 100%; */
  font-size: 5vh;
  font-weight: 700;
  /* text-decoration: underline; */
  text-align: right;
  margin-right: 2vh;
  writing-mode: vertical-rl;
  float: right;
  transform: rotate(180deg); 
}

.bottom-number2{
  margin-top: 500vh;
}

.team_section_2 {
  margin-top: 13vh;
}

.card-img-top{
  height: 27vh;
}

.scrollmagic-pin-spacer{
  margin-top: 3500px !important;
  padding: 0;
}

.footer_section{
  position: relative;
    top: 11vh;
}
</style>