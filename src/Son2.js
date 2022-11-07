import React, { Component } from 'react'

export default class Son2 extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.car === this.props.car) {
      return false
    }
    return true
  }
  render() {
    console.log('我是Son2组件更新了')
    return <div>我是Son2组件--{this.props.car}</div>
  }
}
