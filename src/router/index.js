import Vue from 'vue'
import Router from 'vue-router'
import Anagramador from '@/components/Anagramador'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'anagramador',
      component: Anagramador
    }
  ]
})
