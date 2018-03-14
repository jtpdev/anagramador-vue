import Vue from 'Vue';

Vue.directive('instrucao', {

    bind(el, binding) {
        el.addEventListener('click', function() {
            let instrucao = binding.value;
            el.parentElement.childNodes[0].innerHTML = instrucao;
        });
    }

});
