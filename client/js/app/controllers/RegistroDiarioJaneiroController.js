class RegistroDiarioJaneiroController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputDiaJaneiro = $('#periodo_dia_janeiro');

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

		const dia = this._inputDiaJaneiro.value;

		if(dia == 1) {

			let registros = new RegistroDiarioJaneiroService();

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

		const dia = this._inputDiaJaneiro.value;

		if(dia == 2) {

			let registros = new RegistroDiarioJaneiroService();

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

	importaRegistrosDiaTres() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 3) {

			let registros = new RegistroDiarioJaneiroService();

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

	importaRegistrosDiaQuatro() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 4) {

			let registros = new RegistroDiarioJaneiroService();

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

	importaRegistrosDiaCinco() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 5) {

			let registros = new RegistroDiarioJaneiroService();

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

	importaRegistrosDiaSeis() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 6) {

			let registros = new RegistroDiarioJaneiroService();

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

	importaRegistrosDiaSete() {

		event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 7) {

			let registros = new RegistroDiarioJaneiroService();

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

	importaRegistrosDiaOito() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 8) {

			let registros = new RegistroDiarioJaneiroService();

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

	importaRegistrosDiaNove() {

		event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 9) {

			let registros = new RegistroDiarioJaneiroService();

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

	importaRegistrosDiaDez() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 10) {

			let registros = new RegistroDiarioJaneiroService();

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

	importaRegistrosDiaOnze() {

		event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 11) {

			let registros = new RegistroDiarioJaneiroService();

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

	importaRegistrosDiaDoze() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 12) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaTreze() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 13) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaQuatorze() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 14) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaQuinze() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 15) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaDezesseis() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 16) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaDezessete() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 17) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaDezoito() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 18) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaDezenove() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 19) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaVinte() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 20) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaVinteUm() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 21) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaVinteDois() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 22) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaVinteTres() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 23) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaVinteQuatro() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 24) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaVinteCinco() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 25) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaVinteSeis() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 26) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaVinteSete() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 27) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaVinteOito() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 28) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaVinteNove() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 29) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaTrinta() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 30) {

			let registros = new RegistroDiarioJaneiroService();

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

    importaRegistrosDiaTrinta_e_Um() {

        event.preventDefault();

		const dia = this._inputDiaJaneiro.value;

		if(dia == 31) {

			let registros = new RegistroDiarioJaneiroService();

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

}