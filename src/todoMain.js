import classNames from 'classnames'
import React, { Component } from 'react'

/* 
01-搭建样式
02-封装拆分为组件
03-props父传子 index.js -> todoMain.js，接受到了list数据 渲染ul里面的小li
  completed属性控制 是否完成 删除线
  checked 是checkbox表单 控制是否勾选
04-删除功能
  按钮点击，子传父，子调用父组件的函数，子传递id过去，告诉父组件，删除的是哪个小li
  父组件里面使用setState，进行修改
05-点击勾选框，修改当前的任务的状态 完成/未完成
  点击勾选框 - 绑定change事件
  然后通知父组件 isDone状态取反就好了
  (难点) - 如何修改父组件里面的某一个数据里面的done数据
  使用find找到那一项 然后 item.done = !item.done这样写是错误的 不准确
  (正确做法) - if else判断id相等直接返回item 不相等，返回新的对象
06-添加任务
  header里面输入内容
  增加表单校验 onKeyDown且要判断回车事件，用keyCode === 13
  子传父(输入内容按回车 onKeyDown) 提交给index.js
  index.js往 state.list里面添加  
  1.不能够修改原值 -> 状态不可变 直接 this.state.list.push(value)这就是错的
  2.使用[]里面，解构原始的数组，然后传入一个新的对象，其值是task的值; task是value值，id用Date  .now()
  3.最好新添加的放到第一个去

  (修改的点)
  4.回车以后要清空任务输入框
  5.使用onKeyDown比onKeyUp更好 为什么？万一用户按了没有弹起来呢
  6.记住 表单一定要 value+onChange绑定事件

07-双击修改内容
  1.绑定一个双击事件onDoubleClick 获取指定的双击内容的id
  2.声明一个状态 存储当前双击的id
  3.给小li的类 editing 利用currentId来进行控制是否显示
  4.如何动态控制两个类名呢？利用的是classnames这个库
  (存在的问题)
  5.双击后，点击空白的地方无法取消input输入框

08-双击回显任务名称
  1.edit编辑框 -> 表单受控 value + onChange
  2.state新增变量 给表单
  3.双击后，修改edit的值为input的value值 -> 在onDoubleClick的方法，多传递一个值过去

09-双击修改任务名称完成
  1.修改后，按回车，监听onKeyUp事件 如果是13
  2.通知父组件，子传父，修改父组件里面指定的值
  (难点与问题)
  3.碰到困难的地方，如何传递(id + value),因为value的值来自e.target.value，但是怎么传递 e + value的值给到 changeEdit -> 然后 changeEdit再通过 this.props.fn -> 传递给父组件index.js
  (解决)
  传递state状态里面的两个数据给父组件
  4.(困难) 修改，回车之后 -> 回车框依然是存在的
  回车的if分支里面，把id和editValue都给清空
  5.(易错点) onChange和onKeyUp
  把回车的内容写到而来onChange函数里面去 错的，回车就应该写在onKeyUp里面去
  同时onChange这个事件也不能够给漏了
  6.按esc键，能够取消edit框的编辑状态，如何取消？
  currentId和editValue都清空就好了

10-底部任务数量显示
footer.vue组件
  1.index.js -> 传递list数据给footer -> footer里面去判断有几个的Done属性是false(使用filter方法就可以解决)
  2.如果一个任务也没有 就清空数据

11-清空任务
  1.如何清空呢？点击事件绑定 -> 通知父组件，把list变成空数组 -> 变成空数组 错误 -> 应该是清空“已经完成的任务”
  2.清空之前，先判断是否有 “未完成的任务” -> 如果有 才显示(未完成的按钮)

12-点击切换任务高亮
  (动态className成功响应变化)
  1. 需要一个type变量，值可能是(all active completed) -> 父组件设置变量还是子组件呢？
  应该是父组件，因为后续还需要点击切换任务，还需要中间的组件也要能够使用
  2. 父传子 index.js -> type -> todoFooter.vue组件
  3. 子组件接受，给a标签绑定动态className
  <a className={type === 'active' ? 'active' : ''} href="#/active">
    Active
  </a>
  (点击a标签能够切换type 共用一个函数)
  1. 点击a标签，onClick->,this.props.changeType('type')
  2. 调用子传父，父亲里面修改变量 this.setState({type: ''})


13-点击切换任务时 - index.js -> list里面的任务也能够对应的显示
  1. 在changeType里面去修改list -> 错误 -> 应该是在todoMain里面，改变遍历的list
  2. 分三种状态，如果是all，就展示全部
  3. 如果是completed，就展示完成的部分
  4. 如果是active就展示没有完成的部分
  const { list, type } = this.props
  let showList = []
  if (type === 'all') {
  showList = list
  } else if (type === 'completed') {
  showList = list.filter((item) => item.done)
  } else if (type === 'active') {
  showList = list.filter((item) => !item.done)
  }

14.点击全选
  1. 点击全选按钮，Header.vue组件里面如果是 true -> 子传父 父亲接受
  2. 父亲接受变量 -> 传递给todoMain.js组件 父传子
  3. todoMain.js里面接受 然后遍历所有的li 都改为相同的状态

  ------------搞错了
  1. 全选的按钮在main组件里面，所以直接是这个按钮点击了 -> 修改所有的list的选中状态
  ------------思路修改
  1. 所有的list都选中，那么(全选)input就是选中的状态 every遍历方法的值给到checked属性
  2. (全选)input选中，所有的li都会勾选 
    2.1 给input绑定 onChange事件 
    2.2 传递 e.target.checked给父亲 index.js
    2.3 父亲收到了checked 然后再去遍历每一个li，然后修改它的checked 
    2.4 list发生了变化 -> 会去影响 todoMain.js里面的展示
  
15. todos-本地存储
  1. componentisUpdate()钩子函数里面 去存储更新后的数据 记得 json.stringify()
  2. componnetisMount()钩子函数里面去 修改存储后的值 json.parse()

16. 自动获取焦点-数据怎么存呢？
  1. 
*/
export default class todoMain extends Component {
  deleteTodo = (id) => {
    this.props.deleteFn(id)
  }
  handleCheck = (id) => {
    this.props.changeFn(id)
  }
  handleDoubleChange = (id, task) => {
    // 双击以后修改状态
    this.setState({
      currentId: id,
      editValue: task
    })
  }
  // 双击 -> 编辑
  changeEdit = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        currentId: '',
        editValue: ''
      })
    }
    if (e.keyCode === 13) {
      this.props.EditChangeFn(this.state.currentId, this.state.editValue)
      this.setState({
        currentId: '',
        editValue: ''
      })
    }
  }
  // 修改全部选中的状态
  changeAll = (e) => {
    console.log(e.target.checked)
    this.props.changeAllFn(e.target.checked)
  }
  state = {
    // 双击的指定id
    currentId: '',
    editValue: '',
    changeAll: false
  }
  render() {
    const { list, type } = this.props
    let showList = []
    if (type === 'all') {
      showList = list
    } else if (type === 'completed') {
      showList = list.filter((item) => item.done)
    } else if (type === 'active') {
      showList = list.filter((item) => !item.done)
    }
    return (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={showList.every((item) => item.done)}
          onChange={this.changeAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {showList.map((item) => (
            // 原本的complete类名
            // <li key={item.id} className={item.done ? 'completed' : ''}>

            // 双击能够显示编辑框
            // <li
            //   key={item.id}
            //   className={item.id === this.state.currentId ? 'editing' : ''}
            // >
            <li
              key={item.id}
              className={classNames({
                editing: item.id === this.state.currentId,
                completed: item.done
              })}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.done}
                  onChange={() => this.handleCheck(item.id)}
                />
                {/* 
                  双击点击事件
                */}
                <label
                  onDoubleClick={() =>
                    this.handleDoubleChange(item.id, item.task)
                  }
                >
                  {item.task}
                </label>
                <button
                  className="destroy"
                  onClick={() => this.deleteTodo(item.id)}
                ></button>
              </div>
              {/* 改的就是你 */}
              <input
                className="edit"
                value={this.state.editValue}
                onKeyUp={this.changeEdit}
                onChange={(e) => {
                  this.setState({
                    editValue: e.target.value
                  })
                }}
              />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
