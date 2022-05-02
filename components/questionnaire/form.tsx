import { Form, Input, InputNumber } from "antd";

const Demo = (props) => {
  return (
    <div className="querstion-wrapper">
      <Form
        {...props}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{}}
        autoComplete="off"
      >
        <Form.Item label="名称" name="name">
          <Input disabled={true} width={16} />
        </Form.Item>

        <Form.Item label="发电" name="energy">
          <InputNumber />
        </Form.Item>

        <Form.Item label="上网" name="network">
          <InputNumber />
        </Form.Item>

        <Form.Item label="负荷率" name="loadRate">
          <InputNumber disabled={true} />
        </Form.Item>

        <Form.Item label="负荷率" name="powerConsumptionRate">
          <InputNumber disabled={true} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Demo;
