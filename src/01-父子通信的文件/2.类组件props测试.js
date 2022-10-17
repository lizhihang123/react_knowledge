import ReactDom from 'react-dom'
import { Component } from 'react'
import Hello2 from './2.Hello2'

// App是父组件 在父组件里面使用了子组件
class App extends Component {
  state = {
    name: 'hangge',
    age: '21',
    arr: [1, 2, 3]
  }
  handleChange = () => {
    this.setState({
      age: this.state.age + '1'
    })
  }
  render() {
    return (
      <div>
        <Hello2
          name={this.state.name}
          age={this.state.age}
          fea={this.state.arr}
        ></Hello2>
        <button onClick={this.handleChange}>点击修改name值</button>
      </div>
    )
  }
}
ReactDom.render(<App></App>, document.getElementById('root'))
