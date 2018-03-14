<template>
  <div>
      <instrucao :instrucoes="instrucoes"/>
  </div>
</template>

<script>
import Instrucao from "./Instrucao";

export default {
  components: {
    instrucao: Instrucao
  },

  data() {
    return {
      instrucoes: [
        "Clique no botão referente a letra desejada para criar um anagrama",
        "Espere que a palavra ser formada para que suas letras voltem",
        "Clique no botão limpar para começar a escrever uma outra palavra"
      ]
    };
  }
};
</script>

<style>

</style>