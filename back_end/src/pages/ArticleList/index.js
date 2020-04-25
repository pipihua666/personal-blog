/*
 * @Descripttion: 文章列表
 * @Author: zhaokh
 * @Date: 2020-02-24 22:40:17
 */
import React, { useState, useEffect } from 'react'
import { Modal, message, Button, Table, Divider, Tag, Popconfirm } from 'antd'
import axios from 'axios'
import API_URL from '../../constant/api'

function ArticleList(props) {
  const [list, setList] = useState([])
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    getArticleList()
  }, [])

  const getArticleList = async () => {
    const { data: list = [] } = await axios.get(API_URL.getArticlesList, {
      withCredentials: true
    })
    setList(list)
  }

  const deleteConfirm = async (id = '') => {
    const {
      data: { ok = 1 }
    } = await axios.delete(API_URL.deleteArticle, {
      params: { id },
      withCredentials: true
    })
    if (ok && ok > 0) {
      getArticleList()
      message.success('删除成功')
    }
  }

  const showModal = () => {
    this.setState({
      visible: true
    })
  }

  const handleModalOk = e => {
    this.setState({
      visible: false
    })
  }

  const handleModalCancel = () => {
    setVisible(false)
  }

  const editArticle = () => {
    setVisible(true)
  }

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      align: 'center'
    },
    {
      title: '类别',
      dataIndex: 'type',
      key: 'type',
      align: 'center',
      render: text => <Tag color="#2db7f5">{text}</Tag>
    },
    {
      title: '发布时间',
      dataIndex: 'releaseTime',
      key: 'releaseTime',
      align: 'center'
    },
    {
      title: '浏览量',
      key: 'browseTimes',
      dataIndex: 'browseTimes',
      align: 'center'
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={editArticle}>
            编辑{' '}
          </Button>
          <Divider type="vertical" />
          <Popconfirm
            title="是否删除此任务"
            onConfirm={() => deleteConfirm(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">删除</Button>
          </Popconfirm>
        </span>
      )
    }
  ]

  return (
    <>
      <Table columns={columns} dataSource={list} />
      <Modal
        title="Basic Modal"
        visible={isVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default ArticleList
