import Vue from 'vue';

Vue.directive('instrucao', {

    bind(el, binding) {
        el.addEventListener('click', function() {
            let paragrafo = el.parentElement.childNodes[0];
            let instrucoes = binding.value;
            let instrucao = paragrafo.innerHTML;
            if(binding.arg == 'anterior'){
                for(let i = 0; i < instrucoes.length; i++){
                    if(paragrafo.innerHTML == instrucoes[i]
                        && i != 0) 
                        instrucao = instrucoes[i-1];
                    }
                }
                if(binding.modifiers.proxima){
                    for(let i = 0; i < instrucoes.length; i++){
                            if(paragrafo.innerHTML == instrucoes[i]
                                && (i+1) != instrucoes.length) 
                                instrucao = instrucoes[i+1];
                        }
            }
            paragrafo.innerHTML = instrucao;
        });
    }

});
