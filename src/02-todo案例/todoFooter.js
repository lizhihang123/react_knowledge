import React, { Component } from 'react'

export default class todoFooter extends Component {
  // 清空任务数
  clear = () => {
    this.props.clearFn()
  }
  handleClick = (type) => {
    this.props.changeType(type)
  }
  render() {
    // 是否显示 clear completed按钮
    let isShow = this.props.list.some((item) => item.done)
    // type变量 用于控制 下面的任务状态的切换
    let { list, type } = this.props
    // 如果一个任务也没有 就不显示底部内容
    if (list.length === 0) {
      return null
    }
    // 剩余的任务数
    let leftCount = list.filter((item) => item.done === false).length
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{leftCount}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a
              className={type === 'all' ? 'active' : ''}
              href="#/"
              onClick={() => this.handleClick('all')}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={type === 'active' ? 'active' : ''}
              href="#/active"
              onClick={() => this.handleClick('active')}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={type === 'completed' ? 'active' : ''}
              href="#/completed"
              onClick={() => this.handleClick('completed')}
            >
              Completed
            </a>
          </li>
        </ul>
        {/* 只有isShow是true的时候 才会显示按钮 */}
        {isShow && (
          <button className="clear-completed" onClick={this.clear}>
            Clear completed
          </button>
        )}
      </footer>
    )
  }
}
