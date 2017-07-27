<template>
  <div class="app-manage">
    <v-header title="应用管理"></v-header>
    <div class="my-app">
      <div class="title">我的功能</div>
      <v-apply :applyList="myApps" class="bgcolor" v-on:del="delCur"></v-apply>
    </div>
    <div class="all-app">
      <div class="title">全部功能</div>
      <v-apply :applyList="allApps" class="bgcolor" v-on:add="addCur"></v-apply>
    </div>
  </div>
</template>

<script>
  import header from '@/components/header/header'
  import apply from '@/components/apply/apply'
  const ERR_NO = 0;
  export default {
    data () {
      return {
        myApps: {},
        allApps: {},
        myIds: [],
        show: false
      }
    },
    created () {
      let allApplies = window.localStorage.getItem('allApps')
      let myApplies = window.localStorage.getItem('myApps')
      if (!allApplies && !myApplies) {
        this.$http.get('./api/applyData').then((response) => {
          if (response.data.errno === ERR_NO) {
            this.myApps = response.data.data.operable
            this.allApps = response.data.data.allApps
            window.localStorage.setItem('allApps', JSON.stringify(this.allApps)) // 缓存所有应用
            window.localStorage.setItem('myApps', JSON.stringify(this.myApps)) // 缓存已操作应用
            window.localStorage.setItem('myAppArr', JSON.stringify(this.myApps.data)) // 缓存已操作应用的数组
          }
        })
      } else {
        this.allApps = JSON.parse(allApplies)
        this.myApps = JSON.parse(myApplies)
      }
    },
    computed: {
    },
    methods: {
      delCur (index) {
        this.myApps.data.splice(index, 1);
        window.localStorage.setItem('myAppArr', JSON.stringify(this.myApps.data))
        window.localStorage.setItem('myApps', JSON.stringify(this.myApps)) // 缓存已操作应用
      },
      addCur (index) {
        let myAppIds = this.myApps.data.map(v => v.id) // 已选择的应用id集合
        let allAppsIds = this.allApps.data.map(v => v.id) // 所用应用id集合
        //          let diff = allAppsIds.filter(v => !myAppIds.includes(v))
        if (myAppIds.indexOf(this.allApps.data[index].id) === -1) {
          this.myApps.data.push(this.allApps.data[index])
          window.localStorage.setItem('myAppArr', JSON.stringify(this.myApps.data))
          window.localStorage.setItem('myApps', JSON.stringify(this.myApps)) // 缓存已操作应用
        }
      }

    },
    components: {
      'v-header': header,
      'v-apply': apply
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
      text-align start
      font-size 12px
      padding: 0 0 10px 10px
    .my-app, .all-app
      flex: 1
      background #f2f2f2
      padding-top: 20px
      .bgcolor
        background-color #fff


</style>
