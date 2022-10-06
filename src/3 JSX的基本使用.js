/* 
jsx的基本使用
*/

// 1.导入包
// 不需要导入react包，因为最新版本的react创建虚拟dom不再使用createElement了，
import ReactDom from 'react-dom'

// 2.创建标签
let div = <div>我是一个div盒子</div>


// 3.通过ReactDom进行渲染
ReactDom.render(div, document.getElementById('root'))