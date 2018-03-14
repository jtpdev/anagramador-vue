import Vue from 'vue'
import Router from 'vue-router'
import Anagramador from '@/components/Anagramador'
import Instrucoes from '@/components/Instrucoes'

Vue.use(Router)

export var routes = [
  {
    path: '/',
    name: 'anagramador',
    component: Anagramador,
    descricao: 'Anagramador'
  },
  {
    path: '/instrucoes',
    name: 'instrucoes',
    component: Instrucoes,
    descricao: 'Instruções'
  }
];

export default new Router({
  mode: 'history',
  routes
})
