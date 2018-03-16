import Vue from 'vue'
import Router from 'vue-router'
import Anagramador from '@/components/Anagramador'
import Instrucoes from '@/components/Instrucoes'
import BuscadorDeAnagramas from '@/components/BuscadorDeAnagramas'

Vue.use(Router)

export const routes = [
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
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: BuscadorDeAnagramas,
    descricao: 'Buscador de anagramas'
  }
];

export default new Router({
  mode: 'history',
  routes
})
