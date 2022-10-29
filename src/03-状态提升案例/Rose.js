import React, { Component } from 'react'

export default class Rose extends Component {
  render() {
    return (
      <div>我是Rose组件
        ---{this.props.msg}
      </div>
    )
  }
}
