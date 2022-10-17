import { Component } from 'react'
// 1.父组件传递过来回调函数
// 2.子组件声明state数据
// 3.子组件声明一个函数 调用父组件传递过来的函数 传值进去 打印值
export default class Hello extends Component {
  state = {
    msg: 'React'
  }
  getMsgFn = () => {
    this.props.getMsg(this.state.msg)
  }
  render() {
    return (
      <div>
        <p>我来测试子传父</p>
        <button onClick={this.getMsgFn}>点击测试子传父</button>
      </div>
    )
  }
}
