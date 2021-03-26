<template>
   <section class="wide-tb-100 pt-0 welcome-broke-grid green pb-5">

            <div class="container">
                <div class="welcome-icon"><i class="charity-love_hearts"></i></div>

                <div class="row">

                    <!-- For que muestra el array de tarjetas -->
                    <div class="col-sm-6 col-md-6 col-lg-3" v-for="(tarjeta, index) in tarjetas" :key="index">
                      <div class="icon-box-with-img">

                        <div class="img">
                          <img :src="'https://strapi.dejando-huellas.escuelita.dev' + tarjeta.miniatura.url">
                        </div>
                        <div class="text">
                          <h3> {{tarjeta.titulo}} </h3>
                          <p> {{tarjeta.contenido}} </p>
                        </div>
                      </div>
                    </div>

                    <!-- Tal vez es necesario usar el espacio para separar las tarjetas:  -->
                    <!-- <div class="w-100 d-none d-sm-block d-lg-none spacer-60"></div> -->

                </div>
            </div>
        </section>

</template>

<script>
  export default {
    props: {
      tarjetas: {
        type: Array,
        required: true,
      }
    }
  }
</script>

