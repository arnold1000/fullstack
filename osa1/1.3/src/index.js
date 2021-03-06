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
      <Part content = {props.content1} amount = {props.amount1}/>
      <Part content = {props.content2} amount = {props.amount2}/>
      <Part content = {props.content3} amount = {props.amount3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
    <p>Number of exercises {props.total}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.content} {props.amount}</p>
   </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
 const part1 = {
   name: 'Fundamentals of React',
   exercises: 10
 }
 const part2 = {
   name: 'Using props to pass data',
   exercises: 7
 }
 const part3 = {
   name: 'State of a component',
   exercises: 14
 }

  return (
    <div>
      <Header header = {course}/>
      <Content content1 = {part1.name} content2 = {part2.name} content3 = {part3.name} amount1 = {part1.exercises} amount2 = {part2.exercises} amount3 = {part3.exercises}/>
      <Total total = {part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
