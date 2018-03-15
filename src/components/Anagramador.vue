<template>
  <div class="conteudo">
    <transition name="mensagem">
      <div class="mensagem" v-show="mensagem">
          {{ mensagem }}
      </div>
    </transition>
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
              <div class="palavra" v-show="palavrasEncontradas.indexOf(palavra.anagrama) > -1">
                {{ palavra.anagrama }}
              </div>
              <transition name="representacao">
                <div class="palavra representacao" v-show="palavrasEncontradas.indexOf(palavra.anagrama) == -1">
                  {{ palavra.representacaoDaPalavra }}
                </div>
              </transition>
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
      anagrama: "",
      mensagem: ""
    };
  },

  methods: {
    inserirLetra(letra, indice) {
      this.anagrama += letra;
      this.botoesRemovidos.push(indice);
      if (
        this.palavras.indexOf(this.anagrama) > -1 &&
        this.palavrasEncontradas.indexOf(this.anagrama) == -1
      ) {
        this.palavrasEncontradas.push(this.anagrama);
        if (this.palavrasEncontradas.length == 1) {
          this.mensagem = "Parabéns, você encontrou seu primeiro anagrama.";
        }
        if (this.palavrasEncontradas.length == this.palavras.length - 1) {
          this.mensagem = "Vamos lá, só falta uma.";
        }
        if (this.palavrasEncontradas.length == this.palavras.length) {
          this.mensagem = "Parabéns, você encontrou todos os anagramas!";
        }
        setTimeout(() => (this.mensagem = ""), 2500);
        this.limparAnagrama();
      }
    },
    limparAnagrama() {
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

<style lang="scss" scoped>

@import '../estilo.scss';

li {
  list-style: none;
  display: inline;
}

.palavra {
  width: 25%;
  display: inline-block;
  float: left;
  font-size: 20px;
  color: $cor-padrao;
  margin-bottom: 15px;
}

.representacao {
  color: tomato;
}

.mensagem {
  background-color: rgba($cor-padrao, 0.5);
  color: white;
  padding: 15px;
}

.mensagem-enter,
.mensagem-leave-to {
  opacity: 0;
}

.mensagem-enter-active,
.mensagem-leave-active {
  transition: opacity 0.3s;
}

</style>