class Documento {
    constructor(semana, data, documento, categoria, observacoes, arquivo) {
        this._semana = semana;
        this._data = new Date(data.getTime());
        this._documento = documento;
        this._categoria = categoria;
        this._observacoes = observacoes;
        this._arquivo = arquivo;
    }

    get semana() {
        return this._semana;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get documento() {
        return this._documento;
    }

    get categoria() {
        return this._categoria;
    }

    get observacoes() {
        return this._observacoes;
    }

    get arquivo() {
        return this._arquivo;
    }
}