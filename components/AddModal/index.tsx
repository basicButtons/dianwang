import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button, Modal, Select } from "antd";
import { configConsumerProps } from "antd/lib/config-provider";

const { Option } = Select;

export function AddModal(props) {
  const { isModalVisible, handleOk, handleCancel, originItem, modalType } =
    props;
  const [form] = Form.useForm();
  const [showUnitType, setShowUnitType] = useState(false);
  useEffect(() => {
    form.setFieldsValue(originItem);
  }, [originItem]);
  const rendeerModal = () => (
    <Modal
      {...props}
      initialValues={originItem}
      key={originItem?.key}
      title={modalType === "create" ? "添加分厂/机组" : "修改信息"}
      visible={isModalVisible}
      cancelText={"取消"}
      okText={"提交"}
      onOk={() => {
        handleOk(form.getFieldsValue(true));
        form.resetFields();
      }}
      onCancel={() => {
        form.resetFields();
        handleCancel();
      }}
      autoComplete="off"
    >
      <Form
        form={form}
        name="wrap"
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
      >
        <Form.Item label="名称" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="类型" name="type" rules={[{ required: true }]}>
          <Select>
            <Option value="主厂">主厂</Option>
            <Option value="分厂">分厂</Option>
            <Option value="机组">机组</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="发电类型"
          name="generationType"
          rules={[{ required: true }]}
        >
          <Select
            onChange={(value) => {
              if (value === "火电") {
                setShowUnitType(true);
              } else {
                setShowUnitType(false);
              }
            }}
          >
            <Option value="风电">风电</Option>
            <Option value="光伏">光伏</Option>
            <Option value="水电">水电</Option>
            <Option value="火电">火电</Option>
            <Option value="生物质">生物质</Option>
            <Option value="垃圾">垃圾</Option>
            <Option value="沼气">沼气</Option>
          </Select>
        </Form.Item>
        {showUnitType ? (
          <Form.Item
            label="机组类型(仅火电)"
            name="unitType"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        ) : (
          <></>
        )}
        <Form.Item
          label="背压机组"
          name="backPressureUnit"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="2022年截至目前是否参与市场交易"
          name="engage"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value={true}>是</Option>
            <Option value={false}>否</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="是否供热"
          name="headting"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value={true}>是</Option>
            <Option value={false}>否</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="机组容量"
          name="unitCapacity"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="运行容量"
          name="operatingCapacity"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
  return <div>{rendeerModal()}</div>;
}
