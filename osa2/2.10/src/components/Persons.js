import React from 'react'

const Persons = (props) => {

  const personsToShow = props.allpeople.filter(filter => filter.name.toLowerCase().includes(props.usefilter))

  const renderPerson = () => personsToShow.map(person => <p key = {person.name}>{person.name} {person.number}</p>)

  return(
    <div>
      {renderPerson()}
    </div>
  )
}

export default Persons
