import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import server from '@/components/server/server'
import my from '@/components/my/my'
import orderDrive from '@/components/orderDrive/orderDrive'
import parts from '@/components/parts/parts'
import appManage from '@/components/appManage/appManage'
// 给router添加一个方法goback
Router.prototype.goBack = function () {
  this.isBack = true
  this.go(-1)
}
Router.prototype.tab = function () {
  this.isChange = true
}
Vue.use(Router)

const routes = [
  {path: '/home', component: home},
  {path: '/server', component: server},
  {path: '/my', component: my},
  {path: '/orderDrive', component: orderDrive},
  {path: '/parts', component: parts},
  {path: '/appManage', component: appManage}
]
export default new Router({
  routes: routes,
  linkActiveClass: 'active'
})
