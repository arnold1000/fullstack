import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: ''}
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

    if(persons.every(person => person.name !== newName)){
      const personObject = {
        name : newName,
        number : newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} on jo luettelossa`)
    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterchange = {handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm submit = {addPerson} name = {newName} number = {newNumber} namechange = {handleNameChange} numberchange = {handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons allpeople = {persons} usefilter = {newFilter}/>
    </div>
  )

}

export default App
