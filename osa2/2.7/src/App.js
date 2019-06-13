import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const handleOnChange = (event) => {
    setNewName(event.target.value)

  }

  const addPerson = (event) => {
    event.preventDefault()

    if(persons.every(person => person.name !== newName)){
      const personObject = {
        name : newName
      }
      setPersons(persons.concat(personObject))
    } else {
      alert(`${newName} on jo luettelossa`)
    }

  }

  const renderPerson = () => persons.map(person => <li key = {person.name}>{person.name}</li>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <div>
          name: <input
          value = {newName}
          onChange = {handleOnChange}
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
