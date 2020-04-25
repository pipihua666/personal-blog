/*
 * @Descripttion: 列表页面
 * @Author: zhaokh
 * @Date: 2020-02-02 17:11:34
 */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Row, Col, List, Icon, Breadcrumb } from "antd";
import axios from "axios";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Header from "../components/Header";
import Author from "../components/Author";
import Footer from "../components/Footer";
import API_URL from "../constant/api";
import "../public/style/pages/index.css";

const BlogList = props => {
  const { list = {} } = props;
  const [myList, setLMylist] = useState(list);

  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize: false,
    xhtml: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });

  useEffect(() => {
    setLMylist(list);
  });

  return (
    <div>
      <Head>
        <title>List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Row className="common-main" type="flex" justify="center">
        <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="/">首页</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>视频教程</Breadcrumb.Item>
          </Breadcrumb>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{ pathname: "/detail", query: { id: item._id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span>
                    <Icon type="calendar" /> {item.releaseTime}
                  </span>
                  <span>
                    <Icon type="folder" /> {item.intruduction}
                  </span>
                  <span>
                    <Icon type="fire" /> {`${item.browseTimes}人`}
                  </span>
                </div>
                <div
                  className="list-context"
                  dangerouslySetInnerHTML={{ __html: marked(item.content) }}
                ></div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
        </Col>
        <Footer />
      </Row>
    </div>
  );
};

BlogList.getInitialProps = async ctx => {
  const { id = "" } = ctx.query;
  const { data: list = [] } = await axios.get(API_URL.getList + id);
  return { list };
};

export default BlogList;
