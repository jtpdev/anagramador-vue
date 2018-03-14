<template>
  <nav>
      <ul>   
          <li v-for="rota in rotas">
            <router-link :to="rota.path ? rota.path : '/'">
              {{ rota.descricao }}
            </router-link>
          </li>
      </ul>
    </nav>
</template>

<script>

import { routes } from '../router';

export default {
    data() {
        return {
            rotas: routes
        }
    }
}

    
</script>

<style>

</style>