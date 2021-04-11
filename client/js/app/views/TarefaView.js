class TarefaView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }

   

    template(model) {

        return `
        <table class='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>ESTUDOS</th>
                    <th>PROJETOS</th>
                    <th>PESSOAL</th>
                    <th>ÁGUA</th>
                </tr>
            </thead>
            <tbody>
                ${model.tarefas.map(tarefa => `
                <tr class="tabelaTarefas" data-id="${tarefa.id}">
                    <td><a onclick="tarefaController.editaRegistro(event)" >${tarefa.data.getDate()}/
                    ${tarefa.data.getMonth()+1}/
                    ${tarefa.data.getFullYear()} - 
                    ${tarefa.semana}</a><a href="index.html?id=${tarefa.id}">Editar</a></td>
                    <td class="editar_tarefa"><a>${tarefa.estudos}</a> - <a onclick="tarefaController.editaRegistro(event)" href="#tabela__inserir?id=${tarefa.id}" class="textoVermelho" data-id="editar_status">${tarefa.statusEstudos}</a></td>
                    <td class="editar_tarefa"><a>${tarefa.projetos}</a> - <a onclick="tarefaController.editaRegistro(event)" href="#tabela__inserir?id=${tarefa.id}" class="textoVermelho">${tarefa.statusProjetos}</a></td>
                    <td class="editar_tarefa"><a>${tarefa.pessoal}</a> - <a onclick="tarefaController.editaRegistro(event)" href="#tabela__inserir?id=${tarefa.id}" class="textoVermelho">${tarefa.statusPessoal}</a></td>
                    <td class="editar_tarefa"><a>${tarefa.agua}</a>
                        <i onclick="tarefaController.deletaRegistro(event)" class="lixeira fas fa-trash-alt">
                    </td>
                </tr>
                `).join('')}
            </tbody>
            <tfoot>
                <td class="table text-uppercase table-active" colspan="4"><strong>Total(copos)</strong></td>
                <td class="table-active">${model.tarefas.reduce((total, n) => total + n.agua, 0)}</td>
            </tfoot>
        </table>
        <script>
                let tarefaController = new TarefaController();
        </script>
        `;
    } 
}