<template>
  <!-- Header Start -->
    <header class="fixed-top wow fadeInDown header-fullpage header-style-fullwidth">
        <div class="top-bar-right d-flex align-items-center text-md-left">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col d-flex align-items-center contact-info">
                        <div>
                            <i data-feather="phone"></i>  <a href="tel:+598 92 788 188"> +598 92 788 188 </a>
                        </div>
                        <div>
                            <i data-feather="mail"></i>  <a href="mailto:org.dejandohuellas2019@gmail.com"> org.dejandohuellas2019@gmail.com </a>
                        </div>
                    </div>

                    <div class="col-md-auto">
                        <div class="social-icons">
                            <a href="https://www.facebook.com/dejando.huellas.543792" target='blank'><i class="icofont-facebook"></i></a>
                            <a href="https://www.instagram.com/dejandohuellasmaldonado" target='blank'><i class="icofont-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Navigation Start -->
        <nav class="navbar navbar-expand-lg bg-transparent">
            <div class="container text-nowrap">
                <div class="d-flex align-items-center w-100 col p-0 logo-brand">
                    <a class="navbar-brand rounded-bottom light-bg" href="index.html">
                        <img src="/images/horizontalsinfondo.png" alt="">
                    </a>
                </div>
                <!-- Topbar Buttons Start -->
                <div class="d-inline-flex request-btn order-lg-last col-auto p-0 align-items-center">
                    <a class="btn-outline-primary btn ml-3" href="#" id="search_home"><i data-feather="search"></i></a>

                    <a class="nav-link btn btn-default ml-3 donate-btn" href="donation-page.html">Donate</a>

                    <!-- Toggle Button Start -->
                    <button class="navbar-toggler x collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Toggle Button End -->
                </div>
                <!-- Topbar Buttons End -->

                <div class="collapse navbar-collapse" id="navbarCollapse" data-hover="dropdown" data-animations="slideInUp slideInUp slideInUp slideInUp">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about-us.html"> Equipo </a>
                        </li>

                            <li class="nav-item">

                            <a class="nav-link" href="about-us.html"> Blog </a>
                            </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact-us.html"> Contacto </a>
                        </li>

                    </ul>
                    <!-- Main Navigation End -->
                </div>
            </div>
        </nav>
        <!-- Main Navigation End -->
    </header>
    <!-- Header Start -->
</template>

<script>
export default {

}
</script>
