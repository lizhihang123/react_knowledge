/* 
jsx条件渲染
*/

// 1 导入两个包
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建元素

const loading = false

// 函数控制
const loadingData = () => {
  if (!loading) {
    return <div>数据加载中....</div>
  } else {
    return <div>数据加载完成</div>
  }
}

// 通过三元运算符来控制
const loadingData2 = () => {
  return loading ? <div>数据加载完成</div> : <div>数据加载中....</div>
}

// 如果只对true的情况做判断 用逻辑运算法
const render = () => {
  return !loading && <div>加载中...</div>
}

const div = (
  <div>
    {loadingData()}
    {loadingData2()}
    {render()}
  </div>
)

// 3 渲染元素
ReactDOM.render(div, document.getElementById('root'))
