
<template>
    <img src="@/assets/footerimg.png" class="footer-img">
    <footer class="footer">
        <!-- need to put the tedxiitpatna logo here -->
        <iframe class="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.080990562473!2d84.84695271665835!3d25.53567897977689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20Of%20Technology%E2%80%93Patna%20(IIT%E2%80%93Patna)!5e0!3m2!1sen!2sin!4v1654531203276!5m2!1sen!2sin"
            style="border:0; min-width: 343px; width: 50%;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="footer-links" style="left: -0.5vw; position: relative; width: 100vw;">
            <div class="pages">
                <router-link to="/"><span>Home</span></router-link>
                <router-link to="/about"><span>About</span></router-link>
                <router-link to="/past_events"><span>Past Events</span></router-link>
                <router-link to="/partners"><span>Partners</span></router-link>
            </div>
            <span class="sep"></span>
            <div class="misc">
                <a href="#" class="link">Subscribe to our<br>mailing list!</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUgMii_jdiUM2yOeLj9ieFwIrI0Mb5PSNo9JJMmUxx8V3hvw/viewform" target="_blank" class="link">Speaker Applications</a>
            </div>
        </div>
        <div class="socials">
            <a href="https://www.facebook.com/tedxiitpatna/" target="_blank" rel="noopener noreferrer"><i  class="social_icons fa-lg fa-brands fa-facebook"></i></a>
            <a href="https://instagram.com/tedxiitpatna?utm_medium=copy_link" target="_blank" rel="noopener noreferrer"><i  class="social_icons fa-lg fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/tedxiitpatna/" target="_blank" rel="noopener noreferrer"><i  class="social_icons fa-lg fa-brands fa-linkedin"></i></a>
            <a href="https://m.youtube.com/user/tedxtalks" target="_blank" rel="noopener noreferrer"><i  class="social_icons fa-lg fa-brands fa-youtube"></i></a>
            <a href="https://twitter.com/tedxiitpatna/" target="_blank" rel="noopener noreferrer"><i  class="social_icons fa-lg fa-brands fa-twitter"></i></a><br/><br/>
            <a href="mailto:tedxiitpatna@gmail.com" class="email">tedxiitpatna@gmail.com</a>
            <div class="links">

            </div>
        </div>
        <!-- <div class="footer-body">
<div class="container footer-container">
<div class="row row-cols-2">
<div class="col">Contact us:</div>
<div class="col">Reach us:</div>
</div>
</div>
</div>
<div class="container footer-container">
<div class="row ">
<div class="col">info1</div>
<div class="col">addressline1</div>

</div>
<div class="row">
<div class="col">info2</div>
<div class="col">line2 </div>

</div>

<div class="row">
<div class="col">info3 </div>
<div class="col">line3 </div>

</div>
<div class="row">
<div class="col">info4 </div>
<div class="col">line4 </div>

</div>
<div class="Map">

<div>This independent TEDx Event is Operated Under License From TED|Copyright © 2022 All Rights Reserved
</div>
</div>
</div>
</div> -->
    </footer>
</template>

<style scoped>
@import '@/assets/style/footer.css';
</style>


<script>
export default {
    name: 'footer_mobile'

}
</script>