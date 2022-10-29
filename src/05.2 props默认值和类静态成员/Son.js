import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Son extends Component {
  // 添加static关键字时，就能够作为类的静态属性而不是实例属性
  static propTypes = {
    // array、bool、func、number、object、string
    // element
    // isRequired是否必填
    msg: PropTypes.array.isRequired,
    car: PropTypes.shape({
      brand: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    }),
    money: PropTypes.number.isRequired
  }
  static defaultProps = {
    money: 100
  }
  render() {
    const { car } = this.props
    return (
      <div>
        我是Son组件
        {this.props.msg.forEach((item) => item)}
        {car.brand} -- {car.price}
        我是金钱{this.props.money + 100}
      </div>
    )
  }
}
// console.log(Son.propTypes)
// console.log(Son.defaultProps)
// let son = new Son()
// console.log(son.propTypes) // undefined 无法通过实例来访问呢

// Son.propTypes = {
//   // array、bool、func、number、object、string
//   // element
//   // isRequired是否必填
//   msg: PropTypes.array.isRequired,
//   car: PropTypes.shape({
//     brand: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired
//   }),
//   money: PropTypes.number.isRequired
// }
// Son.defaultProps = {
//   money: 100
// }
