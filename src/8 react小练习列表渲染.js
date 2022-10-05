/* 
小练习
*/

// 1 导入两个包
// import React from 'react'
import ReactDOM from 'react-dom'
import './base.css'

// 2 创建元素
const list = [
  { id: 1, name: '刘德华', content: '给我一杯忘情水' },
  { id: 2, name: '五月天', content: '不打扰，是我的温柔' },
  { id: 3, name: '毛不易', content: '像我这样优秀的人' },
]
const ul = (
  <ul>
    {list.map((comment) => (
      <li className="list">
        <h1 className="h1">{comment.name}</h1>
        <p className="p">{comment.content}</p>
      </li>
    ))}
  </ul>
)

// 3 渲染元素
ReactDOM.render(ul, document.getElementById('root'))
