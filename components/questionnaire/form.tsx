import { Form, Input, InputNumber } from "antd";
import { useGetOperatingCapacityByUserName } from "../../share/fetch";
import { useDefaultRecord } from "./hook";

const Demo = (props) => {
  const { form } = props;
  const operatingCapacityList = useGetOperatingCapacityByUserName();
  const record = props.initialValues;
  const operatingCapacity = operatingCapacityList.filter(
    (item) => item.key === record.key
  )[0]?.operatingCapacity;
  return (
    <div className="querstion-wrapper">
      <Form
        {...props}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        key={Math.random()}
        onValuesChange={(value) => {
          if (
            [...Object.keys(value)].includes("energy") ||
            [...Object.keys(value)].includes("network")
          ) {
            const currentValue = form.getFieldsValue(true);
            console.log(currentValue);
            form.setFieldsValue({
              ...currentValue,
              powerConsumptionRate: (
                ((currentValue.energy - currentValue.network) /
                  currentValue.energy) *
                100
              ).toFixed(4),
              loadRate: (
                currentValue.energy /
                24 /
                31 /
                operatingCapacity
              ).toFixed(4),
            });
            const nextValue = form.getFieldsValue(true);
            console.log(nextValue);
          }
        }}
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

        <Form.Item label="厂用电率" name="powerConsumptionRate">
          <InputNumber disabled={true} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Demo;
