/*
 * @Descripttion: 后台管理主页面
 * @Author: zhaokh
 * @Date: 2020-02-22 19:34:03
 */
import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { Route } from 'react-router-dom'
import AddArticle from '../AddArticle'
import ArticleList from '../ArticleList'
import './index.css'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const Admin = props => {
  const [collapsed, setCollapsed] = useState(false)

  // 点击菜单收缩
  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  }

  // 文章管理
  const handleClickArticle = e => {
    if (e.key === 'addArticle') {
      props.history.push('/add')
    } else {
      props.history.push('/list')
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>添加文章</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            onClick={handleClickArticle}
            title={
              <span>
                <Icon type="desktop" />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="articleList">文章列表</Menu.Item>
          </SubMenu>

          <Menu.Item key="9">
            <Icon type="file" />
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div>
              <Route path="/" exact component={AddArticle} />
              <Route path="/add" exact component={AddArticle}></Route>
              <Route path="/add/:id" exact component={AddArticle}></Route>
              <Route path="/list" exact component={ArticleList}></Route>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>pipihua.com</Footer>
      </Layout>
    </Layout>
  )
}

export default Admin
