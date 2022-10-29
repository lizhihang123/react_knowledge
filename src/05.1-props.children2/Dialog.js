import React, { Component } from 'react'

export default class Dialog extends Component {
  render() {
    return (
      <div>
        我是dialog组件
        {this.props.title('abc')}
        <div className="content">{this.props.children}</div>
      </div>
    )
  }
}
