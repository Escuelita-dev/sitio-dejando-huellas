<template>
  <!-- Banner Start -->
    <section class="main-banner home-style-second">
        <div class="slides-wrap" style="min-height: 700px">
            <div class="owl-theme" style="min-height: 700px">
                <!--/owl-slide-->
                <div class="d-flex align-items-center cover" :style="`background-image: url('${imagenFondo}'); min-height: 700px`">
                    <div class="container" style="z-index:10">
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
                    <div class="overlay" style="position:absolute;height:100%;width:100%;top:0;left:0;background:rgba(0,0,0,0.5);z-index:1"></div>                    
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
        },
        imagenFondo: {
            type: String,
            required: false,
            default: '/images/fondo-jovenes-felices-1.jpg'
        },
    }
  }
</script>

<style scoped>
.slides-wrap {
    height: 100%;
}
.owl-theme {
    height: 100%;
}

</style>
