import ReactDom from 'react-dom'
import { Component } from 'react'
import './style/base.css'
import './style/index.css'

import TodoHeader from './todoHeader'
import TodoMain from './todoMain'
import TodoFooter from './todoFooter'

class App extends Component {
  state = {
    list: [
      { id: 1, task: '吃饭', done: false },
      { id: 2, task: '睡觉', done: true },
      { id: 3, task: '跑步', done: false }
    ],
    type: 'all'
  }
  // 删除任务
  deleteFn = (id) => {
    console.log(id)
    this.setState({
      list: this.state.list.filter((item) => {
        return item.id !== id
      })
    })
  }
  // 改变任务状态
  changeFn = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        // (难点) 如果是id不一致直接返回item 如果是一致的
        // 就要修改对应的done属性 -> 怎么改？解构赋值原本的 + 新写对应的属性 + 会进行替换
        // (易错点)
        // 直接 if (item.id === id) {item.done === !item.donw} 这样是错误的写法 因为直接修改了原本的数据了
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item
        }
      })
    })
  }
  // 添加任务状态
  // (难点)
  // 1.不能够修改原值 -> 状态不可变 直接 this.state.list.push(value)这就是错的
  // 2.使用[]里面，解构原始的数组，然后传入一个新的对象，其值是task的值; task是value值，id用Date.now()
  // 3.最好新添加的放到第一个去

  addFn = (value) => {
    this.setState({
      list: [{ id: Date.now(), task: value, done: false }, ...this.state.list]
    })
  }

  // 编辑修改
  EditChangeFn = (id, task) => {
    // 假如说修改某一个任务的数据，
    // console.log(id, task)
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            task
          }
        } else {
          return item
        }
      })
    })
  }
  // 清空任务
  clearFn = () => {
    this.setState({
      list: this.state.list.filter((item) => !item.done)
    })
  }
  // 点击切换任务状态高亮
  changeType = (type) => {
    this.setState({
      type: type
    })
  }
  // 全选和反选的修改
  changeAllFn = (checked) => {
    this.setState({
      list: this.state.list.map((item) => {
        return {
          ...item,
          done: checked
        }
      })
    })
  }
  render() {
    return (
      <section className="todoapp">
        <TodoHeader addFn={this.addFn}></TodoHeader>
        <TodoMain
          list={this.state.list}
          type={this.state.type}
          deleteFn={this.deleteFn}
          changeFn={this.changeFn}
          EditChangeFn={this.EditChangeFn}
          changeAllFn={this.changeAllFn}
        ></TodoMain>
        <TodoFooter
          list={this.state.list}
          clearFn={this.clearFn}
          type={this.state.type}
          changeType={this.changeType}
        ></TodoFooter>
      </section>
    )
  }
  // dom挂载好 -> 数据存到本地存储，拿
  componentDidMount() {
    this.setState({
      list: JSON.parse(localStorage.getItem('list')) || []
    })
  }
  // dom更新好 -> 去修改本地存储的数据，存好
  componentDidUpdate() {
    localStorage.setItem('list', JSON.stringify(this.state.list))
  }
}
ReactDom.render(<App></App>, document.getElementById('root'))
