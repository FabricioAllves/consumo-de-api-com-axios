const GamesModel = require("../database/ModelConnection")

const dataList = {
    listAll: async function(req, res) {
        let dataList = await GamesModel.findAll();

        if(dataList == null){
            res.send("Lista vazia").status(157)
        }else{
            res.json(dataList).status(200);
        }
    },

    createGame: async function (req, res) {
        try{
            const newGame = await GamesModel.create({
                title: req.body.title,
                year: req.body.year,
                price: req.body.price
            })
            res.status(201).json(newGame)
        }catch(error){
            res.status(400)
        }
    }
}

module.exports = dataList;