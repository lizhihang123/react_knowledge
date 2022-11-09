import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PureSon from './PureSon'
export default class Index extends Component {
  state = {
    msg: 'hello',
    user: {
      name: '123'
    },
    info: {
      height: '170'
    }
  }
  handleClick = () => {
    this.setState({
      msg: 'hello'
    })
  }
  handleUser = () => {
    this.setState({
      user: {
        name: '123'
      }
    })
  }
  // handleInfo = () => {
  //   this.state.info.height = '180'
  //   this.setState({
  //     info: this.state.info
  //   })
  // }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>修改msg的值</button>
        <button onClick={this.handleUser}>修改user的值</button>
        <button onClick={this.handleInfo}>修改Info的值</button>
        <PureSon
          msg={this.state.msg}
          user={this.state.user}
          info={this.state.info}
        ></PureSon>
      </div>
    )
  }
}
let app = document.getElementById('root')
ReactDOM.render(<Index></Index>, app)
