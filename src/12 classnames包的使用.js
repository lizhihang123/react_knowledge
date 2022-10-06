import ReactDOM from 'react-dom'
import './base.css'
import classnames from 'classnames'

let isRed = true
let isPink = true

// function classTraverse(obj) {
//   return Object.keys(obj)
//     .filter((key) => {
//       return obj[key]
//     })
//     .join(' ')
// }
// 4.直接写引入的样式
const div4 = (
  <p className={classnames('box', { red: isRed, pink: isPink })}>
    我是一个p标签
  </p>
)

const div = <div>{div4}</div>
ReactDOM.render(div, document.getElementById('root'))
