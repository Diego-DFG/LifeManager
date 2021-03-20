class TarefaView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

    template(model) {
        return `
        <table class='table table-bordered'>
            <thead>
                <tr>
                    <th>ÁGUA</th>
                    <th>DATA</th>
                    <th>ESTUDOS</th>
                    <th>PROJETOS</th>
                    <th>PESSOAL</th>
                </tr>
            </thead>
            <tbody>
                ${model.tarefas.map(tarefa => `
                <tr>
                    <td>${tarefa.agua}</td>
                    <td>${tarefa.data.getDate()}/
                    ${tarefa.data.getMonth()+1}/
                    ${tarefa.data.getFullYear()} - 
                    ${tarefa.semana}</td>
                    <td>${tarefa.estudos} - ${tarefa.status}</td>
                    <td>${tarefa.projetos} - ${tarefa.status}</td>
                    <td>${tarefa.pessoal} - ${tarefa.status}</td>
                </tr>
                `).join('')}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
        `;
    }
}