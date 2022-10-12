
<h3 align="center">API - GamesList</h3>

<div align="center">

[![Status](https://img.shields.io/badge/Status-Complete-brightgreen)]()

</div>

---

<p align="center"> Objetivo do projeto: 
  Avaliar a capacidade técnica, crítica e raciocínio lógico, na construção de uma API para acesso a uma camada de dados.
    <br> 
</p>

## 📝 Indice

- [Sobre](#about)
- [Primeiros passos](#getting_started)
- [Como usar](#usage)
- [Built Using](#built_using)


## 🧐 Sobre <a name = "about"></a>

<p>
  Teste para Node.Js Developer
  Construção de uma API que deverá receber como parâmetro titulo, preço e ano de lançamento de jogos afins de criar cadastro de games no banco podendo criar, 
  editar, remover, listar.
  Retornando um Json com resumo do que há no banco.
</p>


## 🏁 Primeiros passos <a name = "getting_started"></a>

### Pre-requisitos
Banco de dados MySQL

Node.js e NPM instalado na maquina que irá rodar o projeto.

Criação aas váriaveis de ambiente que são necessárias neste projeto para acesso e manipulação do banco.


| Arquivo            | Variável          | Descrição                                              |
| ------------------ | ----------------- | ------------------------------------------------------ |
| DATABASE.JS        | DATABASE_DATABASE | Nome da Tabela no banco de dados                       |
| DATABASE.JS        | DATABASE_USERNAME | Usuario de acesso ao banco de dados                    |
| DATABASE.JS        | DATABASE_PASSWORD | Senha de acesso ao banco de dados                      |

<img src="https://github.com/fabricio-26/api-rest-games/blob/main/api/others/img.jpeg">


### Instalando

Iniciar instalação de pacotes necessários com NPM:
```
npm install
```
Executar serviço API:
```
node api/index.js
```
Se tudo ocorreu bem, após ter configurado corretamente o banco de dados, após executar o comando acima, deverá obter a seguinte mensagem no terminal:
```
Server started on port 2222! 🏆 GET http://localhost:2222
```
Indicando que o servidor está rodando em localhost na porta 2222
## 🎈 Como usar <a name="usage"></a>
_Endpoint_

`<url>/orders`

Em desenvlolvimento!

```

## ⛏️ Built Using <a name = "built_using"></a>

- [MySQL](https://https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Sequelize](https://sequelize.org/) - ORM Framework

