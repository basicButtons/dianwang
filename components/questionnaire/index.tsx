import React, { useState } from "react";
import { Table, Space, Modal, Button } from "antd";
import { useUserInfo, useQuestions } from "../../share/fetch";
import Form from "./form";

interface reportItem {
  key: string;
  name: string;
  energy: string;
  network: string;
  loadRate: string;
  powerConsumptionRate: string;
}

export default function index() {
  const userInfo = useUserInfo();
  const questions = useQuestions();
  const [isModalVisible, setModalVisible] = useState(false);
  const handleOk = () => {
    setModalVisible(false);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "发电",
      dataIndex: "energy",
      key: "energy",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "上网",
      dataIndex: "network",
      key: "network",
    },
    {
      title: "负荷率",
      dataIndex: "loadRate",
      key: "loadRate",
    },
    {
      title: "厂用电率",
      key: "powerConsumptionRate",
      dataIndex: "powerConsumptionRate",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setModalVisible(true);
            }}
          >
            修改
          </Button>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="querstion-wrapper">
      <Modal
        title="修改报告"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form />
      </Modal>
      <Table columns={columns} dataSource={questions} pagination={false} />
    </div>
  );
}
