import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

export const Nav = () => {
  const router = useRouter();
  const path = router?.pathname;
  return (
    <Menu mode="horizontal" defaultSelectedKeys={[path]}>
      <Menu.Item key="/admin" onClick={() => {}}>
        基本信息
        <Link href="/admin">{""}</Link>
      </Menu.Item>
      <Menu.Item key="/admin/questionnaire">
        上报信息
        <Link href="/admin/questionnaire">{""}</Link>
      </Menu.Item>
    </Menu>
  );
};
