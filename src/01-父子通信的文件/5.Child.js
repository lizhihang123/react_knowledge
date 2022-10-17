import { Component } from 'react'
export default class Hello extends Component {
  render() {
    // 类组件可以直接通过this访问到props数据
    return (
      <div>
        <p>妈妈的名字:{this.props.name}</p>
      </div>
    )
  }
}
