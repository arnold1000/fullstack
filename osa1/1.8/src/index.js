import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>

      <p>all {(props.good + props.neutral + props.bad)}</p>
      <p>average {(props.good - props.bad)/(props.good + props.neutral + props.bad)}</p>
      <p>positive {props.good/(props.good + props.neutral + props.bad) * 100} %</p>
    </div>
  )
}

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {() => setGood(good + 1)} text = "good"/>
      <Button handleClick = {() => setNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick = {() => setBad(bad + 1)} text = "bad"/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
