import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '123'
    }
    console.log('constructor', 1)
  }
  render() {
    console.log('render', 2)
    return <div>index</div>
  }
  componentDidMount() {
    console.log('componentDidMount', 3)
  }
}
let div = document.getElementById('root')
ReactDom.render(<Index />, div)
