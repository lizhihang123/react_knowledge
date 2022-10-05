/* 
jsx中使用js的表达式
*/
// 1 导入两个包
import React from 'react'
import ReactDOM from 'react-dom'
// 2 创建元素
const name = '李治航'
const age = 18
// 测试使用js表达式
// 能在console.log()里面打印的就是插值表达式 有一个返回值
const title = (
  <span>
    姓名: {name}, 年龄: {age}
  </span>
)
// 3 测试对象
const obj = {
  height: 180,
}
// 4 测试数组
const arr = ['小明', '180']
// 5 测试三元
const gender = 18
// 6 方法
function sayHi() {
  return 'jmq yyds'
} // 查看控制台
// 7 JSX本身
const span = <span>123</span>
const h1 = (
  <div>
    我是标题{span} {/*我是注释*/}
    div
  </div>
)
// 8 使用属性
const red = 'red'

const div = (
  <div>
    <div>使用变量 {title}</div>
    <p>使用对象 {obj.height}</p>
    <p>使用数组 {arr[0]}</p>
    <p>使用三元表达式 {gender > 18 ? '是' : '否'}</p>
    <p>使用函数表达式{sayHi()}</p>
    <p>JSX本身也是表达式{span}</p>
    <div>注释如何写? 直接 ctrl + /{h1}</div>
    <div className={red}>添加类名red</div>
  </div>
)

// 3 渲染元素
// ReactDOM.render(title, document.getElementById('root'))
// ReactDOM.render(obj.height, document.getElementById('root'))
// ReactDOM.render(sayHi(), document.getElementById('root'))
ReactDOM.render(div, document.getElementById('root'))
