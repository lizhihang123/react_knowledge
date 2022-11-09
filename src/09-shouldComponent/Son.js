import React, { Component } from 'react'
export default class Son extends Component {
  // componentDidUpdate() {
  //   console.log('1')
  // }
  shouldComponentUpdate(nextProps) {
    // console.log(this.props)
    // console.log(nextProps)
    if (nextProps.money === this.props.money) {
      return false
    }
    return true
  }
  render() {
    console.log('我是Son1组件更新了')
    return <div>我是Son1组件--{this.props.money}</div>
  }
}
