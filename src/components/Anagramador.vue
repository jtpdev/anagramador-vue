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
export default {
  data() {
    return {
      letras: [],
      palavras: []
    };
  }
}
</script>

<style>

</style>
