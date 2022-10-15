
<h3 align="center">CONSUMO DE API COM AXIOS</h3>

<div align="center">

<!-- [![Status](https://img.shields.io/badge/Status-Complete-brightgreen)]() -->

</div>

---

<p align="center"> Objetivo do projeto: 
  Avaliar a capacidade técnica, crítica e raciocínio lógico, na construção de uma API para acesso a uma camada de dados.
  Fazer consumo da api em um front externo.
    <br> 
</p>

## 📝 Indice

- [Sobre](#about)
- [Primeiros passos](#getting_started)
- [Como usar](#usage)
- [Built Using](#built_using)


## 🧐 Sobre <a name = "about"></a>

<p>
    API do repositorio [api-rest-games](https://github.com/fabricio-26/api-rest-games) onde neste repositorio atual, refatorei toda a logica que fica no index e crei suas camadas Routes, controller.
    Api tem como função basica de criar um game definindo title, year e price podendo editar, procurar por todos ou um id, deletar e listar.
    Retornando um Json com resumo do que há no banco.
</p>


## 🏁 Primeiros passos <a name = "getting_started"></a>

### Pre-requisitos
Banco de dados MySQL

Node.js e NPM instalado na maquina que irá rodar o projeto.

Criação das váriaveis de ambiente que são necessárias neste projeto para acesso e manipulação do banco.


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
node index.js
```
Se tudo ocorreu bem, após ter configurado corretamente o banco de dados, após executar o comando acima, deverá obter a seguinte mensagem no terminal:
```
Server started on port 3333! 🏆 GET http://localhost:3333
```
Indicando que o servidor está rodando em localhost na porta 3333
## 🎈 Games EndPoints <a name="usage"></a>
_Endpoint_

<hr>

### GET Rountes

#### */games/*
Este _EndPoint_ retorna uma lista com todas as informações sobre todos os jogos registrados no banco de dados.

##### - Parameters
Esta rota não tem nenhum parâmetro.

##### - Retorno
###### OK 200 ```OK```
Se for retornado **OK**, é porque está tudo ok, e todos os jogos foram retornados.
Exemplo:
```
[
  {
    "id": 1,
    "title": "FIFA 2022",
    "year": 2022,
    "price": 199,
    "createdAt": "2022-10-13T12:12:35.000Z",
    "updatedAt": "2022-10-13T12:12:35.000Z"
  },
  {
    "id": 2,
    "title": "CS: GO",
    "year": 2010,
    "price": 59,
    "createdAt": "2022-10-13T12:14:11.000Z",
    "updatedAt": "2022-10-13T12:14:11.000Z"
  }
]
```
###### Bad Request 400 ```Bad Request```
Esta resposta é retornada se a solicitação não for válida.

<!-- ###### Internal server error 500 ```Internal server error```
Esta resposta é retornada se algo ruim aconteceu no servidor ou se a rota colocada no campo url não existe. -->

<hr>

#### */search/:id*
Esta rota é usada para retornar um jogo específico, que tem o id recebido como parâmetro, como *id*.

##### - Parameters
###### *id* 
Nesta rota o usuário deve passar o **id** do jogo para retornar suas informações.

##### - Retornos
###### Bad Request 400 ```Bad Request```
Se o parâmetro *id* não for um número, será retornado `` Bad request 400 ``
<!-- ###### internal Server Error 500 ```internal Server Error```
Se esta resposta for retornada é porque algo ruim aconteceu no servidor; -->
###### Not found 404 ```Not found```
Se a resposta for `` Not found 404 ``, é porque a API recebeu e aceitou o parâmetro,
mas foi encontrado algum jogo com o parâmetro como *id*
###### OK 200 ```OK``
Se for retornado *OK*, é porque os parâmetros foram aceitos, e os jogos foram encontrados e devolvidos com sucesso.
 Assim o games, que tem o parâmetro id como id, as informações serão retornadas.
Exempplo:
```
{
  "i"id": 2,
	"title": "CS: GO",
	"year": 2010,
	"price": 59,
	"createdAt": "2022-10-13T12:14:11.000Z",
	"updatedAt": "2022-10-13T12:14:11.000Z"
  }
```
<hr>

### POST  Routes 
#### */createGame*

##### - Parâmetros
*Os parâmetros de rotas devem ser passados ​​como **parâmetros do corpo**. E qualquer um pode ser nulo ou indefinido.*
###### title
Este será o título dos jogos;
###### price
Este será o preço do jogo. *Este valor pode ser **0***
###### year
Este será o ano em que o jogo foi criado.

##### - Retornos

###### Created 201 ```Created```
Esta resposta será retornada se o jogo foi criado com sucesso.
###### Bad request 400 ```Bad request```
Esta resposta será retornada se os parâmetros recebidos forem inválidos.
<!-- ###### Internal Server Error 500 ```Internal Server Error```
Esta resposta será retornada se algo de ruim acontecer no servidor. -->

<hr>

### DELETE  Routes 
#### */remove/:id*

##### - Parameters
###### id
Esta rota receberá um parâmetro, chamado `id`, que será usado para encontrar o jogo que será deletado.

##### - Answers
###### OK 200 ```OK  ```
Se for retornado *OK*, é porque os parâmetros foram aceitos, os jogos foram encontrados e deletados com sucesso.
###### Not found 404 ```Not found ```
Se a resposta retornada for Bad Request, é porque a API recebeu e aceitou o parâmetro,
mas foi encontrado algum jogo com o parâmetro como *id*
###### Bad request 400 ``` Bad request ```
Esta resposta será retornada se os parâmetros recebidos forem inválidos.
<!-- ###### Internal Server Error 500 ```Internal Server Error ```
Esta resposta será retornada se algo de ruim acontecer no servidor. -->

<hr>

### PUT  Routes 
#### */update/:id*

##### - Parameters
*O ID do jogo precisa ser passado como parâmetro, mas as informações do jogo devem ser passadas como **parâmetros do corpo**. E qualquer um pode ser nulo ou indefinido.*
###### title
Este será o novo título do jogo.
###### price
Este será o novo preço do jogo. *Este valor pode ser **0***
###### year
Este será o novo ano em que o jogo foi criado.

##### - Answers
###### Created 200 ```OK```
Esta resposta será retornada se o jogo foi atualizado com sucesso.
###### Bad request 400 ```Bad request ```
Esta resposta será retornada se os parâmetros recebidos forem inválidos.
<!-- ###### Internal Server Error 500 ```Internal Server Error ```
Esta resposta será retornada se algo de ruim acontecer no servidor. -->
###### Not found 404 ```Not found ```
Se a resposta retornada for Bad Request, é porque a API recebeu e aceitou o parâmetro, mas não foi encontrado algum jogo com o parâmetro *id*.

<hr>


## ⛏️ Built Using <a name = "built_using"></a>

- [MySQL](https://https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Sequelize](https://sequelize.org/) - ORM Framework

