<template>
  <div id="app">
    <cabecalho/>
    <router-view/>
  </div>
</template>

<script>
import Cabecalho from './components/Cabecalho'

export default {
  name: 'App',
  components: {
    'cabecalho': Cabecalho
  }
}
</script>

<style lang="scss">

@import './estilo.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: $cor-padrao;
  color: white;
  margin: 5px;
  border-color: $cor-padrao;
  border-radius: 5px;
  font-size: 20px;
}
</style>
