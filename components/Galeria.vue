<template>
   <!-- Images Gallery Style Start -->
        <section class="wide-tb-100">
            <div class="container">
                <div class="row img-gallery" >
                    <div class="col-lg-4">
                        <h1 class="heading-main mb-lg-0">
                            <small> Galeria de Imagenes </small>
                            Algunas de las acciones que hemos realizado
                        </h1>
                    </div>

                
                   <div class="col-lg-4 col-md-6" v-for="(foto, index) in fotos" :key="index">
                        <!-- Gallery Item -->
                        <div class="img-gallery-item">
                            <a @click="openLightboxOnSlide(foto.id)" title="School Development"> 
                                <div class="gallery-content">
                                    <h3> {{foto.titulo}} </h3>
                                    <div class="img-open">
                                        <i data-feather="plus-circle"></i>
                                    </div>
                                </div>
                                <img :src="'https://strapi.dejando-huellas.escuelita.dev' + foto.foto.url">
                            </a>
                        </div>
                        <!-- Gallery Item -->
                    </div>
                    
                    <FsLightbox 
                        :toggler="toggler"
                        :slide="slide"
                        :sources="urlsFotos"
                    />

                </div>
            </div>

            

        </section>
</template>

<script>
import FsLightbox from "fslightbox-vue";

  export default {
      components: { FsLightbox},
    data() {
        return {
            toggler: false,
            slide: 1,
        }
    },
    methods: {
        openLightboxOnSlide: function(number) {
        this.slide = number;
        this.toggler = !this.toggler;
        }
    },
    props: {
      fotos: {
        type: Array,
        required: true,
      }
    },
    computed: {
        urlsFotos: function () {        
            return this.fotos.map((value) => `https://strapi.dejando-huellas.escuelita.dev${value.foto.url}`)
        }
    }
  }


</script>
