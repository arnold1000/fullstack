import React from 'react'

const Country = (props) => {
  return(
    <div>
      <h1>{props.country.name}</h1>
        <p>capital {props.country.capital}</p>
        <p>population {props.country.population}</p>
      <h2>languages</h2>
        {props.country.languages.map(language => <li key = {language.name}>{language.name}</li>)}
        <img src={props.country.flag} alt={"Logo"} width={250}/>
    </div>
  )
}

export default Country
