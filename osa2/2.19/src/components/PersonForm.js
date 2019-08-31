import React from 'react'

const PersonForm = (props) => {
  return(
    <div>
    <form onSubmit = {props.submit}>
      <div>
        name: <input
        value = {props.name}
        onChange = {props.namechange}
        />
      </div>
      <div>
        number: <input
        value = {props.number}
        onChange = {props.numberchange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>

    </form>


    </div>
  )
}

export default PersonForm
