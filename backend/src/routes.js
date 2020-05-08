const express = require('express')
const crypto = require('crypto')
routes = express.Router()


/*
**  METODOS
*     GET: Buscar informação do back-end - Ex: Quando acessa o site
*     POST: Criar informação no back-end  - Ex: Quando envia um formulário para cadastrar no DB
*     PUT: Alterar informação
*     DELETE: Deletar informação
**
*/

/*
**  TIPOS DE PARAMETROS
*     Query Params: Parâmetros nomeados enviados na rota, do lado cliente
        -   "?" Filtar
        -   "&" Anexa mais parametros
        -   "page=3" Paginação
        Ex - localhost:3333/usuarios?page3&nome=josivan&idade=28
             |    ROTA     |RECURSO|
 
*
**
*     Route Params: Parâmetros utilizados para identificar recursos
        -   Informar no lado do servidor qual parametro vai ser buscado usando "/:" e em seguida o nome do parâmetro:
                Ex - app.get('/usuarios/:nome', function(req, res){...}

        -   Informa no lado cliente o parametro que vai buscar usando "/" e em seguita o parâmetro:
                Ex - localhost:3333/usuarios/josivan
                     |    ROTA     |RECURSO|
*
**
*     Request Body: - Quando o usuário está requisitando algo. 
                    - Ele quer criar ou alterar recursos.
                    - Metodo POST
                    - Dados enviados no formato JSON
                    - Back-end tem que estar preparado para receber este formato
**
*/


/*
routes.get('/usuarios/:id', function(req, res){
    const paramsQuery = req.query //Guarda os dados que usuario está buscando pelo parametro Query
    console.log(paramsQuery)

    const paramsRouteID = req.params //Guarda os dados que usuario está buscando pelo parametro Route
    console.log(paramsRouteID)

    return res.json({
        nome: "Josivan",
        atividade: "Semana Omnistack"
    })
})
*/

routes.post('/ongs', function(req, res){
    const {name, email, whatsapp, city, uf} = req.body //Guarda os dados que usuario quer criar ou alterar

    const id = crypto.randomBytes(4).toString('HEX')
    
    

    return res.json()
})

module.exports = routes //Exportar Rotas