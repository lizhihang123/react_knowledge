import React, { Component } from 'react'

export default class todoHeader extends Component {
  // 存在疑惑 类里面和render函数里面写法
  // 类里面 写变量或者 函数
  // render里面可以写各种表达式语句 声明变量要用let和const
  state = {
    text: ''
  }
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.addFn(e.target.value)
    }
  }
  handleChange = () => {}
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          name="task"
          value={this.state.text}
          onKeyUp={this.handleKeyUp}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
      </header>
    )
  }
}
