import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Dialog from './Dialog'

class Hello extends Component {
  state = {
    msg: [1, 2, 3]
  }
  render() {
    return (
      <div>
        123
        <Dialog title={(value) => <h4>温馨提示 {value}</h4>}>
          我是dialog组件
        </Dialog>
      </div>
    )
  }
}
ReactDom.render(<Hello></Hello>, document.getElementById('root'))
