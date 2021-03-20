class TarefaController {
    constructor() {
        
        let $ = document.querySelector.bind(document);

        this._inputAgua = $('#result');
        this._inputData = $('#data');
        this._inputSemana = $('#label_semana');
        
        this._inputEstudos = $('#input__Text_estudos');
        this._inputProjetos = $('#input__Text_projetos');
        this._inputPessoal = $('#input__Text_pessoal');

        this._inputStatus = $('#checkViewStatus');

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
            this._inputAgua.textContent,
            new Date(this._inputData.value),
            this._inputSemana.textContent,
            this._inputEstudos.value,
            this._inputProjetos.value,
            this._inputPessoal.value,
            this._inputStatus.textContent
        );

        return tarefa;

    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputEstudos.value = '';
        this._inputProjetos.value = '';
        this._inputPessoal.value = '';
        this._inputAgua.focus();

    }
}