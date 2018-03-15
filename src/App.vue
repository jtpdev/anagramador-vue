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
$cor-do-botao: steelblue;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: $cor-do-botao;
  color: white;
  margin: 5px;
  border-color: $cor-do-botao;
  border-radius: 5px;
  font-size: 20px;
}
</style>
