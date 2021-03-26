class Tabela {
    init(conexao) {
        this.conexao = conexao;

        this.criaTabela();
    }

    criaTabela() {
        const sql = `CREATE TABLE IF NOT EXISTS manager(
            _data datetime NOT NULL,
            _semana varchar(20) NOT NULL,
            _estudos varchar(50) NOT NULL,
            _projetos varchar(50) NOT NULL,
            _pessoal varchar(50) NOT NULL,
            _statusEstudos varchar(20) NOT NULL,
            _statusProjetos varchar(20) NOT NULL,
            _statusPessoal varchar(20) NOT NULL,
            _agua int NOT NULL,
            id int NOT NULL AUTO_INCREMENT,
            PRIMARY KEY(id)
        )`;

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro);
            } else {
                console.log('Tabela criada!');
            }
        });
    }
}
module.exports = new Tabela;