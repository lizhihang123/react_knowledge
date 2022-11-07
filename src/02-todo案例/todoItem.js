import React, { Component } from 'react'
import classNames from 'classnames'
export default class todoItem extends Component {
  state = {
    currentId: '', // 记录当前双击的id
    editValue: '' // edit框用
  }
  inputRef = React.createRef()
  // 修改“完成与否”的状态
  handleCheck = (id) => {
    this.props.changeComplete(id)
  }
  // 删除任务
  handleDelete = (id) => {
    this.props.handleDelete(id)
  }
  // 展现双击的表单
  showEdit = (item) => {
    this.setState(
      {
        currentId: item.id,
        editValue: item.task
      },
      () => {
        this.inputRef.current.focus()
      }
    )
  }
  // 修改edit的值
  handleEdit = (e) => {
    this.setState({
      editValue: e.target.value
    })
  }
  handleSure = (e, target) => {
    // 如果是按的ESC键 就会隐藏当前的edit框
    if (e.keyCode === 27) {
      this.setState({
        currentId: ''
      })
      return
    }
    // 1种情况是，键盘敲击回车，keyCode是13，一种情况是target是blur，也就是blur失去焦点事件
    if ((target === 'onKeyUp' && e.keyCode === 13) || target === 'onBlur') {
      this.props.handleSure(this.state.currentId, this.state.editValue)
      // 只要清空id 就能够让edit框隐藏
      this.setState({
        currentId: '',
        editValue: ''
      })
    }
  }
  render() {
    const { item } = this.props
    return (
      <li
        key={item.id}
        className={classNames({
          completed: item.done,
          editing: this.state.currentId === item.id
        })}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.done}
            onChange={() => this.handleCheck(item.id)}
          />
          <label onDoubleClick={() => this.showEdit(item)}>{item.task}</label>
          <button
            className="destroy"
            onClick={() => this.handleDelete(item.id)}
          ></button>
        </div>
        <input
          className="edit"
          value={this.state.editValue}
          onChange={this.handleEdit}
          onBlur={(e) => this.handleSure(e, 'onBlur')}
          onKeyUp={(e) => this.handleSure(e, 'onKeyUp')}
          ref={this.inputRef}
        />
      </li>
    )
  }
  componentDidUpdate() {
    // this.inputRef.current.focus()
  }
}
