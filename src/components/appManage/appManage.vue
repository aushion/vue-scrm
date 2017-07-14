<template>
  <div class="app-manage">
    <v-header title="应用管理"></v-header>
    <div class="my-app">
      <div class="title">我的功能</div>
      <ul class="app-list">
        <li v-for="item in myApps" class="myApp-item  border-1px">
          <div class="del-icon"><img src="../../../static/imgs/icon/del.png"></div>
          <div class="apply-icon"><img :src="item.icon"></div>
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="all-app">
      <div class="title">全部功能</div>
      <ul class="all-app-list">
        <li v-for="item in allApps" class="allApp-item">
          <div class="add-icon" v-if="show"><img src="../../../static/imgs/icon/add.png"></div>

          <div class="apply-icon"><img :src="item.icon"></div>
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import header from '@/components/header/header'
  var applyData = require('../../../static/data/links.json')
  export default {
    data () {
      return {
        myApps: applyData.buttons.data,
        allApps: applyData.links.data,
        myIds: [],
        show: false
      }
    },
    created () {
      this.myApps.forEach((item, index, arr) => {
        this.myIds.push(item.id)
      })
      this.allApps.forEach((item, index, arr) => {
        if (this.myIds.indexOf(item.id) === -1) {
          this.show = true;
        }
      })
    },
    computed: {},
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus">
  @import "../../commom/css/mixin.styl"
  .app-manage
    height: 100%
    width: 100%
    display flex
    flex-direction: column
    img
      width: 100%
    .apply-icon
      padding: 12px
    .title
      width: 100%
      text-align start
      font-size 12px
      padding: 0 0 10px 10px
    .my-app
      flex: 1
      background #f2f2f2
      padding-top: 20px
      .app-list
        display flex
        flex-wrap wrap
        font-size 12px
        background: #fff
        .myApp-item
          position: relative
          flex 0 1 20%
          width: 20%
          padding-bottom 10px
          border-1px(#ccc)
          .del-icon
            position: absolute
            top: 5px
            right: 4px
            width: 15px
    .all-app
      flex: 1
      background #f2f2f2
      padding-top: 20px
      .all-app-list
        display flex
        flex-wrap wrap
        font-size 12px
        background #fff
        .allApp-item
          flex: 0 1 20%
          width: 20%
          position: relative
          .add-icon
            position: absolute
            top: 5px
            right: 4px
            width: 15px
</style>
