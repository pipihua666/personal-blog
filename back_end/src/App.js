/*
 * @Descripttion: app
 * @Author: zhaokh
 * @Date: 2020-02-22 19:04:18
 */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/" exact component={Admin}></Route>
      </Router>
    </div>
  )
}

export default App
