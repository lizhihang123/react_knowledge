import React, { Component } from 'react'
import { Consumer } from './index'
export default class Sun extends Component {
  render() {
    return (
      <Consumer>
        {({ color, size, changeSize }) => (
          <div style={{ color, fontSize: size }}>
            我是Sun组件
            <button onClick={() => changeSize('30px')}>点击修改字体大小</button>
          </div>
        )}
      </Consumer>
    )
  }
}
