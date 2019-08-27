import React from 'react'
import personService from '../services/personservice'


const Persons = (props) => {

  const personsToShow = props.allpeople.filter(person => person.name.toLowerCase().includes(props.usefilter))
  

  const renderPerson = () => personsToShow.map(person => <p key = {person.name}>{person.name} {person.number} <button onClick = {() => props.deletion(person.id)}>delete</button></p>)

  return(
    <div>
      {renderPerson()}
    </div>
  )
}

export default Persons
