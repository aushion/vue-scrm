<template>
  <div id="server">
    <div class="server-wrapper" ref="serverWrapper">
      <swipe class="car-list" :auto="0">
        <swipe-item v-for="(item,index) in data" :key="index"  class="car-item">
          <div class="img-wrapper">
            <img :src="item">
          </div>
        </swipe-item>
      </swipe>
    </div>
    <div class="server-footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
  import footer from '../footer/footer'
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    props: {},
    data () {
      return {
        data: ['../../static/imgs/carPics/CS15.png', '../../static/imgs/carPics/CS75.png', '../../static/imgs/carPics/CS35.png']
      }
    },
    mounted () {
    },
    components: {
      'v-footer': footer,
      'swipe': Swipe,
      'swipe-item': SwipeItem
    }
  }
</script>

<style lang="stylus">
  #server
    width 100%
    height: 100%
    display flex
    flex-direction column
    .server-wrapper
      width: 100%
      flex: 5
      display flex
      background-size 100% 100%
      background-image url('../server/imgs/back.jpg')
      .car-list
        width: 80%
        height: 60%
        border-radius 4%
        background-color white
        margin: auto;
        .car-item
          width: 100%
          display table
          .img-wrapper
            display table-cell
            text-align: center;
            vertical-align: middle;
    .server-footer
      position: fixed
      width: 100%
      z-index: 50
      left: 0
      bottom: 0
</style>
