import React from 'react'

const Course = (props) => {
  return (
    <div>
    <Header title = {props.course}/>
    <Content content = {props.course}/>
    <Total total = {props.course}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title.name}</h1>
    </div>
  )
}

const Content = ({content}) => {
  const contents = () => content.parts.map(part => <Part key = {part.id} name = {part.name} exercises = {part.exercises} />)
  return (
    <div>
      {contents()}
    </div>
  )
}

const Total = (props) => {
  const sumIt = props.total.parts.reduce((x,y) => x + y.exercises, 0)

  return (
    <div>
    <b>total of {sumIt} exercises</b>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
   </div>
  )
}

export default Course
