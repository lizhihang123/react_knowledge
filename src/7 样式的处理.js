/* 
样式的处理
*/

// 1 导入两个包
import React from 'react'
import ReactDOM from 'react-dom'
import './base.css'

// 2 创建元素
// const dv = (
//   <div
//     style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
//   ></div>
// )

const dv2 = <div className="title"></div>

// 3 渲染元素
ReactDOM.render(dv2, document.getElementById('root'))
