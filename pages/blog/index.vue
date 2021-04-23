<template>
    <span>
        <CabezalPaginaInterna titulo="Novedades de Dejando Huellas" :breadCrumb="breadCrumb()"/>
        <!-- Main Body Content Start -->
        <main id="body-content">

            <!-- Blog Post Single Start -->
            <section class="wide-tb-100">
                <div class="container">
                    <div class="row">
                        <div v-for="noticia in noticias" class="col-md-6 col-lg-4 col-sm-12 mb-0" :key="noticia.id">
                                <TarjetaBlog :noticia="noticia"/>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Blog Post Single End -->
            
        </main>    
    </span>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'

import moment from 'moment'

export default {
    async asyncData ({ params, $strapi }) {
        const noticias = await $strapi.find("noticias", {_sort: 'published_at:desc'});
        return {
            noticias
        };
    },
    methods: {
        getStrapiMedia,
        moment,
        breadCrumb: function() {
            return [
                {link: '/', nombre: 'Inicio'},
                {link: '/blog', nombre: 'Novedades'}
            ]
        }
    }
}

</script>