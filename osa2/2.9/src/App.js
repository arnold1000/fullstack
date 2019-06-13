import React, { useState } from 'react'

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

  const personsToShow = persons.filter(filter => filter.name.toLowerCase().includes(newFilter))

  const renderPerson = () => personsToShow.map(person => <li key = {person.name}>{person.name} {person.number}</li>)

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input onChange = {handleFilterChange}/>
      <h2>add a new</h2>
      <form onSubmit = {addPerson}>
        <div>
          name: <input
          value = {newName}
          onChange = {handleNameChange}
          />
        </div>

        <div>
          number: <input
          value = {newNumber}
          onChange = {handleNumberChange}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {renderPerson()}
      </ul>
    </div>
  )

}

export default App
