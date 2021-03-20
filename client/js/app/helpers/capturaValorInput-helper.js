function capturaInputEstudos() {

            let checkboxEstudos = document.querySelector('.input__card_estudos');
            let checkboxViewEstudos = document.querySelector('.checkViewEstudos');
        
            if(checkboxEstudos.checked == true) {
                let td = document.createElement('td');
                td.textContent = 'Concluído';
                checkboxViewEstudos.innerHTML = td.textContent;
            } else {
                let td = document.createElement('td');
                td.textContent = '';
                td.textContent = 'Em aberto';
                checkboxViewEstudos.innerHTML = td.textContent;
            }
        
}

function capturaInputProjetos() {
        let checkboxProjetos = document.querySelector('.input__card_projetos');
        let checkboxViewProjetos = document.querySelector('.checkViewProjetos');
    
        if(checkboxProjetos.checked == true) {
            let td = document.createElement('td');
            td.textContent = 'Concluído';
            checkboxViewProjetos.innerHTML = td.textContent;
        } else {
            let td = document.createElement('td');
            td.textContent = '';
            td.textContent = 'Em aberto';
            checkboxViewProjetos.innerHTML = td.textContent;
        }
}

function capturaInputPessoal() {
        let checkboxPessoal = document.querySelector('.input__card_pessoal');
        let checkboxViewPessoal = document.querySelector('.checkViewPessoal');
    
        if(checkboxPessoal.checked == true) {
            let td = document.createElement('td');
            td.textContent = 'Concluído';
            checkboxViewPessoal.innerHTML = td.textContent;
        } else {
            let td = document.createElement('td');
            td.textContent = '';
            td.textContent = 'Em aberto';
            checkboxViewPessoal.innerHTML = td.textContent;
        }
}