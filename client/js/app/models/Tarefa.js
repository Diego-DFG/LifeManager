class Tarefa {
    constructor(agua, data, semana, estudos, projetos, pessoal, status) {
        this._agua = agua;
        this._data = new Date(data.getTime());
        this._semana = semana;
        this._estudos = estudos;
        this._projetos = projetos;
        this._pessoal = pessoal;
        this._status = status;
        Object.freeze(this);
    }

    get agua() {
        return this._agua;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get semana() {
        return this._semana;
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

    get status() {
        return this._status;
    }

}

