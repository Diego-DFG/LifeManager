class IdentificacaoView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

    template(model) {
        return `
        <div class="documentos">
            <div class="documentos__identidade identificacao">
                <h2>Reservista</h2>
                <img class="identificacao__img" src="./img/img_00.jpg" alt="">
            </div>
            <div class="documentos__cpf identificacao">
                <h2>Titulo eleitor</h2>
                <img class="identificacao__img" src="./img/img_00.jpg" alt="">
            </div>
            <div class="documentos__cpf identificacao">
                <h2>CNH</h2>
                <img class="identificacao__img" src="./img/img_00.jpg" alt="">
            </div>
        </div>
        `;
    }
}