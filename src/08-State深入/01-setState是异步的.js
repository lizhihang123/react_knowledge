/* 
这个文件表明，setState更新如果是同一个变量 多次更新 只会取出最后一个
*/
import React, { Component } from 'react'
import ReactDom from 'react-dom'
export default class Index extends Component {
  state = {
    count: 1,
    msg: 0
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    })
    this.setState({
      count: this.state.count + 3
    })
    this.setState({
      count: this.state.count + 2
    })
    this.setState({
      msg: this.state.msg + 2
    })
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
