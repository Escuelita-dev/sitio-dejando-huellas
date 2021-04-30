<template>

    <section>
        <CabezalPaginaInterna :titulo='titulo' :breadCrumb="breadCrumb()"/>
        <!-- About Us Style Start -->
        <section class="wide-tb-100">
            
            <div class="container">
                <div class="row">                    
                    <div class="col-lg-8 col-md-12">
                        <h1 class="heading-main">
                            <small> Ayudanos a ayudar </small>
                            No dejes que la pobreza destruya los sueños de alguien
                        </h1>

                        <p>Nuestros ingresos son completamente transparentes y los podrá ver proximamente en nuestra web</p>

                        <div class="donation-wrap">

                            <div class="row">
                                <div class="col-md-8">

                                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeD2hnWdDcf_hGGy-Jhd0xX4KVS_yNUPzMaE47jZUvA-4Z8Tw/viewform?embedded=true" width="640" height="450" frameborder="0" marginheight="0" marginwidth="0">
                                Cargando…
                                </iframe>
                            </div>
                        </div>

                    </div>

                    <!-- <div class="col-lg-4 col-md-12">
                        <div class="faqs-sidebar pos-rel">
                            <div class="bg-overlay blue opacity-80"></div>                            
                            <form>
                                <h3 class="h3-sm fw-7 txt-white mb-3">Tienes preguntas?</h3>
                                <div class="form-group">
                                    <label for="fullname"><strong> Telefono</strong></label>
                                    <br> +598 92 788 188
                                </div>
                                <div class="form-group">
                                    <label for="emailform"><strong>Email</strong></label>
                                    org.dejandohuellas2019@gmail.com
                                </div>
                            </form>
                        </div>
                    </div> -->

                </div>
            </div>
        </div>

        </section>
        <!-- About Us Style Start -->
    </section>
</template>

<script>
import CabezalPaginaInterna from "../components/CabezalPaginaInterna.vue";
export default {
    components: {
        CabezalPaginaInterna,
    },
    props: {
        imagenFondo: {
            type: String,
            required: false,
            default: '/images/fondo-jovenes-felices-1.jpg'
        },
        breadCrumb: {
            type: Array,
            required: false,
            default: [
                {link: '/', nombre: 'Inicio'}
            ]
        }
    },
    methods: {
        esUltimo(index, items) {
            return index == items.length - 1
        },
        breadCrumb: function() {
            return [
                {link: '/', nombre: 'Inicio'},
                {link: '/donar', nombre: 'Donar'},
            ]
        }
    },
    data() {
        return {
            titulo: 'Hacer una donacion',
        };
    }
    
}
</script>