<template>
   <!-- Images Gallery Style Start -->
        <section class="wide-tb-100">
            <div class="container">
                <div class="row img-gallery" >
                    <div class="col-lg-4">
                        <h1 class="heading-main mb-lg-0">
                            <small> Galeria de Imagenes </small>
                            Algo de los proyectos que hemos realizado
                        </h1>
                    </div>

                     <div class="col-lg-4 col-md-6">
                        <!-- Gallery Item -->
                        <div class="img-gallery-item">
                            <a href="assets/images/gallery/gallery_img_1.jpg" title="School Development">
                                <div class="gallery-content">
                                    <div class="tag"><span>Education</span></div>
                                    <h3> {{fotos[1].titulo}} </h3>
                                    <div class="img-open">
                                        <i data-feather="plus-circle"></i>
                                    </div>
                                </div>
                                <img :src="'https://strapi.dejando-huellas.escuelita.dev '+ fotos[1].url" alt="">
                            </a>
                        </div>
                        <!-- Gallery Item -->
                    </div>

                    <!-- <div class="col-lg-4 col-md-6" >
                        <div class="img-gallery-item" v-for="(foto, index) in fotos" :key="index">
                            <a :href="'https://strapi.dejando-huellas.escuelita.dev' + foto.url" :title="foto.titulo">
                                <div class="gallery-content">
                                    <h3> {{foto.titulo}} </h3>
                                    <div class="img-open">
                                        <i data-feather="plus-circle"></i>
                                    </div>
                                </div>
                                <img :src="'https://strapi.dejando-huellas.escuelita.dev' + foto.url" alt="">
                            </a>
                        </div>
                    </div> -->


                </div>
            </div>
        </section>
        <!-- Images Gallery Style End -->
</template>

<script>
  export default {
    props: {
      fotos: {
        type: Array,
        required: true,
      }
    }
  }
</script>
