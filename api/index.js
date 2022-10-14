const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ModelGame = require('./database/ModelConnection')
const connection = require("./database/database")
const gameRouter = require('./router/gamesRouter')
const jwt = require("jsonwebtoken");


const cors = require("cors");


const JWTsecret = "sdgxrgfzzsgfzsfzf";






app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


connection.authenticate().then(() => {
    console.log("Banco conectado com sucesso!!")
}).catch((err) => {
    console.error("Banco não conectado!")
})


app.use('/list', express.json(), gameRouter)

app.use('/create', express.json(), gameRouter)



//REFATORAR


// app.get("/games", (req, res) => {
//     (async () => {
//         const games = await ModelGame.findAll();
//         res.json(games)
//     })()
//     res.statusCode = 200
// })

// app.post('/game', (req, res) => {
//     var { title, year, price } = req.body

//     ModelGame.create({
//         title: title,
//         year: year,
//         price: price
//     }).then(() => {
//         res.send("ok");
//         res.status(200)
//     });
// });


// app.get("/game/:id", (req, res) => {

//     if (isNaN(req.params.id)) {
//         res.sendStatus(400);
//     } else {

//         var id = parseInt(req.params.id);

//         ModelGame.findOne({
//             where: { id: id }
//         }).then(game => {
//             if (game != undefined && game != null) {
//                 res.statusCode = 200;
//                 res.json(game)
//             } else {
//                 res.sendStatus(404)
//             };
//         });
//     };
// })



// app.delete("/game/:id", (req, res) => {

//     if (isNaN(req.params.id)) {
//         res.sendStatus(400);
//     } else {

//         let { id } = req.params
//         ModelGame.findOne({
//             where: { id: id }
//         }).then((game) => {
//             if (game == null) {
//                 res.sendStatus(404)
//             } else {
//                 ModelGame.destroy({ where: { id: id } })
//                 res.sendStatus(200)
//             };
//         });
//     };
// });

// app.put("/game/:id", (req, res) => {

//     if (isNaN(req.params.id)) {
//         res.sendStatus(400);
//     } else {

//         let { id } = req.params

//         ModelGame.findOne({
//             where: { id: id }
//         }).then((game) => {
//             if (game == null) {
//                 res.statusCode(404)
//             } else {

//                 var { title, price, year } = req.body

//                 if (title != undefined) {
//                     ModelGame.update({ title: title }, { where: { id: id } })
//                 }

//                 if (price != undefined) {
//                     ModelGame.update({ year: year }, { where: { id: id } })
//                 }

//                 if (year != undefined) {
//                     ModelGame.update({ price: price }, { where: { id: id } })
//                 }
//                 res.sendStatus(200)

//             };
//         }).catch(err => {
//             console.log(err)
//             res.sendStatus(500)
//         });
//     };
// });



// // -----------------------------Login








// app.post('/auth', (req, res) => {
//     (async () => {
//         let { email, password } = req.body;
//         let hash = await User.findOne({ where: { email } });
//         if (hash) {
//             hash = (hash.dataValues.password);
//             bcrypt.compare(password, hash, function (err, result) {
//                 if (result) {
//                     jwt.sign({ email, password }, JWTsecret, { expiresIn: '1d' }, (err, token) => {
//                         res.json({ token, message: 'logon success!' });
//                     });
//                 } else {
//                     res.json({ token: 'invalid', message: 'password incorrect!' });
//                     res.statusCode = 401;
//                 }
//             });
//         } else {
//             res.json({ token: 'invalid', message: 'User not found!' })
//             res.statusCode = 404
//         }
//     })();
// });



app.listen(2222, () => {
    console.log("API RODANDO!")
});