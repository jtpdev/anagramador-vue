<template>
  <div>
      <p></p>
      <img src="img"/>
      <button v-instrucao="instrucoes[--counter]" v-show="counter > 0">Anterior</button>
      <button v-instrucao="instrucoes[++counter]" v-show="counter < (counter.lenght-1)">Próximo</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    props: ['instrucoes']
}
</script>

<style>

</style>
