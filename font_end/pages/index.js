/*
 * @Descripttion:首页页面
 * @Author: zhaokh
 * @Date: 2020-01-29 14:34:29
 */
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { Row, Col, List, Icon } from "antd";
import "../public/style/pages/index.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Header from "../components/Header";
import Author from "../components/Author";
import Footer from "../components/Footer";
import API_URL from "../constant/api";

const Home = articles => {
  const [myList, setLMylist] = useState(articles["0"]);

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
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Row className="common-main" type="flex" justify="center">
        <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
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

Home.getInitialProps = async () => {
  const { data: articles = [] } = await axios.get(API_URL.getArticles);
  return [articles];
};

export default Home;
