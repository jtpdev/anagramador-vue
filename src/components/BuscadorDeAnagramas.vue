<template>
    <div>
        <form @submit.prevent="anagramarPalavra()">
            <label>
                Digite uma palavra
                <input type="text" v-model="palavra" v-on:keypress="validaTecla($event)">
                <input type="submit" value="Encontrar">
            </label>
        </form>
        <ul>
            <li v-for="anagrama in anagramas">{{ anagrama }}</li>
        </ul>
    </div>
</template>

<script>
import AnagramadorService from "../services/AnagramadorService";

export default {
    data () {
        return {
            palavra: '',
            anagramas: []
        }
    },
    methods: {
        anagramarPalavra(){
            this.service.buscarAnagramas(this.palavra)
                .then(anagramador => 
                this.anagramas = anagramador.anagramas);
        },
        validaTecla(event){
            if(!/^[a-zA-Z]+$/.test(event.key)){
                event.preventDefault();
            }
        }
    },
    created () {
        this.service = new AnagramadorService(this.$resource);
    }
};
</script>

<style>

</style>
