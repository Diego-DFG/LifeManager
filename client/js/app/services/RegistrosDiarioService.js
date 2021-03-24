class RegistrosDiarioService {
    constructor() {
        this._http = new HttpService();
    }

    obterRegistrosDiaPrimeiro(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDois(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaTres(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaQuatro(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaCinco(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaSeis(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaSete(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaOito(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaNove(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaDez(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaOnze(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaDoze(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaTreze(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaQuatorze(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}
    obterRegistrosDiaDiaQuinze(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaDezesseis(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaDezessete(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaDezoito(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaDezenove(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaVinte(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaVinteUm(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaVinteDois(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaVinteTres(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaVinteQuatro(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaVinteCinco(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaVinteSeis(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaVinteSete(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaVinteOito(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaVinteNove(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaTrinta(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDiaTrinta_e_um(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

}