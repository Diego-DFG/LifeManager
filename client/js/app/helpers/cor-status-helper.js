var statusEstudos = document.querySelectorAll('#editar_tarefa');
console.log(statusEstudos);

    for(var i = 0; i < statusEstudos.length; i++) {

        var corStatus = statusEstudos[i];

        var tdStatus = corStatus.textContent;

        if(tdStatus.includes('Concluído')) {
           corStatus.classList.add('textoVermelho');
        } else {
           corStatus.classList.add('textoVerde');
        }

        console.log(tdStatus);

    }






