<template>
  <div id="home">
    <div class="wrapper">
      <!--轮播-->
      <div class="swiper-box">
        <swipe class="my-swipe">
          <swipe-item v-for="(item,index) in slides" :key="index">
            <img :src="item.imgSrc">
          </swipe-item>
        </swipe>
      </div>
      <!--管理应用-->
      <div class="nav">
        <v-apply :applyList="appList">
          <li class="apply-item">
            <router-link to="/appManage">
              <div class="apply-icon"><img src="../home/imgs/more.png"></div>
              更多
            </router-link>
          </li>
        </v-apply>

      </div>
      <!--认证车主-->
      <div class="redirect-img">
        <img src="../home/imgs/redirect.png">
      </div>
      <!--社区跳转-->
      <div class="comm-img">
        <div class="comm-link comm-down" data-value="club_sign"><img src="../home/imgs/sign.jpg"></div>
        <div class="comm-link comm-down" data-value="club_new_activity"><img
          src="../home/imgs/fans_activity.jpg"></div>
        <div class="comm-link comm-up" data-value="club_home"><img src="../home/imgs/club_home.png"></div>
        <div class="comm-link comm-up" data-value="club_wiki_expert"><img
          src="../home/imgs/club_wiki_expert.png"></div>
        <div class="comm-link comm-up" data-value="club_wiki_fan"><img src="../home/imgs/club_wiki_fan.png">
        </div>
      </div>
    </div>
    <div class="home-footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
  require('vue-swipe/dist/vue-swipe.css')
  import {Swipe, SwipeItem} from 'vue-swipe'
  import footer from '../footer/footer'
  import apply from '../apply/apply.vue'
  const ERR_NO = 0
  export default {
    name: 'home',
    data () {
      return {
        appList: {},
        slides: [{imgSrc: 'http://tse4.mm.bing.net/th?id=OIP.hXmJuA3sKzIH8xZue81frAEsC7&pid=15.1'},
          {imgSrc: 'http://pic1.win4000.com/wallpaper/a/544725ba1dc70.jpg'},
          {imgSrc: 'http://tse1.mm.bing.net/th?id=OIP.EaffCH2CjS6xY25u8sjBkwEsCo&pid=15.1'}]
      }
    },
    created () {
      let a = window.localStorage.getItem('myAppArr')
      this.$http.get('./api/applyData').then((response) => {
        if (response.data.errno === ERR_NO) {
          this.appList = response.data.data.choosedApp
          a ? this.appList.data = JSON.parse(a).concat(this.appList.data.pop()) : this.appList
        }
      })
    },
    mounted () {
    },
    components: {
      'v-footer': footer,
      'swipe': Swipe,
      'swipe-item': SwipeItem,
      'v-apply': apply
    }
  }

</script>

<style lang="stylus">
  #home
    width: 100%
    height: 100%
    background-color: #f2f2f2
    img
      width: 100%
    .home-footer
      position: fixed
      width: 100%
      z-index: 50
      left: 0
      bottom: 0
    .wrapper
      .swiper-box
        width: 100%
        height: 144px;
      .nav
        width: 100%
        .apply-wrapper
          display flex
          flex-wrap wrap
          font-size: 12px
          .apply-item
            flex 0 1 20%
            width: 20%
            .apply-icon
              padding: 10px
      .redirect-img
        width: 100%
        padding: 10px 0;
      .comm-img
        padding: 0 10px;
        display flex
        flex-wrap wrap
        justify-content space-between
        .comm-down
          flex: 0 1 49%;
          width 49%
        .comm-up
          flex 0 1 33%
          width 33%
</style>
