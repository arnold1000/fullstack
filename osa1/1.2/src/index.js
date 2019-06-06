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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header header = {course}/>
      <Content content1 = {part1} content2 = {part2} content3 = {part3} amount1 = {exercises1} amount2 = {exercises2} amount3 = {exercises3}/>
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
