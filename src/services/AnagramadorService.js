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

}