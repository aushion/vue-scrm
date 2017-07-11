<template>
 <div class="app-manage">
   <v-header title="应用管理"></v-header>
   <div class="my-app">
    <div class="title">我的功能</div>
     <ul class="app-list">

     </ul>
   </div>
   <div class="all-app">
     <div class="title">全部功能</div>
     <ul class="all-app-list"></ul>
   </div>
 </div>
</template>

<script>
  import header from '@/components/header/header'
  export default {
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus">
.app-manage
  height: 100%
  width: 100%
  display flex
  flex-direction: column
  .my-app
    flex: 1
    background #7e8c8d
  .all-app
    flex: 1
    background #999999
</style>
