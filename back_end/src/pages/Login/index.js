/*
 * @Descripttion: 登录页面
 * @Author: zhaokh
 * @Date: 2020-02-22 19:08:54
 */

import React, { useState } from "react";
import { Spin, Input, Button, Card, Icon, message } from "antd";
import axios from "axios";
import API_URL from "../../constant/api";
import "./index.css";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkLogin = async () => {
    setIsLoading(true);

    if (!username) {
      message.error("用户名不能为空");
      setIsLoading(false);
      return false;
    } else if (!password) {
      setIsLoading(false);
      message.error("密码不能为空");
      return false;
    }
    const dataProps = {
      username,
      password
    };
    const { data = {} } = await axios.post(API_URL.checkLogin, dataProps, {
      withCredentials: true
    });

    if (data && data.data === "登录成功") {
      setIsLoading(true);
      localStorage.setItem("openId", data.openId);
      props.history.push("/");
    } else {
      message.error("用户名密码错误");
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card
          title="pipihua Blog  System"
          bordered={true}
          style={{ width: 400 }}
        >
          <Input
            id="userName"
            size="large"
            placeholder="Enter your userName"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <br />
          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button type="primary" size="large" block onClick={checkLogin}>
            {" "}
            Login in{" "}
          </Button>
        </Card>
      </Spin>
    </div>
  );
};

export default Login;
