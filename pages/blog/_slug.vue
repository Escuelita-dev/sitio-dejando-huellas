<template>
    
</template>

<script>
export default {
    async asyncData ({ params, $strapi }) {
        const noticias = await $strapi.find("noticias", {
            slug: params.slug,
        });
        return {
            noticia: noticias[0]
        };
    },
    methods: {
        getStrapiMedia,
        moment
    }
}

</script>