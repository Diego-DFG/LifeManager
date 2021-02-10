class Compras {
    constructor(data, produto='', quantidade, valor) {
        this._data = new Date(data.getTime());
        this._produto = produto;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get produtos() {
        return this._produto;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}