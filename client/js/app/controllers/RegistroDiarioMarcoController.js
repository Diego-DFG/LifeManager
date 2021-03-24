class RegistroDiarioMarcoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputDiaMarco = $('#periodo_dia_marco');

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

    importaRegistrosDiaPrimeiro() {

		event.preventDefault();

		const dia = this._inputDia.value;

		if(dia == 1) {

			let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaPrimeiro(dia)
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

		
	}

	importaRegistrosDiaDois() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaDois(dia)
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

	importaRegistrosDiaTres() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaTres(dia)
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

	importaRegistrosDiaQuatro() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaQuatro(dia)
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

	importaRegistrosDiaCinco() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaCinco(dia)
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

	importaRegistrosDiaSeis() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaSeis(dia)
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

	importaRegistrosDiaSete() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaSete(dia)
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

	importaRegistrosDiaOito() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaOito(dia)
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

	importaRegistrosDiaNove() {

		event.preventDefault();

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaNove()
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

	importaRegistrosDiaDez() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaDez(dia)
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

	importaRegistrosDiaOnze() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaOnze(dia)
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

	importaRegistrosDiaDoze() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaDoze(dia)
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

    importaRegistrosDiaTreze() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaTreze(dia)
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

    importaRegistrosDiaQuatorze() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaQuatorze(dia)
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

    importaRegistrosDiaQuinze() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaQuinze(dia)
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

    importaRegistrosDiaDezesseis() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaDezesseis(dia)
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

    importaRegistrosDiaDezessete() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaDezessete(dia)
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

    importaRegistrosDiaDezoito() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaDezoito(dia)
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

    importaRegistrosDiaDezenove() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaDezenove(dia)
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

    importaRegistrosDiaVinte() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaVinte(dia)
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

    importaRegistrosDiaVinteUm() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaVinteUm(dia)
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

    importaRegistrosDiaVinteDois() {

		event.preventDefault();

		const dia = this._inputDiaMarco.value;

		if(dia == 22) {

			let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaVinteDois(dia)
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
	}

    importaRegistrosDiaVinteTres() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaVinteTres(dia)
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

    importaRegistrosDiaVinteQuatro() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaVinteQuatro(dia)
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

    importaRegistrosDiaVinteCinco() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaVinteCinco(dia)
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

    importaRegistrosDiaVinteSeis() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaVinteSeis(dia)
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

    importaRegistrosDiaVinteSete() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaVinteSete(dia)
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

    importaRegistrosDiaVinteOito() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaVinteOito(dia)
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

    importaRegistrosDiaVinteNove() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaVinteNove(dia)
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

    importaRegistrosDiaTrinta() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaTrinta(dia)
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

    importaRegistrosDiaTrinta_e_Um() {

		event.preventDefault();

		const dia = this._inputDia.value;

		let registros = new RegistrosDiarioService();

		registros
			.obterRegistrosDiaTrinta_e_um(dia)
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

}