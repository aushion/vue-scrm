<template>
  <div id="part">
    <v-header title="原厂配件"></v-header>
    <div class="search-wrapper">
      <span class="icon icon-search"></span><input type="text" class="search-btn" v-model="keywords"
                                                   @keyup.enter="onEnter">
    </div>
    <scroll class="parts-wrapper" :data="data" :pullup="pullup" @scrollToEnd="loadMore" :pulldown="pulldown"
            @pulldown="refresh">
      <ul class="parts-list content">
        <mt-spinner class="spin-top" type="snake" color="lightblue" :size="24" v-show="show"></mt-spinner>
        <li class="parts-item" v-for="item in data">
          <div class="name">{{item.name}}</div>
          <div class="code">{{item.code}}</div>
          <div class="price">{{item.retailPrice}}.00元</div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  const BASEPATH = 'http://scrmtest.changan.com.cn/scrm-app-web/'
  const ERR_OK = 0
  import header from '../header/header.vue'
  import {Spinner} from 'mint-ui'
  import BScroll from 'better-scroll'
  import Scroll from '../scroll/scroll'
  export default {
    data () {
      return {
        keywords: '',
        show: false,
        pullup: true,
        pulldown: true,
        pageIndex: 0,
        pageSize: 20,
        data: []
      }
    },
    created () {
    },
    methods: {
      loadData () {
        this.show = true;
        this.$http.get(BASEPATH + 'server/part/list', {
          params: {
            word: this.keywords,
            pageSize: this.pageSize,
            pageIndex: this.pageIndex
          }
        }).then((res) => {
          if (res.data.result === ERR_OK) {
            this.show = false;
            this.data = res.data.data.concat(this.data)
          }
        })
      },
      refresh () {
        this.data = [];
        this.pageIndex = 0;
        this.loadData();
      },
      loadMore () {
        if (this.data.length < 20) {
          return
        }
        this.pageIndex++;
        this.loadData()
      },
      onEnter () {
        if (this.keywords.trim()) {
          this.data = [];
          this.loadData()
        }
      }
    },
    components: {
      'v-header': header,
      'mt-spinner': Spinner,
      'scroll': Scroll
    }
  }
</script>

<style lang="stylus">
  @import "../../commom/css/index.styl"
  #part
    width: 100%
    height: 100%
    .search-wrapper
      width: 90%
      height: 40px
      line-height 40px
      margin: 0 auto
      position: relative
      .icon
        position absolute
        left: 10px
        vertical-align top
      .search-btn
        width: 90%
        padding-left 20px
        background-color #ccc
        outline none
        border-radius 10px
    .parts-wrapper
      width: 100%
      height: 90%
      overflow hidden
      .parts-list
        position relative
        width: 90%
        margin: 0 auto
        .spin-top
          position: absolute
          z-index: 10
          top: 0
          left: 50%
          margin-left: -12px
        .spin-bottom
          position: absolute
          bottom: 0
          left: 50%
          margin-left: -12px
        .parts-item
          display flex
          width: 100%
          flex-wrap: wrap
          padding: 10px 0
          border-1px(rgba(7, 17, 27, .1))
          .name
            flex 0 1 100%
            width: 100%
            text-align left
            font-weight 200
          .code
            flex 0 1 70%
            width: 70%
            color: #999
            font-size 12px
            text-align left
          .price
            flex 0 1 30%
            width: 30%
            color: lightcoral
            font-size: 12px
            font-weight: 800
            text-align right
</style>
