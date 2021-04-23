<template>

    <section>
        <CabezalPaginaInterna :titulo='titulo' :breadCrumb="breadCrumb()"/>
        <!-- About Us Style Start -->
        <section class="wide-tb-100">
            
            <div class="container">
                <div class="row">                    
                    <div class="col-lg-8 col-md-12">
                        <h1 class="heading-main">
                            <small>Donation</small>
                            No dejes que la pobreza destruya los sueños de alguien
                        </h1>

                        <p>Nuestros ingresos son completamente transparentes y los podrá ver proximamente en nuestra web</p>

                        <div class="donation-wrap">
                            <h3 class="h3-sm fw-5 txt-blue mb-3"> Seleccione la forma de pago que prefiera </h3>

                            <div class="row">
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" checked>
                                            <label class="custom-control-label" for="customRadioInline1">$10</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
                                            <label class="custom-control-label" for="customRadioInline2">$20</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input">
                                            <label class="custom-control-label" for="customRadioInline3">$50</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline4" name="customRadioInline1" class="custom-control-input">
                                            <label class="custom-control-label" for="customRadioInline4">$100</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline5" name="customRadioInline1" class="custom-control-input">
                                            <label class="custom-control-label" for="customRadioInline5">$500</label>
                                        </div>

                                        <div class="mt-3">
                                            <input type="text" class="form-control" id="custom" placeholder="Custom Amount">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <div class="mb-3"><strong>Pay Using</strong></div>
                                        <a href="#"><img src="assets/images/paypal_btn.png" alt=""></a>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <p class="text-primary">This is simple a note to the donators regarding our services and policy.</p>
                                    <div class="border-top mb-4"></div>                                    
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" placeholder="First Name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="last_name" placeholder="Last Name">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="zip" placeholder="Zip Code">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                </div>
                            </div>

                            <h3 class="h3-sm fw-5 txt-blue mb-3 mt-3">Payment Details</h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="card" placeholder="Enter your card number">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="card_name" placeholder="Name on your card">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="pos-rel">
                                            <input type="text" class="form-control" placeholder="Expiry Date">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="security" placeholder="Security Code">
                                    </div>
                                </div>
                                <div class="col-md-12 mt-3">
                                    <button class="btn btn-default"><i data-feather="heart"></i> Donate Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-12">
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