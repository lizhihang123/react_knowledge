import React, { Component } from 'react'
import ReactDom from 'react-dom'

// css文件
import './index.css'

// API类
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
//   获取数据的API
import { loader as rootLoader } from './routes/root'
// 路由文件
import Root from './routes/root'
import ErrorPage from './routes/error-page'
import Contact from './routes/contact'
// 路由配置项
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: rootLoader,
    children: [
      {
        path: '/contacts/:contactId',
        element: <Contact></Contact>
      }
    ]
  }
])
export default class Index extends Component {
  render() {
    return (
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    )
  }
}
ReactDom.render(<Index />, document.getElementById('root'))
