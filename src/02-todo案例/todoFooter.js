import React, { Component } from 'react'

/* 
08.显示底部的任务数量
  父传子就好了
  const length = this.props.list.filter((item) => !item.done).length
09.清空所有完成的任务
  子传父,父组件的this.state.list直接过滤就好了
*/
export default class todoFooter extends Component {
  clear = () => {
    this.props.clearFn()
  }
  // 子传父 修改高亮状态
  changeType = (type) => {
    this.props.changeType(type)
  }
  render() {
    // 没有完成的任务数量
    const unFinishLength = this.props.list.filter((item) => !item.done).length
    // 完成的任务数量
    const finishLength = this.props.list.filter((item) => item.done).length
    // 底部type的切换
    const { type } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{unFinishLength}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={type === 'all' ? 'active' : ''}
              onClick={() => this.changeType('all')}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/active"
              className={type === 'active' ? 'active' : ''}
              onClick={() => this.changeType('active')}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/completed"
              className={type === 'completed' ? 'active' : ''}
              onClick={() => this.changeType('completed')}
            >
              Completed
            </a>
          </li>
        </ul>
        {/* length是有几个任务是没有完成的 而 clear completed是有已经完成的任务 如果 length > 0 */}
        {finishLength > 0 && (
          <button className="clear-completed" onClick={this.clear}>
            Clear completed
          </button>
        )}
      </footer>
    )
  }
}
