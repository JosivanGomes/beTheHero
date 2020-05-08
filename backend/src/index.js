const express = require('express')
const routes = require('./routes') // "./" especifica que o arquivo está na mesma pasta (não é um pacote)

const app = express()

app.use(express.json()) //Receber dados no formato JSON 
app.use(routes)
app.listen(3333)

//53:44

