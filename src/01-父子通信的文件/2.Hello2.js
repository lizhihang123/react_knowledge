import { Component } from 'react'
// 1.写一个类组件 这个是子组件
// 2.类组件直接打印this.props.age
// 3.使用组件的地方 传入变量 name age
export default class Hello extends Component {
  handleChangeClick = () => {
    // this.props.name = '123'
    this.props.fea[0] = 3
  }
  render() {
    // 类组件可以直接通过this访问到props数据
    return (
      <div>
        <div>我是age数据{this.props.age}</div>
        <div>我是name数据{this.props.name}</div>
        <div>我是arr数据{this.props.fea[0]}</div>
        <button onClick={this.handleChangeClick}>
          子组件里面修改props数据
        </button>
      </div>
    )
  }
}
