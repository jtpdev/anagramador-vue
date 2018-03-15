<template>
  <div>
      <p>{{ instrucoes[0] }}</p>
      <button v-instrucao:anterior="instrucoes">Anterior</button>
      <button v-instrucao.proxima="instrucoes">Próximo</button>
  </div>
</template>

<script>

export default {
    props: ['instrucoes']
}
</script>

<style>

</style>
