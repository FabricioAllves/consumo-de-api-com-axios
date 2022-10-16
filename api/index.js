const express = require('express');
const app = express();
const connection = require("./database/database")
const gameRouter = require('./router/gamesRouter')
const userRouter= require('./router/usersRoutes');
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

connection.authenticate().then(() => {console.log("Banco conectado com sucesso!!")})
.catch(() => {console.error("Banco não conectado!")})

app.use('/', express.json(), gameRouter)
app.use('/', express.json(), userRouter)

const PORT = 3333;
app.listen(PORT, () => {
console.log(`Running server in Port: http://localhost:${PORT}/`);
});
