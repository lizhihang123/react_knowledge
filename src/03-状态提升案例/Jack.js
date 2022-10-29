import React, { Component } from 'react'

export default class Jack extends Component {
  handleClick = () => {
    this.props.changeMsg('you jump I look')
  }
  render() {
    return (
      <div>我是Jack组件
        <button onClick={this.handleClick}>说</button>
      </div>
    )
  }
}
