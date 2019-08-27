import React, { useState, useEffect } from 'react'
import Axios from 'axios'
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
        })
      }

    }

  }

  const deletePerson = (id) => {
    const name = persons.find(person => person.id === id)
    const confirmDelete = window.confirm(`Delete ${name.name} ?`)

    if(confirmDelete){
      personService.deletion(id)
      .then(setPersons(persons.filter(person => person !== name )))
    }
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
      <Filter filterchange = {handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm submit = {addPerson} name = {newName} number = {newNumber} namechange = {handleNameChange} numberchange = {handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons allpeople = {persons} usefilter = {newFilter} service = {personService} deletion = {deletePerson}/>
    </div>
  )

}

export default App
