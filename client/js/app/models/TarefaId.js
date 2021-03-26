class TarefaId  extends Tarefa {
    constructor(id, data, semana, estudos, projetos, pessoal, statusEstudos,statusProjetos, statusPessoal, agua) {
        super();
        this._id = id;
        this._data = new Date(data.getTime());
        this._semana = semana;
        this._estudos = estudos;
        this._projetos = projetos;
        this._pessoal = pessoal;
        this._statusEstudos = statusEstudos;
        this._statusProjetos = statusProjetos;
        this._statusPessoal = statusPessoal;
        this._agua = agua;
        Object.freeze(this);
    }

    get id() {
        return this._id;
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

    get statusEstudos() {
        return this._statusEstudos;
    }

    get statusProjetos() {
        return this._statusProjetos;
    }

    get statusPessoal() {
        return this._statusPessoal;
    }

    get agua() {
        return this._agua;
    }
}