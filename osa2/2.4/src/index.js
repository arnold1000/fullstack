import React from 'react'
import ReactDOM from 'react-dom'

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

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(part => <Course key = {part.name} course = {part}/>)}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
