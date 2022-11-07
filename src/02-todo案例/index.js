import ReactDom from 'react-dom'
import { Component } from 'react'
import './style/base.css'
import './style/index.css'

import TodoHeader from './todoHeader'
import TodoMain from './todoMain'
import TodoFooter from './todoFooter'
/* 
3. 渲染结构
目标：todolist列表能够展示任务的数据 + completed类控制删除线样式(静态) + 点击checkbox，能够动态添加和移除删除样式的
  1. index.js组件的list数据传递给todoMain.js组件
  2. list的每个done属性控制鼠标的completed类 -> li的类
  3. 每个input#checkbox都有value和handleCheck
     (难点)每个input的checked而不是value值，由谁控制？如果是todoMain.js组件，很困难
     (易错点)checkbox表单应该是checked而不是value
     (解决)checked来自item.done
           这里的表单控制，应该是子传父，传递id给父组件调用父组件里面的一个方法
     (难点)父组件里面如何去修改指定id的done属性呢？
     (解决)使用map方法，区分开item.id===id和不等的两种情况，如果不相等，直接return item 表示没有变化，如果相等，要更新，利用延展运算符 + 写信的属性进行替换
4. 删除任务
目标：点击x删除按钮，能够删除当前任务
  1. todoMain.js -> 传递id给index.js组件，子传父，调用父组件里面的方法
  2. 父组件里面删除，list.filter过滤即可
5. 添加任务
目标：搜索框输入内容，按回车键，任务能够添加到下方，任务出现在第一个
  1. todoHeader.js -> 的input绑定内容和onChange事件
  2. Header里面要有回车键盘事件 -> 敲回车，内容传递 index.js
  3. (疑惑)到底是keyUp还是onChange事件呢？
     (解决)keyUp也要绑定，onChange也要绑定(为了，能够修改表单数据时，获取到最新的值，为了能够让表单是受控的，不然输入不了数据)
  4. onKeyUp的时候，传入text值，子传父，调用方法
     index.js如何修改？
      this.setState({
        list: [{ id: new Date(), task: text, done: false }, ...this.state.list]
      })

14. 自动获取焦点怎么做
1. 把每个小li拆分为一个组件
2. 为什么要拆分为一个组件。这样每个小li在被遍历的时候，就可以都创建一个inputRef了，如果不拆分，就会要手动创建多个ref
3. 
*/
class App extends Component {
  state = {
    list: [
      { id: 1, task: '吃饭', done: false },
      { id: 2, task: '睡觉', done: true },
      { id: 3, task: '跑步', done: false }
    ],
    type: 'all'
  }
  // 修改完成与否的状态
  changeComplete = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
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
  // 删除任务
  handleDelete = (id) => {
    this.setState({
      list: this.state.list.filter((item) => {
        return item.id !== id
      })
    })
  }
  // 添加任务
  addFn = (text) => {
    this.setState({
      list: [{ id: new Date(), task: text, done: false }, ...this.state.list]
    })
  }
  // 修改任务
  handleSure = (id, value) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id !== id) {
          return item
        } else {
          return {
            ...item,
            task: value
          }
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
  // 修改高亮
  changeType = (type) => {
    this.setState({
      type: type
    })
  }
  // 修改全选
  handleAll = (bool) => {
    this.setState({
      list: this.state.list.map((item) => {
        return {
          ...item,
          done: bool
        }
      })
    })
  }
  // 本地存储：
  // 1. 刚进入页面的时候，要获取数据时，从本地存储里面拿，有数据，就取出，没有就用空数组 componetDidMount
  // 2. 修改了数据，就要存到本地存储里面去，利用钩子函数 componentDidUpdate
  render() {
    return (
      <section className="todoapp">
        <TodoHeader addFn={this.addFn}></TodoHeader>
        <TodoMain
          list={this.state.list}
          changeComplete={this.changeComplete}
          handleDelete={this.handleDelete}
          handleSure={this.handleSure}
          type={this.state.type}
          handleAll={this.handleAll}
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
  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.list))
  }
  componentDidMount() {
    this.setState({
      list: JSON.parse(localStorage.getItem('todos')) || []
    })
  }
}
ReactDom.render(<App></App>, document.getElementById('root'))
