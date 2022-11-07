import React, { PureComponent } from 'react'

export default class PureSon extends PureComponent {
  componentDidUpdate() {
    console.log(1)
  }
  render() {
    return <div>我是纯纯的子组件~</div>
  }
}
