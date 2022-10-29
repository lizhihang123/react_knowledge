import React, { Component } from 'react'
import Son from './Son'
export default class Father extends Component {
  render() {
    return (
      <div>
        我是Father组件
        <Son></Son>
      </div>
    )
  }
}
