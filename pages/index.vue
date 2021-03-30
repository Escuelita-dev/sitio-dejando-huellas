<template>
<div>
  <!-- Cabezal -->
  <Cabezal :cabezal='cabezal'/>

      <!-- Main Body Content Start -->
      <main id="body-content" class="body-non-overflow">

        <!-- Va la descripcion de los objetivos -->
        <ObjetivosDescripcion :contenido='objetivosDescripcion'/>

        <!-- tarjetas -->
        <ObjetivosTarjetas :tarjetas='objetivosTarjetas'/>
        <!-- Welcome Home Style Start -->

        <!-- Contadores -->
        <Contadores :contadores='contadores'/>

        <FraseInspiradora :frase="fraseInspiradora"/>

        <Galeria :fotos='fotos'/>

       <!-- Team Member -->
       <Team :miembros='miembros'/>

        <NoticiasDestacadasBlog :noticias="noticias" />

        <!-- Our Partners Start -->
        <section class="wide-tb-100 pt-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <h1 class="heading-main">
                            <small>Global Providers</small>
                            Our World Wide Partner
                        </h1>
                    </div>
                    <div class="col-sm-12">
                        <div class="owl-carousel owl-theme" id="home-clients">

                            <!-- Client Logo -->
                            <div class="item">
                                <div class="clients-logo">
                                    <img src="images/clients/client1.png" alt="">
                                </div>
                            </div>
                            <!-- Client Logo -->

                            <!-- Client Logo -->
                            <div class="item">
                                <div class="clients-logo">
                                    <img src="images/clients/client2.png" alt="">
                                </div>
                            </div>
                            <!-- Client Logo -->

                            <!-- Client Logo -->
                            <div class="item">
                                <div class="clients-logo">
                                    <img src="images/clients/client3.png" alt="">
                                </div>
                            </div>
                            <!-- Client Logo -->

                            <!-- Client Logo -->
                            <div class="item">
                                <div class="clients-logo">
                                    <img src="images/clients/client4.png" alt="">
                                </div>
                            </div>
                            <!-- Client Logo -->

                            <!-- Client Logo -->
                            <div class="item">
                                <div class="clients-logo">
                                    <img src="images/clients/client5.png" alt="">
                                </div>
                            </div>
                            <!-- Client Logo -->

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Blog Style End -->

       <!-- Partners -->
       <Socios :socios='socios'/>


    </main>
</div>
</template>

<script>
import FraseInspiradora from '../components/FraseInspiradora.vue';
import ObjetivosDescripcion from '../components/ObjetivosDescripcion.vue';
import ObjetivosTarjetas from '../components/ObjetivosTarjetas.vue';
import Contadores from '../components/Contadores.vue';
import Team from '../components/Team.vue';
import Socios from '../components/Socios.vue';
import Galeria from '../components/Galeria.vue';
import Cabezal from '../components/Cabezal.vue';

export default {
  components: { FraseInspiradora, ObjetivosDescripcion, ObjetivosTarjetas, Contadores, Team, Socios, Galeria, Cabezal},
    async asyncData ({ params, $strapi }) {
        const noticias = await $strapi.find("noticias");
        return {
          noticias: noticias,
          fraseInspiradora: await $strapi.find('frase-inspiradora'),
          objetivosDescripcion: await $strapi.find('objetivos-contenido'),
          objetivosTarjetas: await $strapi.find('objetivos-tarjetas'),
          contadores: await $strapi.find('objetivos-marcadores'),
          miembros: await $strapi.find('miembros'),
          socios: await $strapi.find('socios'),
          fotos: await $strapi.find("galerias"),
          cabezal: await $strapi.find('cabezal'),
        };
    },
}
</script>
