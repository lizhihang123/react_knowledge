// import classNames from 'classnames'
import React, { Component } from 'react'
import TodoItem from './todoItem'
/* 
06. 双击表单
目标：双击label的值，能够显示edit表单的内容，此时还不需要修改
1. 给label绑定onDoubleClick事件
2. state数据里面声明一个 currentId 双击的时候修改这个currentId的值是我双击的值
3. 注意，editing类添加给li能够让这个li显示出edit框，但是li既要有editing类也要有completed类，怎么样兼容呢？
   使用classNames这个库，然后包裹起来，注意，只有在currentId和item.id相等时，才显示editing类
    <li
      key={item.id}
      className={classNames({
      completed: item.done,
      editing: this.state.currentId === item.id
      })}
    >
4. 双击的时候，能够显示label的值
  (难点) 原本思考的点是，label双击，onDoubleClick，但是input.edit是另外一个类哇，我双击，显示input.edit这个类, 怎么样把label的值给到input表单呢
  (解决)
  1. input.edit表单受控，value+onChange都要做好
  2. 双击的时候，showEdit方法调用时，currentId和editValue都要修改，直接传item，里面既有id也有task，修改state里面的值即可
5. edit框，失去焦点的时候，能够保存当前内容，edit框能够隐藏
  功能点：
  1. 绑定onBlur事件和onkeyUp事件，要注意，esc键的keyCode是27，回车的keyCode是13
  2. 子传父，通知父组件里面的list要修改。传递id和value值给父组件
  3. 修改后，Id和Value都要清空
*/
export default class todoMain extends Component {
  handleAll = (e) => {
    this.props.handleAll(e.target.checked)
  }
  render() {
    const { list, type } = this.props
    // 判断type到底是 all completed active还是啥？
    let showList = []
    // 判断type是什么 决定展示的内容
    // 当type的值发生改变时，这里的内容也会再次改变
    if (type === 'all') {
      showList = list
    } else if (type === 'completed') {
      showList = list.filter((item) => {
        return item.done
      })
    } else if (type === 'active') {
      showList = list.filter((item) => {
        return !item.done
      })
    }
    return (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={(e) => this.handleAll(e)}
          checked={showList && showList.every((item) => item.done)}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {showList.map((item) => (
            <TodoItem {...this.props} item={item} key={item.id} />
          ))}
        </ul>
      </section>
    )
  }
}
