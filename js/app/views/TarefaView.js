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
                    <th>DATA</th>
                    <th>TITULO</th>
                    <th>QUANTIDADE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                ${model.tarefas.map(tarefa => `
                <tr>
                    <td>${tarefa.data.getDate()}/
                    ${tarefa.data.getMonth()+1}/
                    ${tarefa.data.getFullYear()}</td>
                    <td>${tarefa.titulo}</td>
                    <td>${tarefa.quantidade}</td>
                    <td>${tarefa.status}</td>
                </tr>
                `).join('')}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
        `;
    }
}