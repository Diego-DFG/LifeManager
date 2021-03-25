const conexao = require('../../infraestrutura/conexao');

class Nota {
    adiciona(nota, res) {
        const sql = 'INSERT INTO manager SET ?'

        conexao.query(sql, nota, (erro, resultados) => {
            if(erro) {
                res.status(500).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM manager'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM manager WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const nota = resultados[0];
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(nota)
            }
        })
    }

    altera(id, valores, res) {
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }      
        const sql = 'UPDATE manager SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM manager WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}
module.exports = new Nota;