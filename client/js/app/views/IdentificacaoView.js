class IdentificacaoView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update() {
        this._elemento.innerHTML = this.template();
    }

    template() {
        return `
        <h2 class="documentos__titulo">IDENTIFICAÇÃO</h2>
        <div class="documentos">
            <div class="documentos__identidade identificacao">
                <h2>Reservista</h2>
                <img class="identificacao__img" src="./assets/img/img_00.jpg" alt="">
            </div>
            <div class="documentos__cpf identificacao">
                <h2>Titulo eleitor</h2>
                <img class="identificacao__img" src="./assets/img/img_00.jpg" alt="">
            </div>
            <div class="documentos__cpf identificacao">
                <h2>CNH</h2>
                <img class="identificacao__img" src="./assets/img/img_00.jpg" alt="">
            </div>
        </div>
        `;
    }
}