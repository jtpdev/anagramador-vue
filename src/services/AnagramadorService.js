export default class AnagramadorService {

    constructor(resource) {
        this._resource = resource('static/json/dicionario.json');
    }

    dicionario() {
        return this._resource
            .query()
            .then(res => res.json(), err => {
                throw new Error('Dicionário não encontrado');
            });
    }

    buscarAnagramas(palavra, min = 3, max = 7){
        return this.gerarAnagramas(min, palavra.length, palavra.toUpperCase());
    }

    gerarAnagramas(min, max, palavraBase = '') {
        return this.dicionario()
            .then(palavras => {
                this._palavras = palavras;
                if(palavraBase.length == 0){
                    palavraBase = this._getPalavraPorTamanho(max)
                }
                let letras = palavraBase.split('');
                let anagramas = this._encontrarPalavras(palavraBase, min, max);
                anagramas = anagramas.sort((p1, p2) => p1.length - p2.length);
                letras = letras.sort((l1, l2) => Math.random());
                return { letras, anagramas };
            });
    }

    esconderPalavras(palavras) {
        let anagramas = [];
        palavras.forEach(
            anagrama  => {
                anagramas.push({
                    representacaoDaPalavra: anagrama.replace(/[abcdefghijklmnopqrstuvwxyz]/ig, '*'),
                    anagrama 

                });
            });
        return anagramas;
    }

    _getPalavraPorTamanho(max) {
        let palavrasComTamanhoMaximo = this._palavras
            .filter(p => p.length == max);
        let indice = Math.floor(Math.random() * palavrasComTamanhoMaximo.length);
        return palavrasComTamanhoMaximo[indice];
    }

    _encontrarPalavras(palavraBase, min, max) {
        return this._palavras.filter(
            palavra => {
                return palavra.length >= min
                    && palavra.length <= max
                    && this._temTodasAsLetras(palavraBase, palavra)
                    && !this._temLetrasAMais(palavraBase, palavra);
            }
        );
    }

    _temTodasAsLetras(palavraBase, palavra) {
        let tem = true;
        palavra.split('').forEach(letra => {
            if (!palavraBase.includes(letra)) {
                tem = false;
            }
        });
        return tem;
    }

    _temLetrasAMais(palavraBase, palavra) {
        let tem = false;
        palavraBase.split('').forEach(
            letra => {
                if ((palavra.match(new RegExp(letra, 'g')) || []).length >
                    (palavraBase.match(new RegExp(letra, 'g')) || []).length) {
                    tem = true;
                }
            }
        );
        return tem;
    }


}