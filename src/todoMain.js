import React, { Component } from 'react'

export default class todoMain extends Component {
  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.list.map((item) => (
            <li key={item.id} className={item.done ? 'completed' : ''}>
              <div className="view">
                <input className="toggle" type="checkbox" checked={item.done} />
                <label>{item.task}</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Create a TodoMVC template" />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
