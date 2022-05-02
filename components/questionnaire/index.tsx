import React, { useState } from "react";
import { Table, Space, Modal, Button, Form } from "antd";
import {
  useUserInfo,
  useQuestions,
  useGetOperatingCapacityByUserName,
} from "../../share/fetch";
import MyForm from "./form";
import { useDefaultRecord } from "./hook";
import { useUpdate } from "../../components/util";
export default function index() {
  const { defaultRecord, setDefaultRecord, updateRecord } = useDefaultRecord();
  const [form] = Form.useForm();
  const { questions, setQuestions } = useQuestions();
  const [isModalVisible, setModalVisible] = useState(false);
  const update = useUpdate();
  const handleOk = async () => {
    await updateRecord({ ...defaultRecord, ...form.getFieldsValue(true) }).then(
      (res) => setQuestions(res)
    );
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
              setDefaultRecord(record);
            }}
          >
            修改
          </Button>
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
        <MyForm initialValues={defaultRecord} form={form} />
      </Modal>
      <Table
        key={Math.random()}
        columns={columns}
        dataSource={questions}
        pagination={false}
      />
    </div>
  );
}
