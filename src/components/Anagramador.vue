<template>
  <div class="conteudo">
    <div class="botoes">
        <button v-for="letra in letras">{{ letra }}</button>
    </div>
    <div class="palavras">
        <ul>
            <li v-for="palavra in palavrasEscondidas">
              <div class="palavra">
                {{ palavra }}
              </div>
            </li>
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
      palavras: [],
      palavrasEscondidas: []
    };
  },

  created() {
    this.service = new AnagramadorService(this.$resource);

    this.service.gerarAnagramas(3, 7).then(anagramador => {
      this.letras = anagramador.letras;
      this.palavras = anagramador.anagramas;
      this.palavrasEscondidas = this.service.esconderPalavras(this.palavras);
    });
  }
};
</script>

<style lang="scss">

$cor-do-botao: tomato;

button {
  background-color: $cor-do-botao;
  color: white;
  margin: 5px;
  border-color: $cor-do-botao;
  border-radius: 5px;
}

li {
  list-style: none;
  display: inline;
}

.palavra {
  width: 25%;
  display: inline-block;
  float: left;
}
</style>
