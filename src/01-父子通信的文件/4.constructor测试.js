import ReactDom from 'react-dom'
import { Component } from 'react'
import Hello2 from './4.constructor'

// 测试constructor
// 1.引入子组件
// 2.往子组件里面传递数据
// 3.子组件里面要用constructor(props) super(props)来接收
class App extends Component {
  state = {
    name: 'hangge',
    age: '21',
    bool: false,
    arr: [1, 2, 3]
  }
  render() {
    return (
      <div>
        <Hello2
          name={this.state.name}
          age={this.state.age}
          fea={this.state.arr}
        ></Hello2>
      </div>
    )
  }
}
ReactDom.render(<App></App>, document.getElementById('root'))
