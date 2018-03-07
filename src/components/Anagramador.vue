<template>
  <div class="conteudo">
    <div class="botoes">
        <button v-for="letra in letras">{{ letra }}</button>
    </div>
    <div class="palavras">
        <ul>
            <li v-for="palavra in palavras">{{ palavra }}</li>
        </ul>
    </div>
  </div>
</template>


<script>
import AnagramadorService from "../services/AnagramadorService";

export default {
  data() {
    return {
      letras: [],
      palavras: []
    };
  },

  created() {
    this.service = new AnagramadorService(this.$resource);

    this.service
      .gerarAnagramas(3, 7)
      .then(anagramador => {
        this.letras = anagramador.letras;
        this.palavras = anagramador.anagramas;
      });
  }
};
</script>

<style>

</style>
