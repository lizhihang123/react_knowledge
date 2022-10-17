import ReactDom from 'react-dom'
import { Component } from 'react'
import Child from './5.Child'
// 1.一个input 输入名字
// 2.变量能够响应式变化
// 3.引入Child组件
class App extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    const { type, value, checked, name } = e.target
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    })
  }
  render() {
    return (
      <div>
        请输入配偶的名字:{' '}
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <Child name={this.state.name}></Child>
      </div>
    )
  }
}
ReactDom.render(<App></App>, document.getElementById('root'))
