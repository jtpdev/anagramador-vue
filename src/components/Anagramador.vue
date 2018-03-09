<template>
  <div class="conteudo">
    <div class="botoes">
        <button v-for="(letra, indice) in letras" @click="inserirLetra(letra, indice)" v-show="botoesRemovidos.indexOf(indice) < 0">{{ letra }}</button>
    </div>
    <div>
      {{ anagrama }}
      <button @click="limparAnagrama">Limpar</button>
    </div>
    <div class="palavras">
        <ul>
            <li v-for="palavra in palavrasEscondidas">
              <div class="palavra" v-show="palavrasEncontradas.indexOf(palavra.palavra) > -1">
                {{ palavra.palavra }}
              </div>
              <div class="palavra" v-show="palavrasEncontradas.indexOf(palavra.palavra) == -1">
                {{ palavra.palavraEscondida }}
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
      palavrasEscondidas: [],
      palavrasEncontradas: [],
      botoesRemovidos: [],
      anagrama: ""
    };
  },
  
  methods: {
    inserirLetra(letra, indice) {
      this.anagrama += letra;
      this.botoesRemovidos.push(indice);
      if(this.palavras.indexOf(this.anagrama) > -1 && this.palavrasEncontradas.indexOf(this.anagrama) == -1){
        this.palavrasEncontradas.push(this.anagrama);
        this.limparAnagrama();
      }
    },
    limparAnagrama(){
      this.anagrama = "";
      this.botoesRemovidos.length = 0;
    }
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
