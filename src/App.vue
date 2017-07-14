<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        transitionName: 'slide-right'
      }
    },
    methods: {},
    watch: {
      '$route' (to, from) {
        let isBack = this.$router.isBack;  //  监听路由变化时的状态为前进还是后退
        if (isBack) {
          this.transitionName = 'slide-right'
        } else {
          if (to.path === '/home' || to.path === '/server' || to.path === '/my') {
            this.transitionName = 'fade'
          } else {
            this.transitionName = 'slide-left'
          }
        }
        this.$router.isBack = false
      }
    }
  }
</script>

<style lang="stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh
    .router
      position: absolute
      width: 100%
      transition: all .4s ease;
     .fade-enter,
     .fade-leave-active{
       opacity: 0
     }
    .slide-left-enter,
    .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(100%, 0);
      transform: translate(100%, 0);
    }
    .slide-left-leave-active,
    .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-100%, 0);
      transform: translate(-100%, 0);
    }
</style>
