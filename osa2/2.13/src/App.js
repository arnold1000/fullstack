import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

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

const showcountry = (country) => {
  setNewFilter(country.name.toLowerCase())
}

const renderCountry = () => {
  if(newFilter === ''){
    return <p></p>
  } else if (countriesToShow.length > 10){
    return <p>Too many matches, specify another filter</p>
  } else if (countriesToShow.length === 1){
    return(
      <Country country = {countriesToShow[0]}/>
    )
  } else {
    return countriesToShow.map(country => <div key = {country.name}>{country.name} <button onClick = {() => showcountry(country)}>show</button></div>)
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
