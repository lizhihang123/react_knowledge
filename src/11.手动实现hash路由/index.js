import React, { Component } from 'react'
import ReactDom from 'react-dom'
import My from './component/My'
import Find from './component/Find'
import Store from './component/Store'
/* 
实现hash路由的方式
1、三个a链接，值是锚点链接 #/my
2、写三个组件，然后引入
3、(难点)如何点击不同的链接，显示不同的内容呢？
   通过hashchange事件
4、(什么时候去触发这个事件呢)
   ComponentDidMount()钩子函数 dom挂载好了后，就能够触发
5、需要一个变量来控制，是否显示组件。然后hashchange触发，就修改这个变量的值，如果显示这个变量，就显示对应的组件
*/
export default class Index extends Component {
  state = {
    currentValue: ''
  }
  // 在钩子函数里面的this访问不到setState 使用箭头函数就可以 componentDidMount里面的this是正常的
  // 注意，componentDidUpdate一开始是不会去调用的，用这个是错的
  componentDidMount() {
    window.onhashchange = () => {
      //   console.log(window.location.hash.slice(1))
      this.setState({
        currentValue: window.location.hash.slice(1)
      })
    }
  }
  render() {
    return (
      <div>
        {/* 1、三个a链接，值是锚点链接 #/my */}
        <div>
          <a href="#/find">查找</a>
        </div>
        <div>
          <a href="#/my">我的</a>
        </div>
        <div>
          <a href="#/store">收藏</a>
        </div>
        {/* 2、写三个组件，然后引入 */}
        {this.state.currentValue === '/my' && <My></My>}
        {this.state.currentValue === '/find' && <Find></Find>}
        {this.state.currentValue === '/store' && <Store></Store>}
      </div>
    )
  }
}
ReactDom.render(<Index></Index>, document.getElementById('root'))
