/* 
    JSX的条件渲染
*/

// 1.引入包
import ReactDom from 'react-dom'
import React from 'react'

// 2.创建元素
const loading = false
let name = '123'

// 3.函数控制
const loadingData = function () {
  if (!loading) {
    return <div>数据加载中...</div>
  } else {
    return <div>数据加载完成</div>
  }
}
// 3.2 三元运算符控制
const loadingData2 = function () {
  return loading ? <div>数据加载完成</div> : <div>数据加载中...</div>
}

// 3.3 用逻辑运算符
const render = () => {
  return !loading && <div>加载中...</div>
}

const div = (
  <div>
    <div>{loadingData()}</div>
    <div>{loadingData2()}</div>
    <div>{render()}</div>
    <div className={name}>我来测试样式</div>
  </div>
)

// 4. Dom元素渲染到页面上
ReactDom.render(div, document.getElementById('root'))
