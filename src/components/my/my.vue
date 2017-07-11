<template>
  <div id="my">
    I am you
    <div class="my-footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
  import footer from '../../components/footer/footer.vue'
  export default {
    components: {
      'v-footer': footer
    }
  }
</script>

<style lang="stylus">
  #my
    width: 100%
    height: 100%
    .my-footer
      position: fixed
      width: 100%
      z-index: 50
      left: 0
      bottom: 0
</style>
