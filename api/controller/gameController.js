const GamesModel = require("../database/ModelConnection")

const dataList = {
    listAll: async function (req, res) {
        let dataList = await GamesModel.findAll();
        let num = 0
        if (dataList.length == num) {
            res.send("Lista vazia!")
        } else {
            res.json(dataList).status(200);
        }
    },

    createGame: async function (req, res) {
        try {
            const newGame = await GamesModel.create({
                title: req.body.title,
                year: req.body.year,
                price: req.body.price
            })
            res.status(201).json(newGame)
        }catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    },

    searchId: async function (req, res) {
        if (isNaN(req.params.id)) {
            res.sendStatus(400);
        } else {
            try {
                let searchGame = await GamesModel.findOne({ where: { id: req.params.id } })

                if (searchGame != undefined && searchGame != null) {
                    return res.status(200).json(searchGame)
                } else {
                    return res.sendStatus(404)
                }

            } catch (error) {
                return res.Status(404)
            }
        }
    },

    deleteId: async function (req, res) {
        if (isNaN(req.params.id)) {
            res.sendStatus(400);
        } else {
            try {
                var id = parseInt(req.params.id);
                let searchIdDelete = await GamesModel.findOne({ where: { id: id } })

                if (searchIdDelete != null) {
                    const remove = searchIdDelete.destroy(searchIdDelete)
                    res.status(200).json(remove)
                } else {
                    return res.sendStatus(404)
                }
            } catch (error) {
                return res.sendStatus(400)
            }
        }
    },

    updateId: async function (req, res) {
        if (isNaN(req.params.id)) {
            res.sendStatus(400);
        } else {

            try {
                var { title, price, year } = req.body
                var { id } = req.params;
                let game = await GamesModel.findOne({ where: { id: id } })


                if (title != undefined) {
                    game.update({ title: title }, { where: { id: id } })
                }

                if (price != undefined) {
                    game.update({ year: year }, { where: { id: id } })
                }

                if (year != undefined) {
                    game.update({ price: price }, { where: { id: id } })
                }
                res.sendStatus(200)
            } catch (err) {
                console.log(err);
            }
        }
    }
}

module.exports = dataList;