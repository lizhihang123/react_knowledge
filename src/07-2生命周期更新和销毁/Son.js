import React, { Component } from 'react'
export default class Son extends Component {
  componentDidMount() {
    this.timerId = setInterval(() => {
      console.log('别打我，我怕')
    }, 1000)
  }
  render() {
    console.log('子组件的render', 4)
    return <div>我是Son组件,我被打了{this.props.num}次</div>
  }
  componentDidUpdate() {
    console.log('子组件的componentDidUpdate', 5)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
}
