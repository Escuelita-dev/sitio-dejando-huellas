<template>
    <!-- Blog Post Slider Item -->
    <div class="item">
        <div class="post-wrap">
            <div class="post-img">
                <a href="blog-single.html"><img :src="getStrapiMedia(noticia.ImagenTarjeta.url)" :alt="noticia.Titulo"></a>
            </div>
            <div class="post-content">
                <div class="post-date">17, Aug, 2020</div>
                <h3 class="post-title"><a href="blog-single.html">{{ noticia.Titulo }}</a></h3>
                <!-- <div class="post-category">Food Charity</div> -->
                <div class="text-md-right">
                    <a href="blog-single.html" class="read-more-line"><span>Leer</span></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Blog Post Slider Item -->    
</template>

<script>
import { getStrapiMedia } from '../utils/medias'

export default {
    props: {
        'noticia': {
            type: Object,
            required: true
        }
    },
    methods: {
        getStrapiMedia
    }
}
</script>