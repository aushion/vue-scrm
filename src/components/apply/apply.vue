<template>
  <div class="apply">
    <ul class="apply-wrapper">
      <li v-for="item in getData" class="apply-item  border-1px">
        <div class="status" :class="showClass"></div>
        <div class="apply-icon"><img :src="item.icon"></div>
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      applyList: {
        type: Object
      }
    },
    computed: {
      getData () {
        return this.applyList.data;
      },
      showClass () {
        let statusClass
        if (this.applyList.type === 'home') {
          statusClass = ''
        } else if (this.applyList.type === 'operable') {
          statusClass = 'del'
        } else {
          statusClass = 'choosed'
        }
        return statusClass
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
