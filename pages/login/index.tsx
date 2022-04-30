import React from "react";
import style from "./login.module.css";
import { Tabs } from "antd";
import { LoginForm } from "../../components/login";
const { TabPane } = Tabs;

export default function Login() {
  const MyTabs = () => (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="省调" key="1">
          <LoginForm title={"省调"} />
        </TabPane>
        <TabPane tab="地调" key="2">
          <LoginForm title={"地调"} />
        </TabPane>
        <TabPane tab="管理员" key="3">
          <LoginForm title={"管理员"} />
        </TabPane>
      </Tabs>
    </div>
  );

  return (
    <div className={style.LoginWrapper}>
      <div className={style.BgcWrapper}>
        <div className={style.BgcLayer} />
        <img src="/imgs/loginbg.jpeg" className={style.LoginBg} />
      </div>
      <div className={style.bodyWrpper}>
        <div className={style.loginBody}>
          <MyTabs />
        </div>
      </div>
    </div>
  );
}
