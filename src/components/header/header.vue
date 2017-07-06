<template>
  <div id="header">
    <span class="icon icon-arrow-left-2" @click="goBack()"></span>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
  import router from '../../router/index'
  export default {
    props: ['title'],
    methods: {
      goBack: function () {
        router.go(-1)
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../commom/css/iconfont.css"
  #header
    display: flex
    width: 100%
    height: 45px
    line-height 45px
    text-align center
    .icon
      vertical-align top
      font-size: 20px
      flex 0 1 5%
    h1
      flex 0 1 90%
</style>
