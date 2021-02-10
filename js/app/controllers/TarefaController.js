class TarefaController {
    constructor() {
        
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputTitulo = $('#titulo');
        this._inputQuantidade = $('#quantidade');
        this._inputStatus = $('#status');

        this._tarefas = new ArrayTarefas();

        this._tarefaView = new TarefaView($('#tarefaView'));
        this._tarefaView.update(this._tarefas);

    }

    adiciona(event) {

        event.preventDefault();

        this._tarefas.adiciona(this._criaTarefa());

        this._tarefaView.update(this._tarefas);

        this._limpaFormulario();

    }

    apaga() {

        this._tarefas.esvazia();

        this._tarefaView.update(this._tarefas);

    }

    _criaTarefa() {

        let tarefa = new Tarefa(
            new Date(this._inputData.value.replace(/-/g, ',')),
            this._inputTitulo.value,
            parseInt(this._inputQuantidade.value),
            this._inputStatus.value
        );

        return tarefa;

    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputProduto.value = '';
        this._inputQuantidade.value = 1;
        this._inputStatus.value = '';
        this._inputData.focus();

    }
}