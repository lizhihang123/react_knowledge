/* 
    JSX的列表渲染
*/

// 1.引入
import ReactDOM from 'react-dom'
// 2.变量
// let songs = [<li>航哥</li>, <li>俊哥</li>, <li>帅哥</li>]
let songs = [
  { id: 1, name: 'xiaoli', age: 19, height: 190 },
  { id: 2, name: 'xiaohang', age: 20, height: 180 },
]
// 3.JSX的使用
// const ul = <ul>{songs}</ul>
const ul = (
  <ul>
    {songs.map((item, index) => {
      return (
        <li key={item.id}>
          姓名：{item.name} 年龄：{item.age} 身高: {item.height}
        </li>
      )
    })}
  </ul>
)
ReactDOM.render(ul, document.getElementById('root'))
