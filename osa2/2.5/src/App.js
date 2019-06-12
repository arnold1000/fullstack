import React from 'react'
import Course from './components/Course'

const App = ({ courses }) => {
  return (
    <div>
      {courses.map(part => <Course key = {part.name} course = {part}/>)}
    </div>
  )
}

export default App
