<template>
        <section class="wide-tb-100 pt-5">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-lg-12">
                        <h1 class="heading-main">
                            <small> Sumate a ayudar </small>
                            Nuestros socios
                        </h1>
                    </div>

                    <div class="col-sm-12" >
                        <div class="owl-carousel owl-theme" id="home-clients">
                            <!-- Client Logo -->
                            <div class="item" v-for="(socio, index) in socios" :key="index">  
                                <div class="clients-logo" >
                                    <img :src='"https://strapi.dejando-huellas.escuelita.dev" + socio.logo.url' alt="">
                                </div>
                            </div>
                            <!-- Client Logo -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default ({
  props: {
    socios: {
      type: Array,
      required: true,
    }
  }
})
</script>

