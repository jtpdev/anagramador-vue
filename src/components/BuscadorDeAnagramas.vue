<template>
    <div>
        <form @submit.prevent="anagramarPalavra()">
            <label>
                Digite uma palavra
                <input type="text" v-model="palavra" v-on:keypress="validaTecla($event)">
                <input type="text" v-model="min" v-on:keypress="validaNumero($event)">
                <input type="text" v-model="max" v-on:keypress="validaNumero($event)">
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
            min: 3,
            max: 7,
            anagramas: []
        }
    },
    methods: {
        anagramarPalavra(){
            this.service.buscarAnagramas(this.palavra, this.min, this.max)
                .then(anagramador => 
                this.anagramas = anagramador.anagramas);
        },
        validaTecla(event){
            if(!/^[a-zA-Z]+$/.test(event.key)){
                event.preventDefault();
            }
        },
        validaNumero(event){
            if(!/^[0-9]+$/.test(event.key)){
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
