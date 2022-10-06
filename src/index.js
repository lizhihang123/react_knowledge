import ReactDom from 'react-dom'
import './base.css'
const list = [
  { id: 1, name: '刘德华', content: '给我一杯忘情水' },
  { id: 2, name: '五月天', content: '不打扰，是我的温柔' },
  { id: 3, name: '毛不易', content: '像我这样优秀的人' },
]

const ul = (
  <ul>
    {list.map((item) => {
      return (
        <li style={{ listStyle: 'none' }} key={item.id}>
          <h3 className={`h3`}>评论人：{item.name}</h3>
          <p className={`p`}>评论内容：{item.content}</p>
        </li>
      )
    })}
  </ul>
)

ReactDom.render(ul, document.querySelector('#root'))
