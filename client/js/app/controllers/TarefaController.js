class TarefaController {
    constructor() {
        
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

        this._tarefas = new ArrayTarefas(model => 
			this._tarefaView.update(model));

        this._tarefaView = new TarefaView($('#tarefaView'));
        this._tarefaView.update(this._tarefas);

        this._mensagem = new Mensagem();
        this._mensagemViewSuccess = new MensagemViewSucess($('#mensagemView'));
        this._mensagemViewError = new MensagemViewError($('#mensagemView'));
        this._mensagemViewSuccess.update(this._mensagem);
        this._mensagemViewError.update(this._mensagem);
        

    }

    adiciona(event) {

        event.preventDefault();
      
		let registros = new RegistrosService();
		registros
			.incluiRegistros(this._criaRegistro())
			.then(mensagem => {
				console.log(mensagem);
				
			})
			.catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível adicionar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
		
			this._tarefas.adiciona(this._criaRegistro());

		this._tarefaView.update(this._tarefas);
		
		this._mensagem.texto = 'Tarefa adicionada com sucesso!';

		this._mensagemViewSuccess.update(this._mensagem);

		this._limpaFormulario();

    }

    importaRegistrosJaneiro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosJan(dia)
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._tarefas.adiciona(registro);
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
	        .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosFevereiro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosFev()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._tarefas.adiciona(registro);
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
			.catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
		
	}

	importaRegistrosMarco() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosMarço()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._tarefas.adiciona(registro);
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
		
	}

	importaRegistrosAbril() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosAbril()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._tarefas.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
						this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosMaio() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosMaio()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._tarefas.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
			.catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosJunho() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosJunho()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._tarefas.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosJulho() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosJulho()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._tarefas.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
			 .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosAgosto() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosAgosto()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._tarefas.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosSetembro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosSetembro()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._tarefas.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosOutubro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosOutubro()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._tarefas.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosNovembro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosNovembro()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._tarefas.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
			.catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosDezembro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosDezembro()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => { 
						this._tarefas.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
						this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
			.catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas de dezembro!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

    apaga() {

        this._tarefas.esvazia();

        this._mensagem.texto = 'Tarefas apagadas com sucesso!';

        this._mensagemViewSuccess.update(this._mensagem);

    }

	_criaRegistro() {

		return new Tarefa(
            new Date(this._inputData.value),
            this._inputSemana.textContent,
            this._inputEstudos.value,
            this._inputProjetos.value,
            this._inputPessoal.value,
            this._inputStatusEstudos.textContent,
            this._inputStatusProjetos.textContent,
            this._inputStatusPessoal.textContent,
            parseInt(this._inputAgua.textContent)
        );
	}

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputEstudos.value = '';
        this._inputProjetos.value = '';
        this._inputPessoal.value = '';
        this._inputAgua.focus();

    }
}