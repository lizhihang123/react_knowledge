import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class Index extends Component {
  state = {
    isShowInput: false
  }
  inputRef = React.createRef()
  handleClick = () => {
    this.setState(
      {
        isShowInput: true
      },
      () => {
        console.log(this) // 这个的父级就是handleClick所在的作用域
        this.inputRef.current.focus()
      }
    )
  }
  render() {
    return (
      <div>
        123
        {this.state.isShowInput ? (
          <input type="text" placeholder="请输入评论内容" ref={this.inputRef} />
        ) : (
          <button onClick={this.handleClick}>点击显示输入框</button>
        )}
      </div>
    )
  }
}
let app = document.getElementById('root')
ReactDOM.render(<Index></Index>, app)
