/*
 * @Descripttion: 侧边栏 
 * @Author: zhaokh
 * @Date: 2020-02-02 21:43:25
 */
import React from "react";
import { Divider, Avatar ,Icon} from "antd";
import "../../public/style/components/author.css";

const Author = () => (
  <div className="author-div common-box">
    <div>
      {/* <Avatar size={100} src="/public/images/avatar.jpg"/> */}
      <Avatar size={100} icon={<Icon type="user" />} />
    </div>
    <div className="author-introduction">
      此地维权无门，此时无能为力，此心随波逐流。
      <Divider>社交账号</Divider>
      <Avatar size={28} icon="github" className="account" />
      <Avatar size={28} icon="qq" className="account" />
      <Avatar size={28} icon="wechat" className="account" />
    </div>
  </div>
);

export default Author;
