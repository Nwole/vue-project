import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '@/views/DashBoard.vue'
import Address from '@/views/Address.vue'
import Contact from '@/views/Contact.vue'
import Verification from '../views/Verification.vue'
import AccountDetails from '../views/AccountDetails.vue'
import MainBar from '../components/MainBar'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashBoard,
    children:[
      {
        path: '/mainbar',
        name: 'mainbar',
        component: MainBar
      },
     
      {
        path: '/address',
        name: 'address',
        component: Address
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      },
      {
        path: '/verification',
        name: 'verification',
        component: Verification
      },
      {
        path: '/account',
        name: 'account',
        component: AccountDetails
      },
    ]
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
