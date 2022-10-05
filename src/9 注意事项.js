/* 
jsx的基本使用
*/

// 1 导入两个包
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建元素
// function render() {
//   return (
//     <div>
//       <p></p>
//     </div>
//   )
// }

// const label = <label for=""></label>
// const div = <div class="123"></div>

// const label = <label htmlFor="123"></label>
// const div = <div className="123"></div>
// const img = <img alt="" src="" />
// const div = (
//   <React.Fragment>
//     <div>123</div>
//     <p></p>
//   </React.Fragment>
// )

const div = (
  <>
    <div>123</div>
    <p></p>
  </>
)

// 3 渲染元素
ReactDOM.render(div, document.getElementById('root'))