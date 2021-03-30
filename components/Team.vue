<template>
   <!-- Team Member Style Start -->
        <section class="wide-tb-100 team-bg bg-green mb-spacer-md">
            <div class="container">
                <div class="row justify-content-between align-items-end">
                    <div class="col-lg-4 col-md-6">
                        <h1 class="heading-main">
                            <small>Miembros del equipo</small>
                            Nuestros voluntarios
                        </h1>
                    </div>
                    <div class="col-lg-8 col-md-6 text-md-right btn-team">
                        <a href="volunteers.html" class="btn btn-outline-dark"> Ver todos los miembros </a>
                    </div>
                </div>

                <div class="row">

                  <!-- Pasa por un for y muesta los miembros en tarjetas -->
                    <div class="col-12 col-lg-3 col-sm-6" v-for="(miembro, index) in miembros" :key="index">
                        <div class="team-section-wrap mb-0">
                            <div class="img green">
                                <div class="social-icons">
                                    <a href="#"><i class="icofont-facebook"></i></a>
                                    <a href="#"><i class="icofont-twitter"></i></a>
                                    <a href="#"><i class="icofont-instagram"></i></a>
                                </div>
                                <img :src='"https://strapi.dejando-huellas.escuelita.dev" + miembro.foto.url' alt="" class="rounded-circle">
                            </div>
                            <h4> {{miembro.nombre}} </h4>
                            <h5> {{miembro.funcion}} </h5>
                            <div class="text-md-right">
                                <a href="javascript:" class="read-more-line"><span>Read More</span></a>
                            </div>
                        </div>
                    </div>

                    <!-- Espacio para el medio -->
                    <!-- <div class="w-100 d-none d-sm-block d-lg-none spacer-60"></div> -->
                    <!-- Spacer For Medium -->

                </div>
            </div>
        </section>
        <!-- Team Member Style End -->
</template>

<script>
  export default {
    props: {
      miembros: {
        type: Array,
        required: true,
      }
    }
  }
</script>

