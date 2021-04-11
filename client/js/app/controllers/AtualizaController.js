const service = new RegistrosService();

const pegarURL = new URL(window.location);

const id = pegarURL.searchParams.get('id');

let $ = document.querySelector.bind(document);

    this._inputAgua = $('#result');
    this._inputData = $('#data');
    this._inputSemana = $('#label_semana');
    this._inputEstudos = $('#input__Text_estudos');
    this._inputProjetos = $('#input__Text_projetos');
    this._inputPessoal = $('#input__Text_pessoal');
    this._inputStatusEstudos = $('#checkEstudos');
    this._inputStatusProjetos = $('#checkProjetos');
    this._inputStatusPessoal = $('#checkPessoal');

console.log(pegarURL);
console.log(id);

service
    .editaRegistros(id)
    .then(dados => {

        console.log(dados._data);

        function adicionaZero(numero) {
            if(numero <= 9) {
                return "0"+numero;
            } else {
                return numero;
            }
        }

        let data = new Date(dados._data);

        let dataFormatada = (adicionaZero(data.getFullYear()))+"-"+
                            adicionaZero((data.getMonth()+1))+"-"+
                            adicionaZero((data.getDate()));

        this._inputData.value = dataFormatada;
        this._inputSemana.value = data._semana;
        this._inputEstudos.value = data._estudos;
        this._inputProjetos.value = data._projetos;
        this._inputPessoal.value = data._pessoal;
        this._inputStatusEstudos.value = data._statusEstudos;
        this._inputStatusProjetos.value = data._statusProjetos;
        this._inputStatusPessoal.value = data._statusPessoal;
        this._inputAgua.value = data._agua;


    });

    document
        .querySelector('#tabela__formulario')
        .addEventListener('submit', function(event) {

            event.preventDefault();

            service
                .atualizaRegistros(inputData, inputSemana, inputEstudos, inputProjetos, 
                    inputPessoal, inputStatusEstudos, inputStatusProjetos, inputStatusPessoal, 
                    inputAgua, id
                )
                .then(()=> {
                    window.location.href = 'index.html';
                })

    });