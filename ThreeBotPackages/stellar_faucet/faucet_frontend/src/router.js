import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import fundAccount from './components/fundAccount'

Vue.use(Router)

export default new Router({
  base: '/threefoldfoundation/stellar_faucet',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/callback',
      name: 'callback',
      component: fundAccount
    }
  ]
})
