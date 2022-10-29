import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Father from './Father'
/* 
1. index.js > Father.js > Son.js > Sun.js
2. (目标)index.js里面的数据要给到Sun.js或者是Son.js
3. const {Provider, Consumer} = React.createContext()
4. Provider 提供数据 直接包裹组件，组件上面跟上value数据
5. Consumer 消费数据，必须和Provider合在一起，必须是一对；Consumer必须要里面是函数，返回组件
*/
const { Provider, Consumer } = React.createContext()
class Index extends Component {
  state = {
    size: '25px',
    color: 'red'
  }
  changeSize = (a) => {
    this.setState({
      color: 'green'
    })
  }
  render() {
    const { size, color } = this.state
    return (
      <Provider value={{ color, size, changeSize: this.changeSize }}>
        <div>
          我是爷爷组件
          <Father></Father>
        </div>
      </Provider>
    )
  }
}
export { Consumer }
ReactDom.render(<Index></Index>, document.getElementById('root'))
