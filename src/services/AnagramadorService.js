export default class AnagramadorService {

    constructor(resource) {
        this._resource = resource('static/json/dicionario.json');
    } 

    dicionario() {

        return this._resource
            .query()
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Não foi possível obter as fotos');
            });
    }  

}