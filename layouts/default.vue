<template>
  <div>
    <Cargando />

    <Navbar />

    <Nuxt />

    <Footer />

    <!-- Back To Top Start -->
    <a id="mkdf-back-to-top" href="#" class="off"><i data-feather="corner-right-up"></i></a>
    <!-- Back To Top End -->

    <!-- Jquery Library JS -->
    <script src="/library/jquery/jquery.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="/library/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Bootstrap Dropdown JS -->
    <script src="/library/bootstrap/js/bootstrap-dropdownhover.min.js"></script>
    <!-- Feather Icon JS -->
    <script src="/library/feather-icons/feather.min.js"></script>
    <!-- Owl Carousel JS -->
    <script src="/library/owlcarousel/js/owl.carousel.min.js"></script>
    <!-- Select2 Dropdown JS -->
    <script src="/library/select2/js/select2.min.js"></script>
    <!-- Magnific Popup JS -->
    <script src="/library/magnific-popup/jquery.magnific-popup.min.js"></script>
    <!-- Instagram Images JS -->
    <script src="/library/jquery-instagramFeed/jquery.instagramFeed.min.js"></script>
    <!-- Way Points JS -->
    <script src="/library/jquery-waypoints/jquery.waypoints.min.js"></script>
    <!-- Count Down JS -->
    <script src="/library/countdown/jquery.countdown.min.js"></script>
    <!-- Appear JS -->
    <script src="/library/jquery-appear/jquery.appear.js"></script>
    <!-- Jquery Easing JS -->
    <script src="/library/jquery-easing/jquery.easing.min.js"></script>
    <!-- Counter JS -->
    <script src="/library/jquery.counterup/jquery.counterup.min.js"></script>
    <!-- Form Validation JS -->
    <script src="/library/jquery-validate/jquery.validate.min.js"></script>
    <!-- Theme Custom -->
    <script src="/js/site-custom.js"></script>
    <!-- Home Slider (Only For Home pages) -->
    <script src="/js/home-slider.js"></script>

  </div>
</template>

<script>
import Cargando from '../components/Cargando.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: { Cargando, Navbar, Footer },
}
</script>
