import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Popconfirm, Table, Typography } from "antd";
import { useUserInfo } from "../../share/fetch";
import { AddModal } from "../AddModal";
import { useUpdate } from "./util";
import axios from "axios";
import style from "./style.module.css";
import { useStructInfo } from "../../share/fetch";

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

export const TreeInfo = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { dataSource, finishStatus, currentDataSource, setDataSource } =
    useStructInfo();
  const [modalType, setModalType] = useState<"create" | "edit">("create");
  const [originItem, setOriginItem] = useState<Item | {}>();
  const userInfo = useUserInfo();
  const ref = useRef<Item>();
  const update = useUpdate();

  const handleOk = (data) => {
    if (modalType === "create") {
      setDataSource((item) => {
        return [...item, data];
      });
    } else {
      setDataSource((item) => {
        const newItem = item.filter((record) => record.key !== data.key);
        return [...newItem, data];
      });
    }
    update();
    setModalVisible(false);
  };

  const deleteRecord = (data: Item) => {
    setDataSource((item) => {
      const newItem = item.filter((record) => record.key !== data.key);
      return newItem;
    });
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const showModal = (record: Item, type: "create" | "edit") => {
    setModalVisible(true);
    if (type === "create") {
      setOriginItem({});
    } else {
      setOriginItem(record);
    }
    ref.current = record;
    setModalType(type);
  };

  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
      width: "5%",
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
      width: "10%",
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
      render: (_: any, record: Item, index) => {
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
            <Popconfirm
              title="Sure to cancel?"
              onConfirm={() => {
                deleteRecord(record);
              }}
            >
              <Button>删除</Button>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Typography.Link style={{ marginRight: 8 }}>
              <Button onClick={() => showModal(record, "create")}>添加</Button>
            </Typography.Link>
            <Typography.Link style={{ marginRight: 8 }}>
              <Button onClick={() => showModal(record, "edit")}>修改</Button>
            </Typography.Link>
          </span>
        );
      },
    },
  ];

  const renderTable = useCallback(
    () => (
      <Table
        key={Math.random()}
        columns={columns}
        dataSource={currentDataSource}
        pagination={false}
      />
    ),
    [dataSource, columns, originItem, modalType]
  );
  return (
    <>
      <div className={style["admin-header"]}>
        {!finishStatus ? (
          <div>请完善基本信息</div>
        ) : (
          <div>您已经完成基本信息填写</div>
        )}
        <Button type="primary">确认提交数据</Button>
      </div>
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
