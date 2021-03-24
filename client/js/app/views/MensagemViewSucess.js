class MensagemViewSucess {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

    template(model) {
        return model.texto ? `<div class="mensagem_sucesso"><p>${model.texto}</p></div>`: '<div><p></p></div>';
    }
}