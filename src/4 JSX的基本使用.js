// 1.引入两个包
import ReactDom from 'react-dom'
import React from 'react'
// 2.创建变量
let name = 'xiaohangge'
let age = 18
// 3.使用JSX表达式

// 3.1变量
let title = (
  <span>
    姓名: {name}
    年龄：{age}
  </span>
)
// 3.2 对象
let obj = {
  name: '123',
}
// 3.3 数组
let arr = ['xiaohang', 'xiaoao']

// 3.4 三元表达式
let height = 180

// 3.5 sayHi
let sayHi = function () {
  console.log('sayHi')
  return 'sayHi'
}

// 3.6 JSX本身
let span = <span>我是小span</span>
// 3.7 注释
let div2 = (
  <div>
    我是div
    {/* 我是注释 */}
  </div>
)

const div = (
  <div>
    <div>1.使用变量title{title}</div>
    <div>2.使用对象obj的值是{obj.name}</div>
    <div>3.测试数组{arr[0]}</div>
    <div>4.测试三元表达式{height > 179 ? height : '比179小'}</div>
    <div>5.测试方法{sayHi()}</div>
    <div>6.span标签{span}</div>
    <div>7.{div2}</div>
  </div>
)

// 3.4.渲染元素
ReactDom.render(div, document.getElementById('root'))
