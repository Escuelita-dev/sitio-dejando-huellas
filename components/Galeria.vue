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

                    <div class="col-lg-4 col-md-6" v-for="(foto, index) in fotos" :key="index">
                        <!-- Gallery Item -->
                        <div class="img-gallery-item">
                            <a :href="'https://strapi.dejando-huellas.escuelita.dev'+ foto.foto.url" title="School Development">
                                <div class="gallery-content">
                                    <h3> {{fotos[1].titulo}} </h3>
                                    <div class="img-open">
                                        <i data-feather="plus-circle"></i>
                                    </div>
                                </div>
                                <img :src="'https://strapi.dejando-huellas.escuelita.dev' + foto.foto.url">
                            </a>
                        </div>
                        <!-- Gallery Item -->
                    </div>

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
