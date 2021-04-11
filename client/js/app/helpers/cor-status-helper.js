var statusView = document.querySelectorAll('.editar_status');

for(var i = 0; i < statusView.length; i++) {

    var td2 = statusView[i];

    var tdTeste = td2.textContent;

    if(tdTeste.includes('Concluído')) {
        td2.classList.toggle('textoVerde');
        console.log(td2.classList);
    } else {
        td2.classList.toggle('.textoVerde');
    }
}






