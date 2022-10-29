import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Son from './Son'
/* 
props的深入
1. props.children属性，只要有子节点，就有这个属性
*/
// function Hello(props) {
//   return (
//     <div>
//       {props.children}
//       <Son></Son>
//     </div>
//   )
// }
class Hello extends Component {
  render() {
    console.log(this.props.children)
    return <div>123</div>
  }
}
ReactDom.render(
  <Hello>
    {/* <Son></Son> */}
    {() => {
      console.log('123')
    }}
  </Hello>,
  document.getElementById('root')
)
