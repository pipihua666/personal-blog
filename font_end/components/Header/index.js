/*
 * @Descripttion:
 * @Author: zhaokh
 * @Date: 2020-01-29 15:25:29
 */
import react, { useEffect, useState } from "react";
import { Row, Col, Menu, Icon } from "antd";
import Router from "next/router";
import axios from "axios";
import "../../public/style/components/header.css";
import API_URL from "../../constant/api";

const Header = () => {
  const [navArray, setNavArray] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(API_URL.getNav);
      setNavArray(data);
    };
    fetchData();
  }, []);

  const linkTo = event => {
    const type = event.item.props.children[1];
    const id = event.key;
    switch (type) {
      case "视频":
        Router.push(`/list?id=${id}`);
        break;
      case "首页":
        Router.push("/");
    }
  };

  return (
    <header>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">皮皮❀</span>
          <span className="header-txt">一个憨憨程序员</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={linkTo}>
            {navArray &&
              navArray.map(item => (
                <Menu.Item key={item._id}>
                  <Icon type={item.icon} />
                  {item.name}
                </Menu.Item>
              ))}
          </Menu>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
