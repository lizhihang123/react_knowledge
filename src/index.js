import ReactDom from 'react-dom'
import { Component } from 'react'
import './style/base.css'
import './style/index.css'

import TodoHeader from './todoHeader'
import TodoMain from './todoMain'
import TodoFooter from './todoFooter'

class App extends Component {
  state = {
    list: [
      { id: 1, task: '吃饭', done: false },
      { id: 2, task: '睡觉', done: true },
      { id: 3, task: '跑步', done: false }
    ]
  }
  render() {
    return (
      <section className="todoapp">
        <TodoHeader></TodoHeader>
        <TodoMain list={this.state.list}></TodoMain>
        <TodoFooter></TodoFooter>
      </section>
    )
  }
}
ReactDom.render(<App></App>, document.getElementById('root'))
