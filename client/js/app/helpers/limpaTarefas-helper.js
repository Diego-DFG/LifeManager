const botaoLimpar = document.querySelector('#btn-apagar');
botaoLimpar.addEventListener('click', function() {

    tarefaController.apaga();

    registroDiarioJaneiroController.apaga();
    registroDiarioFevereiroController.apaga();
    registroDiarioMarcoController.apaga();
    registroDiarioAbrilController.apaga();
    registroDiarioMaioController.apaga();
    registroDiarioJunhoController.apaga();
    registroDiarioJulhoController.apaga();
    registroDiarioAgostoController.apaga();
    registroDiarioSetembroController.apaga();
    registroDiarioOutubroController.apaga();
    registroDiarioNovembroController.apaga();
    registroDiarioDezembroController.apaga();
    

});
