<template>
    <!-- Blog Style Start -->
    <section class="wide-tb-100 pb-0 home-blog-post-wrap">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-lg-6 col-9">
                    <h1 class="heading-main">
                        <small>Noticias</small>
                        Entérate las últimas novedades y actividades
                    </h1>
                </div>
            </div>
            <div class="row">
                <div v-for="noticia in noticias" class="col-md-6 col-lg-4 col-sm-12 mb-0" :key="noticia.id">
                    <TarjetaBlog :noticia="noticia"/>
                </div>
            </div>
        </div>
    </section>
    <!-- Blog Style End -->
</template>

<script>
export default {
    props: {
        'noticias': {
            type: Array,
            required: true            
        }
    }
}
</script>