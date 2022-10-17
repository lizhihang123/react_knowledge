export default function Hello({ name, age, bool }) {
  // 1.写一个函数组件
  // 2.函数组件接受参数props
  // 3.使用组件的地方 传入变量 name age
  // 4.如果世界使用{}解析props是会报错的 要解析里面一个具体的变量 而不是对象
  // 当然也可以直接这样解构
  // const {name,age} = props
  const handleChange = () => {
    name = '123'
  }
  return (
    <div>
      <div>接受到了{name}数据</div>
      <div>接受到了数字{age}数据</div>
      <div>接受到了布尔值{bool ? '是' : '否'}数据</div>
      <button onClick={handleChange}>Hello1组件里面修改name值</button>
    </div>
  )
}
