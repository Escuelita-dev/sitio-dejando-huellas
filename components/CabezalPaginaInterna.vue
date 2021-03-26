<template>
    <section class="breadcrumbs-page-wrap">
        <div class="bg-fixed pos-rel breadcrumbs-page" :style="`background-image: url('${imagenFondo}')`">
            <div class="container">
                <h1>{{ titulo }}</h1>
                <nav aria-label="breadcrumb" class="breadcrumb-wrap">
                    <ol class="breadcrumb">
                        <li v-for="(link, index) in breadCrumb" :key="index" :class="{'breadcrumb-item': true, active: esUltimo(index, breadCrumb)}">
                            <NuxtLink v-if="!esUltimo(index, breadCrumb)" :to="link.link">{{ link.nombre }}</NuxtLink>
                            <template v-else>
                                {{ link.nombre }}                                
                            </template>
                        </li>
                        <!-- <li class="breadcrumb-item active" aria-current="page">Blog Details</li> -->
                    </ol>
                </nav>  
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        titulo: {
            type: String,
            required: true
        },
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
        }
    }    
}
</script>