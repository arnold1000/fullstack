import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <div>
    <h1>{props.header}</h1>
  </div>
)

const Content = (props) => (
  <div>
    <p>{props.content1} {props.amount1}</p>
    <p>{props.content2} {props.amount2}</p>
    <p>{props.content3} {props.amount3}</p>
  </div>
)

const Total = (props) => (
  <div>
    <p>{props.total}</p>
  </div>
)

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
