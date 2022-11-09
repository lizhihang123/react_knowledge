import React, { PureComponent } from 'react'

export default class PureSon extends PureComponent {
  render() {
    console.log('纯组件更新啦~')
    return <div>我是纯纯的子组件~</div>
  }
}
