// import { Component } from 'react'
import ReactDom from 'react-dom'
import Hello from './1.Hello'

function App() {
  return (
    <div>
      <Hello name="xiaohangge" age="你好" bool={false}></Hello>
      <Hello name="xiaohangge" age={20} bool={true}></Hello>
    </div>
  )
}
ReactDom.render(App(), document.getElementById('root'))
