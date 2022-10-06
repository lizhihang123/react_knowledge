import ReactDOM from 'react-dom'
import './base.css'

// 1.使用引入的CSS文件里面的类名
let isRed = true
const div1 = <div className="title">我是一个盒子</div>
// 2.动态控制className的类名
const div2 = <div className={`${isRed ? 'title' : ''} box`}>我是盒子2</div>
// 3.使用style来添加类名
let bgColor = 'pink'
const div3 = (
  <div style={{ width: 100, height: 200, backgroundColor: bgColor }}>
    我是盒子3
  </div>
)
// 4.直接写引入的样式
const div4 = <p className="title">我是一个p标签</p>

const div = (
  <div>
    {div1}
    {div2}
    {div3}
    {div4}
  </div>
)
ReactDOM.render(div, document.getElementById('root'))
