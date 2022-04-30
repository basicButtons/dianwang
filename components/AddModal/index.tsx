import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button, Modal, Select } from "antd";

const { Option } = Select;

export function AddModal(props) {
  const { isModalVisible, handleOk, handleCancel, originItem, modalType } =
    props;
  console.log(isModalVisible);

  const [form] = Form.useForm();
  const [username, setUserName] = useState("");
  const [type, setType] = useState("分厂");
  const [unitType, setUnitType] = useState("风电");
  const [generationType, setGenerationType] = useState("");
  const [backPressureUnit, setBackPressureUnit] = useState("");
  const [engage, setEngage] = useState("");
  const [headting, setHeadting] = useState("");
  const [unitCapacity, setUnitCapacity] = useState("");
  const [operatingCapacity, setOperatingCapacity] = useState("");
  useEffect(() => {
    setUserName(originItem?.username);
    setType(originItem?.type);
    setUnitType(originItem?.unitType);
    setGenerationType(originItem?.generationType);
    setBackPressureUnit(originItem?.backPressureUnit);
    setEngage(originItem?.engage);
    setHeadting(originItem?.headting);
    setUnitCapacity(originItem?.unitCapacity);
    setOperatingCapacity(originItem?.operatingCapacity);
  }, [originItem]);
  console.log(username);
  const clearForm = () => {
    form.resetFields();
    setUserName("");
    setType("分厂");
    setUnitType("风电");
    setBackPressureUnit("");
    setEngage("");
    setGenerationType("");
    setHeadting("");
    setUnitCapacity("");
    setOperatingCapacity("");
  };
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
        clearForm();
        handleOk({
          username,
          type,
          unitType,
          backPressureUnit,
          engage,
          generationType,
          headting,
          unitCapacity,
          operatingCapacity,
        });
      }}
      onCancel={handleCancel}
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
        <Form.Item label="名称" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="类型" name="type" rules={[{ required: true }]}>
          <Select defaultValue="分厂">
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
          <Select defaultValue="风电">
            <Option value="风电">风电</Option>
            <Option value="光伏">光伏</Option>
            <Option value="水电">水电</Option>
            <Option value="火电">火电</Option>
            <Option value="生物质">生物质</Option>
            <Option value="垃圾">垃圾</Option>
            <Option value="沼气">沼气</Option>
          </Select>
        </Form.Item>
        {unitType === "火电" ? (
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
