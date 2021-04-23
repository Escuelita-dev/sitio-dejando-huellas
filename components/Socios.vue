<template>
    <section class="wide-tb-100 pt-5">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-12">
                    <h1 class="heading-main">
                        <small> Sumate a ayudar </small>
                        Agradecemos el apoyo de
                    </h1>
                </div>

                <div class="row" >
                    <div v-for="(socio, index) in socios" :key="index" class="col-6 col-md-4">
                        <!-- Client Logo -->
                        <div class="item">  
                            <div class="clients-logo" >
                                <img :src='"https://strapi.dejando-huellas.escuelita.dev" + socio.logo.url'>
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

