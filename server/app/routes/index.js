const Nota = require('../models/Nota');

module.exports = app => {
    app.get('/registros', (req, res) => {
        Nota.lista(res)
    })

    app.get('/registros/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Nota.buscaPorId(id, res)
    })

    app.post('/registros', (req, res) => {
       const nota = req.body;

        Nota.adiciona(nota, res)
    }) 

    app.patch('/registros/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body;

        Nota.altera(id, valores, res)
    })

    app.delete('/registros/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Nota.deleta(id, res);
    })
}