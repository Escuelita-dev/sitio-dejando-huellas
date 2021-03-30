
<template>
    <!-- Callout Style Start -->
      <section class="wide-tb-100 bg-scroll bg-img-1 pos-rel callout-style-1">
          <div class="bg-overlay black opacity-50"></div>
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-7">
                      <h1 class="heading-main light-mode orange">
                          <small> {{frase.Subtitulo}} </small>
                          {{frase.Titulo}}
                      </h1>
                      <!-- <a href="donation-page.html" class="btn btn-default">Donate Now</a> -->
                  </div>
              </div>
          </div>
      </section>
      <!-- Callout Style End -->
</template>

<script>
export default {
  props: {
    frase: {
      type: Object,
      required: true,
    }
  }
}
</script>



