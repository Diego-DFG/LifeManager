class RegistrosService {

	constructor() {
		this._http = new HttpService();
	}

	incluiRegistros(dado) {

		return this._http
				.post('/registros', dado)
				.then(() => console.log('Registro adicionado com sucesso!'))
				.catch(erro => {
					console.log(erro);
					throw new Error('Não foi possível adicionar o registro!');
				});
	}

	excluiRegistros(id) {

		return this._http
				.delete(`/registros/${id}`)
				.then(() => console.log('Registro apagado com sucesso!'))
				.catch(erro => {
					console.log(erro);
					throw new Error('Não foi possível adicionar o registro!');
				});

	}

	editaRegistros(id) {

		return this._http
				.getById(`/registros/${id}`)
				.then(dados => {
					console.log(dados);
					console.log('Registro atualizado com sucesso!');
					return dados.json();
				})
				.catch(erro => {
					console.log(erro);
					throw new Error('Não foi possível atualizar o registro!');
				});
	}

	atualizaRegistros(id, data, semana, estudos, projetos, pessoal, statusEstudos,
		statusProjetos, statusPessoal, agua) {

		return this._http
				.getById(`/registros/${id}`, data, semana, estudos, projetos, pessoal, statusEstudos, 
							statusProjetos, statusPessoal, agua)
				.then(dados => {
					console.log(dados);
					console.log('Registro atualizado com sucesso!');
					return dados.json();
				})
				.catch(erro => {
					console.log(erro);
					throw new Error('Não foi possível atualizar o registro!');
				});
	}

	obterRegistrosJan() {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 0);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

	obterRegistrosFev() {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 1);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

	obterRegistrosMarço() {

		return this._http
				.get('/registros')
				.then(registros => {
					console.log(registros);
         			return registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id))})
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 2);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

	obterRegistrosAbril() {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 3);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

	obterRegistrosMaio() {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 4);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}
	
	obterRegistrosJunho() {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 5);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

	obterRegistrosJulho() {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 6);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

	obterRegistrosAgosto() {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 7);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

	obterRegistrosSetembro() {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 8);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

	obterRegistrosOutubro() {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 9);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

	obterRegistrosNovembro() {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 10);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

	obterRegistrosDezembro() {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
         				new Tarefa(
							new Date(objeto._data), 
							objeto._semana, objeto._estudos, objeto._projetos, objeto._pessoal, 
								objeto._statusEstudos, objeto._statusProjetos, 
									objeto._statusPessoal, objeto._agua, objeto.id)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == 11);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}
}