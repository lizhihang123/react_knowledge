import React, { Component } from 'react'

export default class todoHeader extends Component {
  state = {
    name: ''
  }
  addTask = (e) => {
    // console.log(e.keyCode)
    // if (e.keyCode === 13) {
    //   this.props.addFn(e.target.value)
    // }
    if (e.keyCode !== 13) return
    if (e.target.value.trim() === '') return
    this.props.addFn(e.target.value)
    this.setState({
      name: ''
    })
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          name="task"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          onKeyUp={(e) => this.addTask(e)}
        />
      </header>
    )
  }
}
