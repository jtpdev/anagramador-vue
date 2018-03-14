<template>
  <div>
      <p><p>
      <img src="img"/>
      <button v-instrucao="instrucoes[--counter]" v-show="counter > 0">Anterior</button>
      <button v-instrucao="instrucoes[++counter]" v-show="counter < (counter.lenght-1)">Próximo</button>
  </div>
</template>

<script>
export default {
    data() {
        counter: 0;
        instrucoes: [
            'Clique no botão referente a letra desejada para criar um anagrama',
            'Espere que a palavra ser formada para que suas letras voltem',
            'Clique no botão limpar para começar a escrever uma outra palavra'
        ]
    },
    props: ['img']
}
</script>

<style>

</style>
