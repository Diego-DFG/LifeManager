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
                    ${tarefa.data.getFullYear()}</td>
                    <td>${tarefa.estudos}
                        ${tarefa.estudos}
                        ${tarefa.estudos}</td>
                    <td>${tarefa.projetos}
                        ${tarefa.projetos}
                        ${tarefa.projetos}</td>
                    <td>${tarefa.pessoal}
                        ${tarefa.pessoal}
                        ${tarefa.pessoal}</td>
                </tr>
                `).join('')}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
        `;
    }
}