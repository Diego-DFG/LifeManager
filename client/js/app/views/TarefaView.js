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
                <tr>
                    <td>${tarefa.data.getDate()}/
                    ${tarefa.data.getMonth()+1}/
                    ${tarefa.data.getFullYear()} - 
                    ${tarefa.semana}</td>
                    <td>${tarefa.estudos} - ${tarefa.statusEstudos}</td>
                    <td>${tarefa.projetos} - ${tarefa.statusProjetos}</td>
                    <td>${tarefa.pessoal} - ${tarefa.statusPessoal}</td>
                    <td>${tarefa.agua}</td>
                </tr>
                `).join('')}
            </tbody>
            <tfoot>
                <td class="table text-uppercase table-active" colspan="4"><strong>Total(copos)</strong></td>
                <td class="table-active">${model.tarefas.reduce((total, n) => total + n.agua, 0)}</td>
            </tfoot>
        </table>
        `;
    }
}