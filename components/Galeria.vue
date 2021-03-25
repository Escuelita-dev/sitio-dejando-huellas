<template>
   <!-- Images Gallery Style Start -->
        <section class="wide-tb-100">
            <div class="container">
                <div class="row img-gallery">
                    <div class="col-lg-4">
                        <h1 class="heading-main mb-lg-0">
                            <small> Galeria de Imagenes </small>
                            Proyectos que hemos realizado
                        </h1>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <!-- Gallery Item -->
                        <div class="img-gallery-item">
                            <a :href="'https://strapi.dejando-huellas.escuelita.dev' " title="Child Welfare">
                                <div class="gallery-content">
                                    <div class="tag"><span>Education</span></div>
                                    <h3>Child Welfare</h3>
                                    <div class="img-open">
                                        <i data-feather="plus-circle"></i>
                                    </div>
                                </div>
                                <img :src="'/images/gallery/gallery_img_7.jpg' " alt="">
                            </a>
                        </div>
                        <!-- Gallery Item -->
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <!-- Gallery Item -->
                        <div class="img-gallery-item">
                            <a :href="'/images/gallery/gallery_img_8.jpg' " title="Child Welfare">
                                <div class="gallery-content">
                                    <div class="tag"><span>Education</span></div>
                                    <h3>Child Welfare</h3>
                                    <div class="img-open">
                                        <i data-feather="plus-circle"></i>
                                    </div>
                                </div>
                                <img src="/images/gallery/gallery_img_8.jpg" alt="">
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
