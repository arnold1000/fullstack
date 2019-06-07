import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part content = {props.content[0]} amount = {props.content[0]}/>
      <Part content = {props.content[1]} amount = {props.content[1]}/>
      <Part content = {props.content[2]} amount = {props.content[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
    <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.content.name} {props.amount.exercises}</p>
   </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]


  return (
    <div>
      <Header header = {course}/>
      <Content content = {parts}/>
      <Total total = {parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
