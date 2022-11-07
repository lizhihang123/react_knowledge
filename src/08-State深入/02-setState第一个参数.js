import React, { Component } from 'react'
import ReactDom from 'react-dom'
export default class Index extends Component {
  state = {
    count: 1,
    msg: 0
  }
  // 这个文件要测试 setState的第一个参数是一个回调函数，state参数能够获取到上一次的更新最新的结果
  add = () => {
    this.setState((state) => ({ count: state.count + 2 }))
    this.setState((state) => ({ count: state.count + 2 }))
    // 但是setState本身更新是异步的，这个是不变
    console.log(this.state.count);
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
