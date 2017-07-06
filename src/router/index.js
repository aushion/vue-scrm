import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import server from '@/components/server/server'
import my from '@/components/my/my'
import orderDrive from '@/components/orderDrive/orderDrive'
import parts from '@/components/parts/parts'

Vue.use(Router)
const routes = [
  { path: '/home', component: home },
  { path: '/server', component: server },
  { path: '/my', component: my },
  { path: '/orderDrive', component: orderDrive },
  { path: '/parts', component: parts }
]
export default new Router({
  routes: routes,
  linkActiveClass: 'active'
})
