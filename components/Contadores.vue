<template>

        <section class="wide-tb-100 p-0">
            <div class="container">
                <div class="row d-flex align-items-center">

                    <!-- Counter Col Start -->
                    <div class="col col-12 col-lg-4 col-md-6" v-for="(contador, index) in contadores" :key="index">

                        <div class="counter-style-box small-box">
                            <!-- Revisar porque no se muestra la cantidad (Es un int) -->
                            <div class="counter-txt"><span class="counter"> {{contador.cantidad}} </span>+</div>
                            <div> {{contador.comentario}} </div>
                        </div>

                    </div>
                    <!-- Counter Col End -->
                </div>
            </div>
        </section>

</template>

<script>
export default {
  props: {
    contadores: {
      type: Array,
      required: true,
    }
  }
}
</script>
