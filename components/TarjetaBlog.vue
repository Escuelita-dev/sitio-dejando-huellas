<template>
    <!-- Blog Post Slider Item -->
    <div class="item">
        <div class="post-wrap">
            <div class="post-img">
                <NuxtLink :to="{name: 'blog-slug', params: {'slug': noticia.Slug}}"><img :src="getStrapiMedia(noticia.ImagenTarjeta.url)" :alt="noticia.Titulo"></NuxtLink>
            </div>
            <div class="post-content">
                <div class="post-date">17, Aug, 2020</div>
                <h3 class="post-title"><NuxtLink :to="{name: 'blog-slug', params: {'slug': noticia.Slug}}">{{ noticia.Titulo }}</NuxtLink></h3>
                <!-- <div class="post-category">Food Charity</div> -->
                <div class="text-md-right">
                    <NuxtLink :to="`/blog/${noticia.Slug}`"  class="read-more-line"><span>Leer</span></NuxtLink>
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