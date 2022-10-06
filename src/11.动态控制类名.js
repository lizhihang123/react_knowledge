import ReactDOM from 'react-dom'
import './base.css'

let isRed = true
let isPink = true

function classTraverse(obj) {
  return Object.keys(obj)
    .filter((key) => {
      return obj[key]
    })
    .join(' ')
}
// 4.直接写引入的样式
const div4 = (
  <p
    className={classTraverse({
      pink: isPink,
      red: isRed,
      border: true,
    })}
  >
    我是一个p标签
  </p>
)

const div = <div>{div4}</div>
ReactDOM.render(div, document.getElementById('root'))
