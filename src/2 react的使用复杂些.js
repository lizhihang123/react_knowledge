import React from "react";
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom'


/* 
1 注意 增加类名 - 写className 会被自动解析为 class
2 createElement 第三个参数 支持数组 里面嵌套createElement 创建子元素
*/
const ul = React.createElement('ul', {
    className: 'dem0'
},  React.createElement('li', null,'橘子'), 
    React.createElement('li', null,'苹果'), 
    React.createElement('li', null,'香蕉'))

ReactDOM.render(ul, document.getElementById('root'))