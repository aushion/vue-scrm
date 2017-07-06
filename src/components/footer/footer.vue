<template>
 <div id="footer">
   <div class="footer-wrapper">
     <div class="footer-item">
       <router-link to="/home">
         <div class="icon icon-home"></div>
         首页
       </router-link>

     </div>
     <div class="footer-item">
       <router-link to="/server">
         <div class="icon icon-server"></div>
         服务
       </router-link>

     </div>
     <div class="footer-item">
       <router-link to="/my">
         <div class="icon icon-my"></div>
         我
       </router-link>

     </div>
   </div>

 </div>
</template>

<script>
export default {
  name: 'footer',
  props: {
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
  @import "../../commom/css/iconfont.css"
  #footer
    width: 100%
    height: 50px
    font-size: 14px
    color: #999
    z-index: 999
    .footer-wrapper
      display flex
      height: 100%
      width: 100%
      .footer-item
        flex: 1
        text-align center
        &.active
          color: rgb(3, 169, 244)
        & > a
          display: block
          font-size: 14px
          &.active
            color rgb(3, 169, 244)
            .icon
              color: rgb(3, 169, 244)
        .icon
          font-size: 28px
</style>
