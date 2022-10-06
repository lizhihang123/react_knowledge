/* 
    条件渲染练习
*/

// 1 导入两个包
import ReactDOM from 'react-dom'

// 2.定义变量和 JSX
let isLogin = true
function render() {
  if (isLogin) {
    return <div>'你好',尊贵的v10用户</div>
  } else {
    return <div>'你好', 请先去登录</div>
  }
}

// 3 渲染元素
ReactDOM.render(render(), document.getElementById('root'))
