import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

const [ newCountry, setNewCountry ] = useState([])
const [ newFilter, setNewFilter ] = useState('')

const handleFilterChange = (event) => {
  setNewFilter(event.target.value)
}

  useEffect(() => {
  const eventHandler = response => {
    setNewCountry(response.data)

  }
  const promise = axios.get('https://restcountries.eu/rest/v2/all')
  promise.then(eventHandler)
}, [])

const countriesToShow = newCountry.filter(country => country.name.toLowerCase().includes(newFilter))


const renderCountry = () => {
  if(newFilter === ''){
    return <p></p>
  } else if (countriesToShow.length > 10){
    return <p>Too many matches, specify another filter</p>
  } else if (countriesToShow.length === 1){
    return (
        <div>
        <h1>{countriesToShow[0].name}</h1>
        <p>capital {countriesToShow[0].capital}</p>
        <p>population {countriesToShow[0].population}</p>
        <h2>languages</h2>
        {countriesToShow[0].languages.map(language => <li key = {language.name}>{language.name}</li>)}
        <img src={countriesToShow[0].flag} alt={"Logo"} width={250}/>
        </div>
    )
  } else {
    return countriesToShow.map(country => <p key = {country.name}>{country.name}</p>)

  }

}


  return (
    <div>
    find countries <input onChange = {handleFilterChange}/>
    {renderCountry()}
    </div>
  )

}

export default App
