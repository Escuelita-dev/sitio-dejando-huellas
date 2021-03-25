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

        <!-- Blog Style Start -->
        <section class="wide-tb-100 pb-0 home-blog-post-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-lg-6 col-9">
                        <h1 class="heading-main">
                            <small>News & Blogs</small>
                            Some Of Our Recent Stories & News Blog
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="owl-carousel owl-theme" id="home-second-blog-post">

                            <!-- Blog Post Slider Item -->
                            <div class="item">
                                <div class="post-wrap">
                                    <div class="post-img">
                                        <a href="blog-single.html"><img src="assets/images/blogs/blog_img_1.jpg" alt=""></a>
                                    </div>
                                    <div class="post-content">
                                        <div class="post-date">17, Aug, 2020</div>
                                        <h3 class="post-title"><a href="blog-single.html">Grant Distributions Continue to Increase</a></h3>
                                        <div class="post-category">Food Charity</div>
                                        <div class="text-md-right">
                                            <a href="blog-single.html" class="read-more-line"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Blog Post Slider Item -->

                            <!-- Blog Post Slider Item -->
                            <div class="item">
                                <div class="post-wrap">
                                    <div class="post-img">
                                        <a href="blog-single.html"><img src="assets/images/blogs/blog_img_2.jpg" alt=""></a>
                                    </div>
                                    <div class="post-content">
                                        <div class="post-date">17, Aug, 2020</div>
                                        <h3 class="post-title"><a href="blog-single.html">Grant Distributions Continue to Increase</a></h3>
                                        <div class="post-category">Food Charity</div>
                                        <div class="text-md-right">
                                            <a href="blog-single.html" class="read-more-line"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Blog Post Slider Item -->

                            <!-- Blog Post Slider Item -->
                            <div class="item">
                                <div class="post-wrap">
                                    <div class="post-img">
                                        <a href="blog-single.html"><img src="assets/images/blogs/blog_img_3.jpg" alt=""></a>
                                    </div>
                                    <div class="post-content">
                                        <div class="post-date">17, Aug, 2020</div>
                                        <h3 class="post-title"><a href="blog-single.html">Grant Distributions Continue to Increase</a></h3>
                                        <div class="post-category">Food Charity</div>
                                        <div class="text-md-right">
                                            <a href="blog-single.html" class="read-more-line"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Blog Post Slider Item -->

                            <!-- Blog Post Slider Item -->
                            <div class="item">
                                <div class="post-wrap">
                                    <div class="post-img">
                                        <a href="blog-single.html"><img src="assets/images/blogs/blog_img_4.jpg" alt=""></a>
                                    </div>
                                    <div class="post-content">
                                        <div class="post-date">17, Aug, 2020</div>
                                        <h3 class="post-title"><a href="blog-single.html">Grant Distributions Continue to Increase</a></h3>
                                        <div class="post-category">Food Charity</div>
                                        <div class="text-md-right">
                                            <a href="blog-single.html" class="read-more-line"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Blog Post Slider Item -->

                            <!-- Blog Post Slider Item -->
                            <div class="item">
                                <div class="post-wrap">
                                    <div class="post-img">
                                        <a href="blog-single.html"><img src="assets/images/blogs/blog_img_5.jpg" alt=""></a>
                                    </div>
                                    <div class="post-content">
                                        <div class="post-date">17, Aug, 2020</div>
                                        <h3 class="post-title"><a href="blog-single.html">Grant Distributions Continue to Increase</a></h3>
                                        <div class="post-category">Food Charity</div>
                                        <div class="text-md-right">
                                            <a href="blog-single.html" class="read-more-line"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Blog Post Slider Item -->

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

  async asyncData ({ $strapi }) {
    return {
        fraseInspiradora: await $strapi.find('frase-inspiradora'),
        objetivosDescripcion: await $strapi.find('objetivos-contenido'),
        objetivosTarjetas: await $strapi.find('objetivos-tarjetas'),
        contadores: await $strapi.find('objetivos-marcadores'),
        miembros: await $strapi.find('miembros'),
        socios: await $strapi.find('socios'),
        fotos: await $strapi.find("galerias"),
        cabezal: await $strapi.find('cabezal'),
    }
  },
}
</script>
