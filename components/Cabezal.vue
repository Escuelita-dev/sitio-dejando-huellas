<template>
  <!-- Banner Start -->
    <section class="main-banner home-style-second">
        <div class="slides-wrap">
            <div class="owl-carousel owl-theme">

                <!--/owl-slide-->
                <div class="owl-slide d-flex align-items-center cover" style="background-image: url(images/background.jpg)">
                    <div class="container">
                        <div class="row justify-content-center justify-content-md-start no-gutters">
                            <div class="col-10 col-md-6 static">
                                <div class="owl-slide-text">
                                    <h3 class="owl-slide-animated owl-slide-title"> {{cabezal.Subtitulo}} </h3>
                                    <h1 class="owl-slide-animated owl-slide-subtitle">
                                        {{cabezal.Titulo}}
                                    </h1>
                                    <!-- <div class="owl-slide-animated owl-slide-cta">
                                        <a class="btn btn-default mr-3" href="causes-list.html" role="button">Join Us Now</a>
                                        <a class="slider-link popup-video" href="http://player.vimeo.com/video/7449107">Watch the video <i class="charity-play_button"></i></a>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/owl-slide-->
            </div>

        </div>
    </section>
    <!-- Banner Start -->
</template>
<script>
  export default {
    props: {
      cabezal: {
        type: Object,
        required: true,
      }
    }
  }
</script>
