<template>

        <!-- Welcome Home Style Start -->
        <section class="wide-tb-100 pb-5 bg-green">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-12">
                        <h1 class="heading-main">
                            <small> {{contenido.subtitulo}} </small>
                            {{contenido.titulo}}
                        </h1>
                        <p>{{contenido.contenido}}</p>
                    </div>
                </div>
            </div>
        </section>

</template>

<script>
export default {
  props: {
    contenido: {
      type: Object,
      required: true,
    }
  }
}
</script>
