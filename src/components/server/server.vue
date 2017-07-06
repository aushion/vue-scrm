<template>
  <div id="server">
    <div class="server-wrapper">
      I am server
    </div>
    <div class="server-footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
  import footer from '../footer/footer'
  export default {
    props: {

    },
    components: {
      'v-footer': footer
    }
  }
</script>

<style lang="stylus">
  #server
    width 100%
    height: 100%
</style>
