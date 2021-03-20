class TarefaController {
    constructor() {
        
        let $ = document.querySelector.bind(document);

        this._inputAgua = $('#result');
        this._inputData = $('#data');
        
        this._inputEstudos = $('#card_estudos');
        this._inputProjetos = $('#card_projetos');
        this._inputPessoal = $('#card_pessoal');

        this._tarefas = new ArrayTarefas();

        this._tarefaView = new TarefaView($('#tarefaView'));
        this._tarefaView.update(this._tarefas);

    }

    adiciona(event) {

        event.preventDefault();

        let tarefa = new Tarefa(
            this._inputAgua.textContent,
            new Date(this._inputData.value.replace(/-/g, ',')),
            InputHelper.filtroInputEstudos(this._inputEstudos),
            InputHelper.filtroInputProjetos(this._inputProjetos),
            InputHelper.filtroInputPessoal(this._inputPessoal)
        );

        console.log(tarefa);

        this._tarefaView.update(this._tarefas);

        this._limpaFormulario();

    }

    apaga() {

        this._tarefas.esvazia();

        this._tarefaView.update(this._tarefas);

    }

    _criaTarefa() {

        

    }

    _limpaFormulario() {

        this._inputData = '';
        this._inputEstudos = '';
        this._inputProjetos = 1;
        this._inputPessoal = '';
        this._inputAgua.focus();

    }
}