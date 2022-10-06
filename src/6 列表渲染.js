/* 
    JSX的列表渲染
*/

// 1.引入
import ReactDOM from 'react-dom'
// 2.变量
let songs = [1, 2, 3]
// 3.JSX的使用
const ul = (
  <ul>
    {/* JSX里面可以使用 map 返回的是一个数组 */}
    {songs.map((item, index) => {
      return <li>{item}</li>
    })}
  </ul>
)
ReactDOM.render(ul, document.getElementById('root'))
