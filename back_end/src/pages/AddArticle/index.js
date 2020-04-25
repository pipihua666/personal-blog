/*
 * @Descripttion: 添加文章页面
 * @Author: zhaokh
 * @Date: 2020-02-22 20:08:19
 */
import React, { useState, useEffect } from 'react'
import marked from 'marked'
import axios from 'axios'
import moment from 'moment'
import API_URL from '../../constant/api'
import './index.css'
import { Row, Col, Input, Select, Button, DatePicker, message } from 'antd'

const { Option } = Select
const { TextArea } = Input

function AddArticle(props) {
  const [articleId, setArticleId] = useState(0) // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle, setArticleTitle] = useState('') //文章标题
  const [articleContent, setArticleContent] = useState('') //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
  const [introducemd, setIntroducemd] = useState() //简介的markdown内容
  const [introducehtml, setIntroducehtml] = useState('等待编辑') //简介的html内容
  const [showDate, setShowDate] = useState() //发布日期
  const [updateDate, setUpdateDate] = useState() //修改日志的日期
  const [typeInfo, setTypeInfo] = useState([]) // 文章类别信息
  const [selectedType, setSelectType] = useState('选择类型') //选择的文章类别

  useEffect(() => {
    getAriticleType()
  }, [])

  // 获取文章类型
  const getAriticleType = async () => {
    try {
      const { data = [] } = await axios.get(API_URL.getAriticleType, {
        withCredentials: true
      })
      if (data.length > 0) {
        setTypeInfo(data)
      }
    } catch (error) {
      localStorage.removeItem('openId')
      props.history.push('/login')
    }
  }

  // 修改文章类型选择框
  const changeSelectType = async value => {
    setSelectType(value)
  }

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false
  })

  const changeContent = e => {
    setArticleContent(e.target.value)
    let html = marked(e.target.value)
    setMarkdownContent(html)
  }

  const changeIntroduce = e => {
    setIntroducemd(e.target.value)
    let html = marked(e.target.value)
    setIntroducehtml(html)
  }

  // 添加文章
  const saveArticle = async () => {
    if (!selectedType) {
      message.error('必须选择文章类别')
      return false
    } else if (!articleTitle) {
      message.error('博客标题不能为空')
      return false
    } else if (!articleContent) {
      message.error('文章内容不能为空')
      return false
    } else if (!introducemd) {
      message.error('简介不能为空')
      return false
    } else if (!showDate) {
      message.error('发布日期不能为空')
      return false
    }
    const dataProps = {
      type: selectedType,
      title: articleTitle,
      content: articleContent,
      intruduction: introducemd,
      releaseTime: showDate
    }
    const {
      data: { ok = 0 }
    } = await axios.post(
      API_URL.editArticle,
      { dataProps },
      { withCredentials: true }
    )
    if (ok == 1) {
      message.success('添加成功')
    } else {
      message.success('添加失败')
    }
  }

  return (
    <div>
      <Row gutter={5}>
        <Col span={18}>
          <Row gutter={10}>
            <Col span={20}>
              <Input
                placeholder="博客标题"
                size="large"
                value={articleTitle}
                onChange={e => {
                  setArticleTitle(e.target.value)
                }}
              />
            </Col>
            <Col span={4}>
              &nbsp;
              <Select
                defaultValue={selectedType}
                size="large"
                onChange={changeSelectType}
              >
                {typeInfo.length > 0 &&
                  typeInfo.map(item => (
                    <Option key={item._id} value={item._id}>
                      {item.name}
                    </Option>
                  ))}
              </Select>
            </Col>
          </Row>
          <br />
          <Row gutter={10}>
            <Col span={12}>
              <TextArea
                value={articleContent}
                className="markdown-content"
                rows={35}
                onChange={changeContent}
                onPressEnter={changeContent}
                placeholder="文章内容"
              />
            </Col>
            <Col span={12}>
              <div
                className="show-html"
                dangerouslySetInnerHTML={{ __html: markdownContent }}
              />
            </Col>
          </Row>
        </Col>

        <Col span={6}>
          <Row>
            <Col span={24}>
              <Button size="large">暂存文章</Button>&nbsp;
              <Button type="primary" size="large" onClick={saveArticle}>
                发布文章
              </Button>
              <br />
            </Col>
            <Col span={24}>
              <br />
              <TextArea
                rows={4}
                value={introducemd}
                onChange={changeIntroduce}
                onPressEnter={changeIntroduce}
                placeholder="文章简介"
              />
              <br />
              <br />
              <div
                className="introduce-html"
                dangerouslySetInnerHTML={{
                  __html: introducehtml
                }}
              />
            </Col>
            <Col span={12}>
              <div className="date-select">
                <DatePicker
                  placeholder="发布日期"
                  size="large"
                  onChange={date => {
                    setShowDate(moment(date).format())
                  }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default AddArticle
