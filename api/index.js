const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var ModelGame = require('./database/ModelConnection')
const connection = require("./database/database")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


connection.authenticate().then(() => {
    console.log("Banco conectado com sucesso!!")
}).catch((err) => {
    console.error("Banco não conectado!")
})

app.get("/games", (req, res) => {

    ModelGame.findAll().then(resp => {
        res.statusCode = 200;
        res.json(resp);
    });
});

app.get("/game/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {

        var id = parseInt(req.params.id);

        ModelGame.findOne({
            where: { id: id }
        }).then(game => {
            if (game != undefined && game != null) {
                res.statusCode = 200;
                res.json(game)
            } else {
                res.sendStatus(404)
            };
        });
    };
})

app.post('/game', (req, res) => {
    var { title, year, price } = req.body

    ModelGame.create({
        title: title,
        year: year,
        price: price
    }).then(() => {
        statusCode = 200
        res.send("ok");
    });
});

app.delete("/game/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {

        let { id } = req.params

        ModelGame.findOne({
            where: { id: id }
        }).then((game) => {
            if (game == null) {
                res.sendStatus(404)
            } else {
                ModelGame.destroy({ where: { id: id } })
                res.sendStatus(200)
            };
        });
    };
});

app.put("/game/:id", (req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{

        let {id} = req.params

        ModelGame.findOne({
            where: {id:id}
        }).then((game) => {
            if(game == null){
                res.statusCode(404)
            }else{

                var {title, price, year} = req.body

                if(title != undefined){
                    ModelGame.update({title: title}, {where: {id: id}})
                }
    
                if(price != undefined){
                    ModelGame.update({year: year}, {where: {id: id}})
                }
    
                if(year != undefined){
                    ModelGame.update({price: price}, {where: {id: id}})
                }
                res.sendStatus(200)

            };
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        });
    };
});

app.listen(2222, () => {
    console.log("API RODANDO!")
});