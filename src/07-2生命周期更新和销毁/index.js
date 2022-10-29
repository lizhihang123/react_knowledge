import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Son from './Son'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  handleChange = () => {
    // console.log('修改数据')
    this.setState({
      num: this.state.num + 1
    })

    // this.state.name += '4'
    // this.forceUpdate()
  }
  render() {
    console.log('父组件的render', 2)
    return (
      <div>
        index
        {this.state.name}
        <button onClick={this.handleChange}>打豆豆</button>
        {this.state.num <= 6 && <Son num={this.state.num} />}
      </div>
    )
  }
  componentDidUpdate() {
    console.log('父组件的componentDidUpdate', 3)
  }
}
let div = document.getElementById('root')
ReactDom.render(<Index />, div)
