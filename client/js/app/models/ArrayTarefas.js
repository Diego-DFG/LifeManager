class ArrayTarefas {
    constructor(armadilhas) {
        this._tarefas = [];
        this._armadilhas = armadilhas;
    }

    adiciona(tarefa) {
        this._tarefas.push(tarefa);
        this._armadilhas(this);
    }

    get tarefas() {
        return [].concat(this._tarefas);
    }

    esvazia() {
        this._tarefas = [];
        this._armadilhas(this);
    }
}