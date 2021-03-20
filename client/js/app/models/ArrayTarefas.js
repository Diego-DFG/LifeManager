class ArrayTarefas {
    constructor() {
        this._tarefas = [];
    }

    adiciona(tarefa) {
        this._tarefas.push(tarefa);
    }

    get tarefas() {
        return [].concat(this._tarefas);
    }

    esvazia() {
        this._tarefas = [];
    }
}