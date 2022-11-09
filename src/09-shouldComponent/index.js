import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Son from './Son'
import Son2 from './Son2'
import PureSon from './PureSon'
export default class Index extends Component {
  state = {
    count: 123,
    money: 111,
    car: '奔驰',
    list: ['吃饭', '睡觉', '打豆豆'],
    current: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  changeMoney = () => {
    this.setState({
      money: 200
    })
  }
  changeCar = () => {
    this.setState({
      car: '宝马'
    })
  }
  // 修改爱好
  // 小结：
  // 1. setState方法，是异步更新，使用完立即去获取state的值，还是旧的值。| 不会立即更新，而是会进行整合(整合的意思就是，修改同一个值多次，只拿最后一次过来用 + 修改不同的值，会进行合并)
  // 2. setState方法，可以跟一个参数，就是对象，然后改值
  //   第一个参数可以是回调函数，然后回调函数的参数能够获取到上一次更新的最新的结果
  //   第二个参数也是一个函数，里面能够获取到最新的值
  // 3. 如果是跟渲染没有关系的变量，不要放在state里面。vue也是，react也是，就能够减少dom更新
  //   介绍了父组件更新，子组件也更新的场景。以及shouldComponentUpdate()钩子函数，第一个参数获取到最新的nextProps就是最新的dom，函数里面的this.props是旧的dom。我们能够比较差异，返回true或者false来控制是否显示
  changeHobby = () => {
    this.setState({
      current: (Math.random() * this.state.list.length) | 0
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.current === this.state.current) {
      return false
    }
    return true
  }
  render() {
    console.log('app组件更新啦')
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>点击count++</button>
        <Son money={this.state.money}></Son>
        <Son2 car={this.state.car}></Son2>
        <button onClick={this.changeMoney}>修改钱</button>
        <button onClick={this.changeCar}>修改车</button>
        <h1>兴趣爱好</h1>
        <span>{this.state.list[this.state.current]}</span>
        <button onClick={this.changeHobby}>点击修改爱好</button>
        <PureSon></PureSon>
      </div>
    )
  }
}
let app = document.getElementById('root')
ReactDOM.render(<Index></Index>, app)
