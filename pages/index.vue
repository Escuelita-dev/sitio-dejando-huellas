<template>
  <div>
    <!-- Cabezal -->
    <Cabezal :cabezal="cabezal" />

    <!-- Main Body Content Start -->
    <main id="body-content" class="body-non-overflow">
      <!-- Va la descripcion de los objetivos -->
      <ObjetivosContenido :contenido="ObjetivosContenido" />

      <!-- tarjetas -->
      <ObjetivosTarjetas :tarjetas="objetivosTarjetas" />

      <!-- Contadores -->
      <Contadores :contadores="contadores" />

      <FraseInspiradora :frase="fraseInspiradora" />

      <Galeria :fotos="fotos"/>

      <!-- Team Member -->
      <Team :miembros="miembros" />

      <NoticiasDestacadasBlog :noticias="noticias" />
      <!-- Partners -->
      <Socios :socios="socios" />
    </main>
  </div>
</template>

<script>
import FraseInspiradora from "../components/FraseInspiradora.vue";
import ObjetivosContenido from "../components/ObjetivosContenido.vue";
import ObjetivosTarjetas from "../components/ObjetivosTarjetas.vue";
import Contadores from "../components/Contadores.vue";
import Team from "../components/Team.vue";
import Socios from "../components/Socios.vue";
import Galeria from "../components/Galeria.vue";
import Cabezal from "../components/Cabezal.vue";

export default {
  components: {
    FraseInspiradora,
    ObjetivosContenido,
    ObjetivosTarjetas,
    Contadores,
    Team,
    Socios,
    Galeria,
    Cabezal,
  },
  async asyncData({ params, $strapi }) {
    const noticias = await $strapi.find("noticias");
    return {
      noticias: noticias,
      fraseInspiradora: await $strapi.find("frase-inspiradora"),
      ObjetivosContenido: await $strapi.find("objetivos-contenido"),
      objetivosTarjetas: await $strapi.find("objetivos-tarjetas"),
      contadores: await $strapi.find("objetivos-marcadores"),
      miembros: await $strapi.find("miembros"),
      socios: await $strapi.find("socios"),
      fotos: await $strapi.find("fotos"),
      cabezal: await $strapi.find("cabezal"),
    };
  },
};
</script>
