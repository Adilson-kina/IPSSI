// primeiro instalar o express, vai procurar o módulo
const express = require('express')
const app = express() // inicializar um app

// depois do db
const mongoose = require('mongoose')

// modelo
const Person = require('./models/Person')

// forma de ler JSON UTILIZAR MIDDLEWARES
app.use( // criando os MIDDLEWARES
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// rotas
app.post('/person', async (req, res) => {
  const { name, salary, approved } = req.body

  const person = {
    name,
    salary,
    approved,
  }

  try {
    await Person.create(person)

    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

// rota inicial GET pegar algo so servidor  endpoint
app.get('/', (req, res) => {

  // mostrar requisição mostrar a resposta que vai ser JSON
  res.json({ message: 'Oi Express' })
})

mongoose.connect('mongodb://localhost:27017/ARQUIVO')
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))
