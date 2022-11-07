import React, { Component } from 'react'
import ReactDom from 'react-dom'
export default class Index extends Component {
  state = {
    count: 1,
    msg: 0
  }
  // 测试 setState 第二个回调，能够获取本次更新后的结果，就是异步操作后的结果
  add = () => {
    this.setState((state) => ({ count: state.count + 2 }))
    this.setState(
      (state) => ({ count: state.count + 2 }),
      () => {
        console.log(this.state.count)
      }
    )
    // console.log(this.state.count) // 打印的还是最初始的值
  }
  render() {
    return (
      <div>
        {this.state.count}--{this.state.msg}
        <button onClick={this.add}>点击+1</button>
      </div>
    )
  }
}
ReactDom.render(<Index></Index>, document.getElementById('root'))
