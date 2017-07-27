<template>
  <div class="apply">
    <ul class="apply-wrapper">
      <li v-for="(item,index) in getData" class="apply-item" :class="showBorder" v-on:click="handle(index)">
        <div class="status" :class="showClass"></div>
        <div class="apply-icon"><img :src="item.icon"></div>
        {{item.name}}
        <router-link :to="item.url" v-show="applyList.type === 'home'">
        </router-link>
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
      },
      showBorder () {
        let type = this.applyList.type
        let borderClass
        if (type === 'operable' || type === 'allApps') {
          borderClass = 'border-round'
        }
        return borderClass
      }
    },
    methods: {
      handle (i) {
        if (this.applyList.type === 'operable') {
          this.$emit('del', i)
        } else if (this.applyList.type === 'allApps') {
          this.$emit('add', i)
        }
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
      box-sizing border-box
      flex 0 1 auto
      width: 20%
      &.border-round
        border-bottom: 1px solid #ccc
        border-right: 1px solid #eee
      .apply-icon
        padding: 10px
      .status
        position: absolute
        top: 5px
        right: 0
        width: 15px
        height: 15px
        &.del
          bg-image('del.png')
          background-size: 100%
          background-repeat no-repeat
        &.add
          bg-image('add.png')
          background-size: 100%
          background-repeat no-repeat
        &.choosed
          bg-image('choosed.png')
          background-size: 100%
          background-repeat no-repeat
      a
        position: absolute
        top: 0
        left: 0
        width: 100%;
        height: 100%
</style>
