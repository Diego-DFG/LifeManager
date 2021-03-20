class InputHelper {
    constructor() {
        throw new Error('Esta classe não pode ser instanciada!');
    }

    static filtroInputEstudos(input) {
        input.addEventListener('click', (e)=> {
            let inputCard = e.target;

            if(inputCard.checked == true && 
                inputCard.className === 'input__card_estudos') {
                    return inputCard.nextElementSibling.textContent;
            } 
        });
    }

    static filtroInputProjetos(input) {
        input.addEventListener('click', (e)=> {
            let inputCard = e.target;

            if(inputCard.checked == true && 
                inputCard.className === 'input__card_projetos') {
                    return inputCard.nextElementSibling.textContent;
            }
        });
    }

    static filtroInputPessoal(input) {
        input.addEventListener('click', (e)=> {
            let inputCard = e.target;

            if(inputCard.checked == true && 
                inputCard.className === 'input__card_pessoal') {
                    return inputCard.nextElementSibling.textContent;
            }
        });
    }
}