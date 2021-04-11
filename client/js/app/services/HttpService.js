class HttpService {

	_handlerErrors(res) {
		if(!res.ok) {
			console.log(res);
			throw new Error(res.statusText);
		}

		return res;
	}

	get(url) {

		return fetch(url)
				.then(res => this._handlerErrors(res))
				.then(res => {
					console.log(res);
					return res.json();
				});
	}

	 post(url, dado) {
	 		console.log(dado);
	 		return fetch(url, {
	 			headers: {'Content-type' : 'application/json'},
	 			method: 'post',
	 			body: JSON.stringify(dado)
	 		})
	 		.then(res => this._handlerErrors(res));

        }

	delete(url, id) {
			console.log(id);
			return fetch(url, {
				headers: {'Content-type' : 'application/json'},
				method: 'delete',
				body: JSON.stringify(id)
			})
			.then(res => this._handlerErrors(res));

	   }

	getById(url, id) {
		console.log(id);
		return fetch(url, {
			headers: {'Content-type' : 'application/json'},
			method: 'get',
			body: JSON.stringify(id)
		})
		.then(res => this._handlerErrors(res));
	
	}
	
	atualizaItem(id, agua, data, semana, estudos, projetos, pessoal, 
		statusEstudos, statusProjetos, statusPessoal) {
			console.log(id);
			return fetch(url, {
				headers: {'Content-type' : 'application/json'},
				method: 'put',
				body: JSON.stringify({
					id: id,
					agua: agua,
					data: data,
					semana: semana,
					estudos: estudos,	
					projetos: projetos,
					pessoal: pessoal,
					statusEstudos: statusEstudos,
					statusProjetos: statusProjetos,
					statusPessoal: statusPessoal
				})
			})
			.then(res => this._handlerErrors(res));
	}
		
}