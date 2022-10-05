import ReactDom from 'react-dom'

// 如果isLogin变量是true 就让他显示 欢迎你
const isLogin = true
const render2 = function () {
  return isLogin ? <div>'欢迎你 v8用户'</div> : <div>'请你先登录'</div>
}

const render1 = function () {
  if (isLogin) {
    return <div>'欢迎你 v8用户'</div>
  } else {
    return <div>'请你先登录'</div>
  }
}
// const arr = [1, 2, 3]
// const newArr = arr.forEach((item) => {
//   return item
// })
// console.log(newArr)
// const render3 = function () {
//   const list = arr.forEach((item) => <div>{item}</div>)
//   return <ul>{list}</ul>
// }

const div = (
  <div>
    {render2()}
    {render1()}
  </div>
)

ReactDom.render(div, document.getElementById('root'))
