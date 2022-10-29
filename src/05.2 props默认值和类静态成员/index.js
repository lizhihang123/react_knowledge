import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Son from './Son'

class Hello extends Component {
  state = {
    msg: [1, 2, 3]
  }
  render() {
    return (
      <div>
        123
        <Son
          msg={this.state.msg}
          car={{ name: '123', brand: '奔驰', price: '199' }}
        ></Son>
      </div>
    )
  }
}
ReactDom.render(<Hello></Hello>, document.getElementById('root'))
