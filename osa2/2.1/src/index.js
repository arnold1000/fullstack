import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
  return (
    <div>
    <Header title = {props.course}/>
    <Content content = {props.course}/>

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

  return (
    <div>
    <p>Number of exercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
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

const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }

      ]
    }

  return (
    <div>
      <Course course = {course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
