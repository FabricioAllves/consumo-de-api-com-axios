const UserModel = require('../database/UserModel')

const dataUsers = {
    createUser: async function(req, res){
        try{
            let newUser = await UserModel.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            res.status(200).json(newUser)//(200 => OK)
        }catch(err){
            res.sendStatus(400) //(400 => Requisição inválida)
        }
    },

    authenticator: async function(req, res) {
        let { email, password } = req.body;

        if(email != undefined){

            let user = await UserModel.findOne({where: {email: email}});
            if(user != undefined){
                if(user.password == password){
                    res.status(200).json({token: "TOKEN FALSO!"}) //(200 => OK)
                }else{
                    res.status(401).json({err: "Credenciais inválidas!"}) //(401 Não autorizado)
                }
            }else{
                res.status(404).json({err: "O E-mail enviado não existi na base de dados!"}) //(404 => Não encontrado)
            }
        }else{
            res.status(400).json({err: "O E-mail enviado é inválido"}) //(400 => Requisição inválida OBs. corpo enviado vazio)
        }
    }
}

module.exports = dataUsers