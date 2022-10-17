import ReactDom from 'react-dom'
import { Component } from 'react'
import Child from './6.Child'
class App extends Component {
  state = {
    age: 19
  }
  getChildMsg = (msg) => {
    console.log(msg)
    this.setState({
      age: msg
    })
  }
  render() {
    return (
      <div>
        <Child getMsg={this.getChildMsg}></Child>
        <p>我是子组件来的值{this.state.age}</p>
      </div>
    )
  }
}
ReactDom.render(<App></App>, document.getElementById('root'))
