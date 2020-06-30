require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Number = require('./models/number')
const { Mongoose } = require('mongoose')

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))
app.use(express.json())






let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/api/persons', (req, res) => {
  Number.find({}).then( numbers => {
    res.json(numbers)
  })
})

app.get('/info', (req, res) => {
  const date = new Date()
  res.send(`<div>
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${date}</p>
    </div>`)
})

app.get('/api/persons/:id', (request, response, next) => {
  Number.findById(request.params.id)
    .then(number => {
      if (number) {
        response.json(number)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Number.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const number = {
    name: body.name,
    number: body.number,
  }

  Number.findByIdAndUpdate(request.params.id, number, { new: true })
    .then(updatedNumber => {
      response.json(updatedNumber)
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'name is missing'
    })
  } else if (!body.number){
    return response.status(400).json({
      error: 'number is missing'
    })
  } else if(!(persons.every(person => person.name !== body.name))){
    return response.status(400).json({
      error: 'name must be unique'
    })
  }


  const number = new Number({
    name: body.name,
    number : body.number
  })

  number.save().then(result => {
    response.json(result)
  })

})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)




const PORT = process.env.PORT 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
