/* 
    jsx列表渲染
*/

// 1 导入两个包
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建元素
const songs = ['张学友', '毛不易']
// const lis = songs.map((item) => <li>{item}</li>)
// const ul = <ul>{lis}</ul>

// 直接在ul里面渲染
// 这里的每个child该如何添加key
// key值的下标 为何避免使用index
const ul = (
  <ul>
    {songs.map((item, index) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

// 3 渲染元素
ReactDOM.render(ul, document.getElementById('root'))
