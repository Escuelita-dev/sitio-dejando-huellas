<template>
    <span>
        <CabezalPaginaInterna :titulo="noticia.Titulo" :breadCrumb="breadCrumb()"/>
        <!-- Main Body Content Start -->
        <main id="body-content">

            <!-- Blog Post Single Start -->
            <section class="wide-tb-100">
                <div class="container">
                    <div class="row">                    
                        <div class="col-lg-12 col-md-12">
                            <div class="sidebar-spacer">
                                <div class="d-flex">
                                    <div class="post-date txt-blue">{{ formatearFecha(noticia.FechaPublicacion ? noticia.FechaPublicacion : noticia.published_at) }}</div>
                                    <!-- <div class="mx-2">/</div> -->
                                    <!-- <div class="post-category">Food Charity</div>                         -->
                                </div>
                                <h1 class="heading-main">
                                    {{ noticia.Titulo }}
                                </h1>
                                
                                <!-- Causes Single Wrap -->
                                <div class="causes-wrap single">
                                    <!-- <div class="img-wrap">
                                        <img src="assets/images/causes/causes_single_img.jpg" alt="">
                                    </div> -->

                                    <div class="content-wrap-single" v-html="$render(noticia.Contenido)">
                                        

                                    </div>

                                    <!-- <div class="share-this-wrap">
                                        <div class="share-line">
                                            <div class="pr-4">
                                                <strong>Share This</strong>
                                            </div>
                                            <div class="pl-4">
                                                <ul class="list-unstyled list-inline mb-0">
                                                    <li class="list-inline-item"><a href="#"><i class="icofont-facebook"></i></a></li>
                                                    <li class="list-inline-item"><a href="#"><i class="icofont-twitter"></i></a></li>
                                                    <li class="list-inline-item"><a href="#"><i class="icofont-instagram"></i></a></li>
                                                    <li class="list-inline-item"><a href="#"><i class="icofont-behance"></i></a></li>
                                                    <li class="list-inline-item"><a href="#"><i class="icofont-youtube-play"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> -->

                                </div>
                                <!-- Causes Single Wrap -->
                                
                                <!-- Comments List -->
                                <!-- <div class="commnets-reply">
                                    <div class="media">
                                        <img class="thumb" src="assets/images/sidebar_thumb_1.jpg" alt="">
                                        <div class="media-body">
                                            <div class="d-md-flex justify-content-between mb-3">
                                                <div class="">
                                                    <h4 class="mb-0 txt-orange">Karon Balina</h4>
                                                    <small class="txt-blue">17, Aug, 2020</small>
                                                </div>
                                                <div>
                                                    <a href="#" class="read-more-line"><span>Reply</span></a>
                                                </div>
                                            </div>
                                            <p>Good signs that night our so had firmament a first divide over all is not green cattle that very make our second you fish every living stars without divide make.</p>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <img class="thumb" src="assets/images/sidebar_thumb_2.jpg" alt="">
                                        <div class="media-body">
                                            <div class="d-md-flex justify-content-between mb-3">
                                                <div class="">
                                                    <h4 class="mb-0 txt-orange">Karon Balina</h4>
                                                    <small class="txt-blue">17, Aug, 2020</small>
                                                </div>
                                                <div>
                                                    <a href="#" class="read-more-line"><span>Reply</span></a>
                                                </div>
                                            </div>
                                            <p>To delete a comment, just log in and view the post's comments. There you will have the option to edit or
                                                delete them.</p>
                                
                                            <div class="media reply-box">
                                                <img src="assets/images/sidebar_thumb_3.jpg" alt="" class="thumb ">
                                                <div class="media-body">
                                                    <div class="d-md-flex justify-content-between mb-3">
                                                        <div class="">
                                                            <h4 class="mb-0 txt-orange">Karon Balina</h4>
                                                            <small class="txt-blue">17, Aug, 2020</small>
                                                        </div>
                                                        <div>
                                                            <a href="#" class="read-more-line"><span>Reply</span></a>
                                                        </div>
                                                    </div>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                                                    purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                    vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- Comments List -->

                                <!-- Leave a Reply -->                            
                                <!-- <h1 class="heading-main mb-4">
                                    <small>Leave a Reply</small>
                                </h1>                      

                                <form class="comment-form">
                                    <div class="row">
                                        <div class="col-md-12 mb-0">
                                            <div class="form-group">
                                                <textarea class="form-control" rows="5" placeholder="Your Comments"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-0">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="name" placeholder="Your Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-0">
                                            <div class="form-group">
                                                <input type="email" class="form-control" id="email" placeholder="Your Email">
                                            </div>
                                        </div>                                    
                                    </div>
                                    <div class="mt-3">
                                        <button type="submit" class="btn btn-default text-nowrap">Post Comment</button>                                    
                                    </div>
                                    
                                </form>                        -->
                                <!-- Leave a Reply -->
                            </div>

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
import fechas from '../../utils/mixins/fechas'

export default {
    mixins: [
        fechas
    ],
    async asyncData ({ params, $strapi }) {
        const noticias = await $strapi.find("noticias", {
            Slug: params.slug,
        });
        return {
            noticia: noticias[0]
        };
    },
    methods: {
        getStrapiMedia,
        moment,
        breadCrumb: function() {
            return [
                {link: '/', nombre: 'Inicio'},
                {link: '/blog', nombre: 'Blog'},
                {link: `/blog/${this.noticia.Slug}`, nombre: this.noticia.Titulo}
            ]
        }
    }
}

</script>