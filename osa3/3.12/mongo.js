const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const num = process.argv[4]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.sirew.mongodb.net/numbers?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const numberSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Number = mongoose.model('Number', numberSchema)



if(process.argv.length == 5) {

  const number = new Number({
    name: name,
    number: num
  })
 
  number.save().then( response => {
  console.log('added ' + response.name + ' number ' + response.number + ' to phonebook')
  mongoose.connection.close()
  })
} else{
  
  Number.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(person.name + ' ' + person.number)
    })
    mongoose.connection.close()
  })

}

