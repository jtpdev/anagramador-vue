<template>
  <div>
      <p>{{ instrucoes[0] }}</p>
      <button v-instrucao="instrucoes[anterior()]" v-show="counter > 0">Anterior</button>
      <button v-instrucao="instrucoes[proxima()]" v-show="counter < (counter.lenght-1)">Próximo</button>
  </div>
</template>

<script>

export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        proxima(){
            // this.counter = this.counter+1
            return 1;
        },
        anterior(){
            // this.counter = this.counter-1
            return 1;
        }
    },
    props: ['instrucoes']
}
</script>

<style>

</style>
