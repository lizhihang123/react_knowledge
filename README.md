# 1. react是什么

构建用户界面的JS库。

库和框架的区别：

​	库是函数的集合，

​	框架是一整套完整的解决方案



为什么react被称为库。因为它只解决了视图层的内容，只负责试图的渲染。

但是react一整套全家桶学完，就相当于框架。

>MVC和MVVM的区别是什么?





# 2. react的特点是什么

- 组件化：可以复用，便于维护
- 声明式：html长什么样，就写成什么样。例子：**吃饭**，只关注饭怎么来的，无需关注饭是怎么做的，点个**外卖**
- 一次学习：可以开发web应用。开发原生app[react-native + flutter]，开发VR(react 360)





# 3. react脚手架的基本使用

查看实例文件 - 可以通过引入包的方式 来开发 react



通过脚手架安装全局：

​	这样导致版本固定，每次都下载一样的版本，无法下载最新的

```bash
$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
```





通过npx安装： 这样不会导致版本固定，每次会去服务器上面去寻找

```bash
npx create-react-app react-demo
```





使用

- 小技巧：**删除src下面的所有的小文件**，增加一个index
- index.js里面有以下步骤

```js
/* 
1. 导入react和react-dom
2. 引入react 生成虚拟dom
3. react-dom 渲染内容到页面
*/

import React from 'react'
import ReactDOM from 'react-dom'

const h1 = React.createElement('h1', title: '哈哈', '123')

ReactDOM.render(h1, document.getElementById('root'))
```

- 创建子元素

```js
/* 
1 注意 增加类名 - 写className 会被自动解析为 class
2 createElement 第三个参数 支持数组 里面嵌套createElement 创建子元素
*/
const ul = React.createElement('ul', {
    className: 'dem0'
},[
    React.createElement('li', null,'橘子'), 
    React.createElement('li', null,'苹果'), 
    React.createElement('li', null,'香蕉'), 
])
```



>react/18的新写法



```js
import React from "react";
// import ReactDOM from 'react-dom'
// 引入发生了改变
import { createRoot } from 'react-dom/client'


/* 
1 注意 增加类名 - 写className 会被自动解析为 class
2 createElement 第三个参数 支持数组 里面嵌套createElement 创建子元素
*/
const ul = React.createElement('ul', {
    className: 'dem0'
},  React.createElement('li', null,'橘子'), 
    React.createElement('li', null,'苹果'), 
    React.createElement('li', null,'香蕉'))
const container = document.getElementById('root')
// 把container作为根元素
const root = createRoot(container)
// 渲染ul这个虚拟dom到根元素上
root.render(ul)
```



>react 17的版本号

```js
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "^4.0.3",
```



但是存在一个问题，下一回安装脚手架，还是最新的 react18怎么办

如何 create-react-app -> 安装出来的是 react17





## 小结：

1.什么是react

- 渐进式的构建用户界面的第三方库

2.react的特点

- 声明式的ui
- 组件复用
- 一处学习，多处使用

3.掌握react的用法

- react.creatElement 创建虚拟dom元素
- reactDom 能够渲染元素到页面上

4.react脚手架

- npx create-react-app demo



- yarn global add create-react-app

   create-react-app demo直接创建





# 4. JSX

- 什么是JSX
- 如何使用JSX创建react元素
- 能够在jsx中使用javascript表达式
- 能够使用jsx的条件渲染和列表渲染
- 能够给jsx添加样式





## 1 babel转JSX->react

![image-20220719091330417](C:\Users\huawei\AppData\Roaming\Typora\typora-user-images\image-20220719091330417.png)

1.左边是JSX,因为写的是className，而不是class。

2.JSX经过babel转化为JS代码，

3.JSX就是在JS的代码中，写XML(HTML)代码

4.在react的脚手架里面，写JSX代码，自动有工具包，帮我们进行转义



## 2 JSX是什么

1 JSX是react的核心内容

- 是JavaScript XML的缩写，用JS写XML(HTML)的语法，

- 与html语法类似，学习成本更低，开发效率更高

- 不是标准的JS语法，而是JS语法的扩展

- jsx必须在 react脚手架里面写。而脚手架中内置的 [@babel/plugin-transform-react-jsx](@babel/plugin-transform-react-jsx) 包，用来解析该语法,为什么要转化呢，因为淘宝不认识JSX的语法
- 是**声明式语法** 而不是**命令式语法**。声明式语法【外卖 - 页面长啥样就是啥样】；命令式语法【底层 原理 是react.createElement - 自己做饭 放什么菜】=> react 支持用jsx写页面，支持声明式

2 本质是babel 把jsx语法转化为React.createElement去生成虚拟dom

>但最新版本里面底层不用`React.createElement`, 而是`(0, _jsxRuntime.jsx)`,本质差不多?

3 要不要导入react包？由第二点 => 不用导react包，但是如果换到react16版本 就要导

下面是16.8.3的react的包的示例

![image-20221005155443189](https://typora-1309613071.cos.ap-shanghai.myqcloud.com/typora/image-20221005155443189.png)

4 写jsx语法 不能放到''双引号里面去



## 3 JSX的注意点

1 必须在脚手架里面去写 里面配置了babel转义

2 必须有一个根节点 

可以写React.fragment或者<></>或者写要给div

```js
const div = <div>123</div><p></p> // 这样是错的

// 3 渲染元素
ReactDOM.render(div, document.getElementById('root'))
```

div根标签

```js
const div = (
  <div>
    <div>123</div>
    <p></p>
  </div>
)
```

幽灵节点 需要引入React包,

幽灵节点，不会渲染任何的内容，类比Vue的template

```js
const div = (
  <React.Fragment>
    <div>123</div>
    <p></p>
  </React.Fragment>
)
```

这个是幽灵节点的简单写法，直接尖括号 不用引入包

```js
const div = (
  <>
    <div>123</div>
    <p></p>
  </>
)
```





3 单标签必须 </> 这样结束

```js
const img = <img /> 
      // 必须有/>结尾 <img >是错的
```



4 语法注意

​	class => className

​	for => htmlfor

```js
错误
// const label = <label for=""></label>
// const div = <div class="123"></div>
正确
// const label = <label htmlFor="123"></label>
// const div = <div className="123"></div>
```



5 JSX可以换行，最好加() 换行的内容都写在里面

![image-20220719104740534](C:\Users\huawei\AppData\Roaming\Typora\typora-user-images\image-20220719104740534.png)





	return (
	    <div>
	        <p>
	
	        </p>
	    </div>
	)



prettier的配置

```json
  // // 默认使用prittier作为格式化工具
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 保存到额时候用使用prettier进行格式化
  "editor.formatOnSave": true,
  // 不要有分号
  "prettier.semi": false,
  // // 使用单引号
  "prettier.singleQuote": true,
```





## 4 JSX的使用

>表达式和语句?
>
>表达式 一定有返回值，判断标准 -> 能在console.log()里面打印出来



在`{}`里面写表达式，for循环 while  switch这样的 if 分支 不能在{}里面直接写，三元可以。map可以，返回的是数组

只有`标签里面写js，才是jsx`，如果没有标签，写js，就是单纯的js

```js
// 变量声明
// 1 导入两个包
import React from 'react'
import ReactDOM from 'react-dom'
// 2 创建元素
const name = '李治航'
const age = 18
// 测试使用js表达式
// 能在console.log()里面打印的就是插值表达式 有一个返回值
const title = (
  <span>
    姓名: {name}, 年龄: {age}
  </span>
)
// 3 测试对象
const obj = {
  height: 180,
}
// 4 测试数组
const arr = ['小明', '180']
// 5 测试三元
const gender = 18
// 6 方法
function sayHi() {
  return 'jmq yyds'
} // 查看控制台
// 7 JSX本身
const span = <span>123</span>
const h1 = (
  <div>
    我是标题{span} {/*我是注释*/}
    div
  </div>
)
// 8 使用属性
const red = 'red'
```

```js
// 测试
const div = (
  <div>
    <div>使用变量 {title}</div>
    <p>使用对象 {obj.height}</p>
    <p>使用数组 {arr[0]}</p>
    <p>使用三元表达式 {gender > 18 ? '是' : '否'}</p>
    <p>使用函数表达式{sayHi()}</p>
    <p>JSX本身也是表达式{span}</p>
    <div>注释如何写? 直接 ctrl + /{h1}</div>
    <div className={red}>添加类名red</div>
  </div>
)

// 3 渲染元素
ReactDOM.render(div, document.getElementById('root'))
```





## 5 JSX的条件表达式

通过`if/else` 或者 `三元`或者`逻辑运算符`控制结果 写到{}里面

```js
/* 
jsx条件渲染
*/

// 1 导入两个包
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建元素

const loading = false

// 3 函数控制
const loadingData = () => {
  if (!loading) {
    return <div>数据加载中....</div>
  } else {
    return <div>数据加载完成</div>
  }
}

// 4 通过三元运算符来控制
const loadingData2 = () => {
  return loading ? <div>数据加载完成</div> : <div>数据加载中....</div>
}

// 5 如果只对true的情况做判断 用逻辑运算法
const render = () => {
  return !loading && <div>加载中...</div>
}

const div = (
  <div>
    {loadingData()}
    {loadingData2()}
    {render()}
  </div>
)

// 3 渲染元素
ReactDOM.render(div, document.getElementById('root'))

```

>return !loading && <div>加载中...</div> 到底是html还是js语句？是js语句。因为最终是react.createElement来操作转化为虚拟dom，就是js操作

虽然比vue麻烦，但是核心知识点不多。不需要学习vue那么多的指令



小结:

1.使用{}，里面写表达式，进行动态渲染

- 表达式和语句的区别，语句是if for while switch这些，还有const num = 1这样写是错的；但是如果是num = 1这样是赋值是ok的，意味着 {num = 1}是可以的，但{const num = 10}就是错的
- 表达式 变量 函数调用 三元 逻辑运算这些都是可以的

2.JSX本身放到{}里面也是可以的 {<div></div>}

3.属性的写法 <div className={}></div> 属性直接写{} 不需要写 {}

## 6 JSX的列表渲染

1 使用map方法，返回一个数组，注意JSX里面可以写数组，

2 使用了两个JSX，外层的JSX使用了songs变量 内层的JSX使用遍历的item变量

3 key如何设置？以后会从后台请求id 没有就用index或者item

```js
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
```



为什么能够直接在ul里面写一个 {} 然后跟一个 {arr}？

  原因是，下面的songs这样的数组能够被成功解析，展示一个列表

```js
/* 
	JSX的列表渲染
*/

// 1.引入
import ReactDOM from 'react-dom'
// 2.变量
let songs = [<li>航哥</li>, <li>俊哥</li>, <li>帅哥</li>]
// 3.JSX的使用
const ul = <ul>{songs}</ul>
ReactDOM.render(ul, document.getElementById('root'))
```







**小练习**

```js
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
```



## 7 JSX的样式设置

直接加类名 使用className

```js
import './base.css'
const dv2 = <div className="title"></div>
```



使用className + 判断语句

```js
//这样写 能够使用除了red以外的 box类名 -> 模板字符串
<h1 className={`${isRed ? 'red' : ''} box`}>通过style控制样式</h1>
```



使用style

- 注意**驼峰**的写法
- 注意宽度和高度可以是**数字**，不写px
- 注意，是双括号，一层括号表示**表达式**；一层括号表示对象

```js
let bgColor = 'pink'
const div3 = (
  <div style={{ width: 100, height: 200, backgroundColor: bgColor }}>
    我是盒子3
  </div>
)
```

这里直接写引入的样式

```js
<p style={{ color }}>是金子总会花光的</p>
```





**需求，**三个引入的类名，一个类名必须有，另外两个类名能够动态的控制

- 也可以里面写一个 `` 模板字符串，然后拼接 ${}

- 写一个函数来控制

```diff
import ReactDOM from 'react-dom'
import './base.css'

+let isRed = true
+let isPink = true

+function classTraverse(obj) {
  return Object.keys(obj)
    .filter((key) => {
      return obj[key]
    })
    .join(' ')
}
// 4.直接写引入的样式
const div4 = (
  <p
+    className={classTraverse({
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
```

![image-20221006133106587](https://typora-1309613071.cos.ap-shanghai.myqcloud.com/typora/image-20221006133106587.png)





## 8 使用classnames库

```js
import classnames from 'classnames'
const div4 = (
  <p className={classnames('box', { red: isRed, pink: isPink })}>
    我是一个p标签
  </p>
)
```





## 9 小练习

渲染成为如下的样式

![image-20221006135725247](https://typora-1309613071.cos.ap-shanghai.myqcloud.com/typora/image-20221006135725247.png)

```js
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
          样式可以直接写字符串
          <h3 className={`h3`}>评论人：{item.name}</h3>
          <p className={`p`}>评论内容：{item.content}</p>
        </li>
      )
    })}
  </ul>
)

ReactDom.render(ul, document.querySelector('#root'))
```





## JSX总结：

- jsx本质就是用js写html/xml的代码，然后会被脚手架或者其他方法转化为浏览器能够理解的语言
- jsx是声明式的语法，我们写js。babel库会去进行转化
- jsx目前学会了
  - 插值表达式
  - 条件渲染
  - 列表渲染
  - 样式设置
  - 样式库
- Vue和React的区别是什么？React更加灵活，大部分都是用js代码来实现。而Vue是通过不断增加新的API，造轮子，来让你更方便。当触及到底层的设计时，Vue还是需要使用JSX
