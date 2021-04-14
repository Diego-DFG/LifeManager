class LegislacaoView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update() {
        this._elemento.innerHTML = this.template();
        this.adicionaTemplate();
    }

    adicionaTemplate() {

        let template = document.querySelector('#template');
        let templatePrimeiro = document.querySelector('#templatePrimeiro');
        let templateSegundo = document.querySelector('#templateSegundo');
        let templateTerceiro = document.querySelector('#templateTerceiro');

        templatePrimeiro.addEventListener('click', function() {
            template.innerHTML =  `
            <div class="legislacao">
                <h2>Seguro desemprego</h2>
                <embed src="./assets/arquivos/lei_8078.pdf" width="750px" height="300px" />
            </div>
            `;
        });

        templateSegundo.addEventListener('click', function() {
            template.innerHTML =  `
            <div class="legislacao">
                <h2>Código de defesa do consumidor</h2>
                <embed src="./assets/arquivos/re_754_mte.pdf" width="750px" height="300px" />
            </div>
            `;
        });

        templateTerceiro.addEventListener('click', function() {
            template.innerHTML =  `
            <div class="legislacao">
                <h2>PROCON - TV por assinatura</h2>
                <embed src="./assets/arquivos/tv_assinatura.pdf" width="750px" height="300px" />
            </div>
            `;
        });

    }

    template() {

        var template = `
        <h2 class="documentos__titulo">LEGISLAÇÃO</h2>
        <div class="documentos__container">
            <div id="template"></div>
            <div class="legislacao__template" id="templatePrimeiro">
                <h3 class="legislacao__titulo">Seguro desemprego</h3>
            </div>
            <div class="legislacao__template" id="templateSegundo">
                <h3 class="legislacao__titulo">Código de defesa do consumidor</h3>
            </div>
            <div class="legislacao__template" id="templateTerceiro">
                <h3 class="legislacao__titulo">PROCON - TV por assinatura</h3>
            </div>
        </div>
        `;

        return template;
    }
} 