class DocumentoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputSemana = $('#label_semana');
        this._inputData = $('#data');
        this._inputDocumento = $('#input__text_documento');
        this._inputCategoria = $('#input__text_categoria');
        this._inputObservacoes = $('#input__text_observacoes');
        this._inputArquivo = $('#input__arquivo');

        this._identificacaoView = new IdentificacaoView($('#documentoView'));

    }

    adiciona(event) {

        event.preventDefault();

        let documento = new Documento(
            this._inputSemana.textContent,
            DateHelper._textoParaData(this._inputData.value),
            this._inputDocumento.value,
            this._inputCategoria.value,
            this._inputObservacoes.value
        );

        console.log(documento);

    }

    importaDocumentos() {

        this._identificacaoView.update();

    }

    apaga() {

        document.querySelector('#documentoView').innerHTML = ``;

    }
}