import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/personservice'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: '' , number: ''}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name : newName,
      number : newNumber
    }

    if(persons.every(person => person.name !== newName)){

      personService
        .create(personObject)
        .then(person => {
          setPersons(persons.concat(person))
          setNewName('')
          setNewNumber('')
          setErrorMessage(`Added ${personObject.name} `)
          setTimeout(() => {setErrorMessage(null)}, 5000)
        }).catch(error => {
          console.log(error.response.data)
          setErrorMessage(error.response.data.error)
          setTimeout(() => {setErrorMessage(null)}, 5000)
        })

        } else {

      const confirmupdate = window.confirm(`${personObject.name} is already added to the phonebook, replace the old number with a new one?`)

      const id = persons.find(person => person.name === personObject.name).id


      if(confirmupdate){
        personService.update(id, personObject)
        .then(response => {
          setPersons(persons.map(person => person.id !== id ? person : response))
          setNewName('')
          setNewNumber('')
          setErrorMessage(`Changed the number of ${personObject.name} `)
          setTimeout(() => {setErrorMessage(null)}, 5000)
        })
        .catch(error => {
          setErrorMessage(`Information of ${personObject.name} has already been removed from server`)
          setPersons(persons.filter(n => n.id !== id))
          setTimeout(() => {setErrorMessage(null)}, 5000)
          setNewName('')
          setNewNumber('')
        }
        )
      }

    }

  }

  const deletePerson = (id) => {
    const name = persons.find(person => person.id === id)
    const confirmDelete = window.confirm(`Delete ${name.name} ?`)

    if(confirmDelete){
      personService.deletion(id)
      .then(
        setPersons(persons.filter(person => person !== name ))
        ,setErrorMessage(`Deleted ${name.name} `)
        ,setTimeout(() => {setErrorMessage(null)}, 5000)

      ).catch(error => {
        setErrorMessage(`Information of ${name.name} has already been removed from server`)
        setPersons(persons.filter(n => n.id !== id))
        setTimeout(() => {setErrorMessage(null)}, 5000)
      })


    }
  }

  const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      <Filter filterchange = {handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm submit = {addPerson} name = {newName} number = {newNumber} namechange = {handleNameChange} numberchange = {handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons allpeople = {persons} usefilter = {newFilter} service = {personService} deletion = {deletePerson}/>
    </div>
  )

}

export default App
