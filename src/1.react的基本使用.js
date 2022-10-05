/* 
1  引入react react-dom包
2. 引入react.createElement 生成虚拟dom
3. 引入react-dom的render方法 渲染到页面
*/

// 1 
import React from 'react'
import ReactDOM from 'react-dom'



/* 
2 createElement -> 创建一个虚拟dom
三个参数
1 标签名
2 标签的属性 - 是一个对象
3 内容
*/
// const h1 = React.createElement('h1',{title: '标题', id: 'haha'}, '我是一个标题')
// const div = React.createElement('div', {className: 'div'}, '我是一个div盒子')
const ul = React.createElement('ul', {id: 'box', className: 'box'}, [
    React.createElement('li', {className: 'son1'}, '我是第一个小李'),
    React.createElement('li', {className: 'son2'}, '我是第二个小李'),
    React.createElement('li', {className: 'son2'}, '我是第三个小李'),
])
// console.log(ul);

/* 
3 render: 虚拟dom渲染到页面
参数
1 虚拟dom
2 页面的容器
*/
ReactDOM.render(ul, document.getElementById('root'))