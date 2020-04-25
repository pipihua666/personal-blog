/*
 * @Descripttion: 详情页
 * @Author: zhaokh
 * @Date: 2020-02-02 17:11:39
 */
import React from "react";
import Head from "next/head";
import { Row, Col, Breadcrumb, Icon, Affix } from "antd";
// import ReactMarkDown from "react-markdown";
// import MarkdownNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import axios from "axios";
import marked from "marked";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import "highlight.js/styles/monokai-sublime.css";
import Header from "../components/Header";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Tocify from "../components/TOC/tocify.tsx";
import API_URL from "../constant/api";
import "../public/style/pages/detail.css";

const Detailed = value => {
  const { article = {} } = value;
  // const { content = "" } = article;

  let markdown =
    "# P01:课程介绍和环境搭建\n" +
    "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
    "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
    "**这是加粗的文字**\n\n" +
    "*这是倾斜的文字*`\n\n" +
    "***这是斜体加粗的文字***\n\n" +
    "~~这是加删除线的文字~~ \n\n" +
    "`console.log(111)` \n\n" +
    "# p02:来个Hello World 初始Vue3.0\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n" +
    "***\n\n\n" +
    "# p03:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p04:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "#5 p05:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p06:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p07:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "``` var a=11; ```";

  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer, // 这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
    gfm: true, // 启动类似Github样式的Markdown,填写true或者false
    pedantic: false, // 只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
    sanitize: false, // 原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
    tables: true, // 支持Github形式的表格，必须打开gfm选项
    breaks: false, // 支持Github换行符，必须打开gfm选项，填写true或者false
    smartLists: true, // 优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
    smartypants: false, // 高亮显示规则 ，这里我们将使用highlight.js来完成
    highlight: function(code) {
      // 添加code高亮显示
      return hljs.highlightAuto(code).value;
    }
  });
  const tocify = new Tocify();
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>`;
  };

  const contentHTML = marked(markdown);

  return (
    <>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="common-main" type="flex" justify="center">
        {/* 左侧 */}
        <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <Breadcrumb className="bread-div">
            <Breadcrumb.Item>
              <a href="/">首页</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/list">列表页</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{article.title}</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <div className="detail-title">{article.title}</div>

            <div className="list-icon center">
              <span>
                <Icon type="calendar" /> {article.browseTimes}
              </span>
              <span>
                <Icon type="folder" /> {article.intruduction}
              </span>
              <span>
                <Icon type="fire" /> {`${article.browseTimes}人`}
              </span>
            </div>

            <div
              className="detail-content"
              dangerouslySetInnerHTML={{ __html: contentHTML }}
            ></div>
          </div>
        </Col>

        {/* 右侧 */}
        <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          {markdown && (
            <Affix offsetTop={7}>
              <div className="detail-nav common-box">
                <div className="nav-title">文章目录</div>
                <div className="toc-list">{tocify && tocify.render()}</div>
              </div>
            </Affix>
          )}
        </Col>
      </Row>
      <Footer />
    </>
  );
};

Detailed.getInitialProps = async props => {
  const {
    query: { id = "" }
  } = props;
  const { data: article = {} } = await axios.get(`${API_URL.getDetail}${id}`);
  return { article };
};

export default Detailed;
