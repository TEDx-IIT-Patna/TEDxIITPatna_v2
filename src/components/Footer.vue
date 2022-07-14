<!--
  Default footer element
    nothing too fancy
-->
<!--
  Usage:
  <template>
    ...
    <Footer />
    ...
  </template>
  <script scoped>
    ...
    import Footer from '@/components/Footer.vue'
    ...
    export default {
      ...
      components: {
        ...
        Footer,
        ...
      }
    }
  </script>
-->

<template>
  <!-- <img src="@/assets/images/footerimg.png" class="footer-img"> -->
  <footer class="footer">
    <div class="logo">
      <img src="@/assets/images/tedxiitpatna_logo-1W.png">
    </div>

    <div class="left-wrapper">
      <div class="nav-links">
        <NavLinks />
      </div>

      <div class="misc-links">
        <a href="#" class="link">Subscribe to our<br>mailing list!</a>
        <a href="https://forms.gle/jhDwBQmSFid4jjPZ6" target="_blank" class="link">Speaker Applications</a>
      </div>

      <div class="socials">
        <a href="mailto:tedxiitpatna@gmail.com" class="email">tedxiitpatna@gmail.com</a>
        <div class="links">
          <a href="https://www.instagram.com/tedxiitpatna/" target="_blank" class="link">
            <img src="@/assets/icons/instagram-icon-black.png" class="icon">
            <div class="name">@tedxiitpatna</div>
          </a>
          <a href="https://www.linkedin.com/company/tedxiitpatna" target="_blank" class="link">
            <img src="@/assets/icons/linkedin-icon-black.png" class="icon">
            <div class="name">TEDxIITPatna</div>
          </a>
          <a href="https://twitter.com/tedxiitpatna" target="_blank" class="link">
            <img src="@/assets/icons/twitter-icon-black.png" class="icon">
            <div class="name">@TEDxIITPatna</div>
          </a>
          <a href="https://www.facebook.com/tedxiitpatna/" target="_blank" class="link">
            <img src="@/assets/icons/facebook-icon-black.png" class="icon">
            <div class="name">TEDxIITPatna</div>
          </a>
        </div>

      </div>
    </div>

    <div class="Map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.117775718107!2d84.84966781918703!3d25.534453514692004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d567a193702ff%3A0xc9c527c7faec3056!2sIIT%20Patna%20Administration%20Block!5e0!3m2!1sen!2sin!4v1655919519489!5m2!1sen!2sin"
        style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <!-- *** This thing's CSS needs to be reviewed -->
    <div class="disclaimer">This independent TEDx event is operated under license from TED.</div>

  </footer>
</template>

<script>
import NavLinks from '@/components/NavLinks.vue'

export default {
    name: "Footer",
    components: {
        NavLinks,
    }
}
</script>

<style scoped>
@import '@/assets/css/footer.css';
</style>