// 1. 这个组件用于描述一个社交媒体网站上的评论功能
// 2. 它接受 author text date作为props
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  )
}

function Avator(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avator />
      {/* 建议从组件自身的角度命名一个props 而不是从从调用组件的上下文 */}
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  )
}

// 这个函数是一个纯函数：
// 1.不好修改入参
// 2.多次调用，传入相同的函数，始终返回相同的结果
// 3.所有的react组件都必须像保护纯函数一样保护它们的props不被修改
function sum(a, b) {
  return a + b
}

function withDraw(account, amount) {
  account.total -= amount
}
