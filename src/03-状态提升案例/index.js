// 01-Jack和Rose案例
// Jack里面点击“说”这个按钮
// Rose里面就会显示“you jump I look”
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Jack from './Jack'
import Rose from './Rose'
/* 
01-Jack里面点击说 Rose里面显示内容
02-数据在Jack里面要传递给Rose
03-数据提升到父组件，然后传递给Rose组件
03.1 子传父 父亲接受，然后父传子传递给子组件
*/
export default class Index extends Component {
  state = {
    msg: ''
  }
  changeMsg = (msg) => {
    this.setState({
      msg: msg
    })
  }
  render() {
    return (
      <div>
        我是父组件
        <Jack changeMsg={this.changeMsg}></Jack>
        <Rose msg={this.state.msg}></Rose>
      </div>
    )
  }
}

ReactDom.render(<Index></Index>, document.getElementById('root'))