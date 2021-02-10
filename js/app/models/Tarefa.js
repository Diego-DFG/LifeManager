class Tarefa {
    constructor(data, titulo='', quantidade, status='') {
        this._data = new Date(data.getTime());
        this._titulo = titulo;
        this._quantidade = quantidade;
        this._status = status;
        Object.freeze(this);
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get titulo() {
        return this._titulo;
    }

    get quantidade() {
        return this._quantidade;
    }

    get status() {
        return this._status;
    }

}

