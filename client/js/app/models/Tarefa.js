class Tarefa {
    constructor(agua, data, estudos, projetos, pessoal) {
        this._agua = agua;
        this._data = new Date(data.getTime());
        this._estudos = estudos;
        this._projetos = projetos;
        this._pessoal = pessoal;
        Object.freeze(this);
    }

    get agua() {
        return this._agua;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get estudos() {
        return this._estudos;
    }

    get projetos() {
        return this._projetos;
    }

    get pessoal() {
        return this._pessoal;
    }

}

