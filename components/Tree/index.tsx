import React, { useCallback, useEffect, useState } from "react";
import { Button, Popconfirm, Table, Typography } from "antd";
import { useUserInfo } from "../../share/context";
import { AddModal } from "../AddModal";
import { useUpdate } from "./util";
import axios from "axios";

interface Item {
  key: string;
  username: string; // 名称
  children?: Item[]; //孩子
  type: string; // 类型
  generationType: string; // 发电类型
  unitType?: string; //仅火电类型填写
  backPressureUnit: string; //背压机组
  engage: boolean; //2022年截至目前是否参与市场交易
  headting: boolean; //是否供热
  unitCapacity: string; //机组容量
  operatingCapacity: string; //	运行容量
}

const data = [
  {
    key: 1,
    username: "John Brown sr.",
    age: 60,
    type: "主厂",
    address: "New York No. 1 Lake Park",
    children: [
      {
        key: 11,
        username: "John Brown",
        age: 42,
        type: "机组",
        address: "New York No. 2 Lake Park",
      },
      {
        key: 12,
        username: "John Brown jr.",
        age: 30,
        type: "分厂",
        address: "New York No. 3 Lake Park",
        children: [
          {
            key: 121,
            usernamename: "Jimmy Brown",
            age: 16,
            type: "机组",
            address: "New York No. 3 Lake Park",
          },
        ],
      },
      {
        key: 13,
        username: "Jim Green sr.",
        age: 72,
        type: "分厂",
        address: "London No. 1 Lake Park",
        children: [
          {
            key: 131,
            username: "Jim Green",
            age: 42,
            type: "分厂",
            address: "London No. 2 Lake Park",
            children: [
              {
                key: 1311,
                type: "机组",
                username: "Jim Green jr.",
                age: 25,
                address: "London No. 3 Lake Park",
              },
              {
                key: 1312,
                username: "Jimmy Green sr.",
                age: 18,
                address: "London No. 4 Lake Park",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    username: "Joe Black",
    age: 32,
    type: "机组",
    address: "Sidney No. 1 Lake Park",
  },
];

const edit = (item: Item) => {};

const save = () => {};

const cancel = () => {};

export const TreeInfo = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState<Item[]>();
  const update = useUpdate();
  const handleOk = (data) => {
    setDataSource((item) => {
      if (item[0].children) {
        item[0].children.push(data);
        return item;
      } else {
        item[0].children = [data];
        return item;
      }
    });
    update();
    setModalVisible(false);
  };
  const handleCancel = () => {
    console.log("here");
    setModalVisible(false);
  };
  const [modalType, setModalType] = useState<"create" | "edit">("create");
  const [originItem, setOriginItem] = useState<Item | {}>();
  const showModal = (record: Item, type: "create" | "edit") => {
    setModalVisible(true);
    if (type === "create") {
      setOriginItem({});
    } else {
      setOriginItem(record);
    }
    setModalType(type);
  };
  const userInfo = useUserInfo();
  const columns = [
    {
      title: "名称",
      dataIndex: "username",
      key: "username",
      width: "15%",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
      width: "5%",
    },
    {
      title: "发电类型",
      dataIndex: "generationType",
      key: "generationType",
      windth: "10%",
    },
    {
      title: "机组类型(仅火电)",
      dataIndex: "unitType",
      key: "unitType",
      width: "10%",
    },
    {
      title: "背压机组",
      dataIndex: "backPressureUnit",
      width: "10%",
      key: "backPressureUnit",
    },
    {
      title: "2022年截至目前是否参与市场交易",
      dataIndex: "engage",
      width: "5%",
      key: "engage",
      render: (_, record: Item) => (record.engage ? "是" : "否"),
    },
    {
      title: "是否供热",
      dataIndex: "headting",
      width: "4%",
      key: "headting",
      render: (_, record: Item) => (record.headting ? "是" : "否"),
    },
    {
      title: "机组容量",
      dataIndex: "unitCapacity",
      width: "10%",
      key: "unitCapacity",
    },
    {
      title: "运行容量",
      dataIndex: "operatingCapacity",
      width: "10%",
      key: "operatingCapacity",
    },
    {
      title: "操作",
      dataIndex: "action",
      width: "20%",
      key: "action",
      render: (_: any, record: Item) => {
        return record.type !== "主厂" ? (
          <span>
            <Typography.Link style={{ marginRight: 8 }}>
              <Button onClick={() => showModal(record, "create")}>
                添加分厂/机组
              </Button>
            </Typography.Link>
            <Typography.Link style={{ marginRight: 8 }}>
              <Button onClick={() => showModal(record, "edit")}>修改</Button>
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button>删除</Button>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Typography.Link style={{ marginRight: 8 }}>
              <Button onClick={() => showModal(record, "create")}>
                添加分厂/机组
              </Button>
            </Typography.Link>
            <Typography.Link style={{ marginRight: 8 }}>
              <Button onClick={() => showModal(record, "edit")}>修改</Button>
            </Typography.Link>
          </span>
        );
      },
    },
  ];
  useEffect(() => {
    axios
      .post("api/struct", {
        username: 45110001,
      })
      .then((res) => {
        //@ts-ignorse
        setDataSource(res.data.data);
      });
  }, []);
  const renderTable = useCallback(
    () => (
      <Table
        key={Math.random()}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        defaultExpandAllRows={true}
      />
    ),
    [dataSource, columns, originItem, modalType]
  );
  return (
    <>
      <AddModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        modalType={modalType}
        originItem={originItem}
      />
      {renderTable()}
    </>
  );
};
