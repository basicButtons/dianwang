import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Content, Header } from "antd/lib/layout/layout";
import { useUserInfo } from "../../share/fetch";
import { useRouter } from "next/router";

export default function index(props) {
  const userInfo = useUserInfo();
  console.log(userInfo);
  const router = useRouter();
  const pathName = router.pathname;
  console.log(pathName);
  console.log(pathName);
  if (pathName === "/login") {
    return <>{props.children}</>;
  }
  const logoutUser = () => {
    console.log("logout");
  };
  const menu =
    userInfo.type !== "管理员" ? (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href="/admin">基本信息</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link href="/admin/questionnaire">计划上报</Link>
        </Menu.Item>
      </Menu>
    ) : (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathName]}>
        <Menu.Item key="/gover" icon={<UserOutlined />}>
          <Link href="/gover">审批</Link>
        </Menu.Item>
        <Menu.Item key="/shengdiao" icon={<UserOutlined />}>
          <Link href="/shengdiao">省调合计查看及下载</Link>
        </Menu.Item>
        <Menu.Item key="/didiao" icon={<UserOutlined />}>
          <Link href="/didiao">地调合计查看及下载</Link>
        </Menu.Item>
        <Menu.Item key="/quansheng" icon={<UserOutlined />}>
          <Link href="/quansheng">全省合计查看及下载</Link>
        </Menu.Item>
      </Menu>
    );
  return (
    <Layout className="main-body">
      <Sider>
        <div className="logo">
          <img className="hit" />
        </div>
        {menu}
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div>
            <a className="nav-link" href="/login" onClick={logoutUser}>
              Log out
            </a>
          </div>
        </Header>

        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
