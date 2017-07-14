<template>
  <div class="apply">
    <ul class="apply-wrapper">
      <li v-for="item in appList" class="-item  border-1px">
        <div class="status" :class="statusClass"></div>
        <div class="apply-icon"><img :src="item.icon"></div>
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      appList: {
        type: Object
      }
    },
    data () {
      return {
        statusClass: ''
      }
    },

    created () {
      if (this.appList.type === 'home') {
        this.statusClass = ''
      } else if (this.appList.type === 'operable') {
        this.statusClass = 'del'
      } else {
        this.statusClass = 'choosed'
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../commom/css/mixin.styl"
  .apply-wrapper
    display flex
    flex-wrap wrap
    font-size: 12px
    .apply-item
      position: relative
      flex 0 1 20%
      width: 20%
      .apply-icon
        padding: 10px
      .status
        position: absolute
        top: 5px
        right: 4px
        width: 15px
        &.del
          bg-image('del.png')
        &.add
          bg-image('add.png')
        &.choosed
          bg-image('choosed.png')
</style>
