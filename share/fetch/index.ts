import axios from "axios";
import { constants } from "buffer";
import { useEffect, useState } from "react";
import { userInfo } from "../context/index";

interface Item {
  key: string;
  name: string;
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

export const useUserInfo = (): userInfo => {
  const [useInfo, setUserInfo] = useState({});
  useEffect(() => {
    let item = localStorage.getItem("userInfo");
    item = JSON.parse(item);
    setUserInfo(item);
  }, []);
  return useInfo as unknown as userInfo;
};

export const useStructInfo = () => {
  // 这个地方数据逻辑等待抽离
  const userInfo = useUserInfo();
  const [dataSource, setDataSource] = useState<Item[]>();
  const [finishStatus, setFinishStatus] = useState(true);
  const [currentDataSource, setCurrentDataSource] = useState<Item[]>();

  useEffect(() => {
    if (userInfo.username) {
      setCurrentDataSource(dataSource);
      localStorage.setItem(
        "struct" + userInfo.username,
        JSON.stringify(dataSource)
      );
    }
  }, [dataSource, userInfo.username]);

  useEffect(() => {
    if (userInfo.username) {
      axios
        .get("/api/struct", {
          params: {
            username: userInfo.username,
          },
        })
        .then((res) => {
          //@ts-ignorse
          setDataSource(res.data.data);
        });
      axios
        .get("http://localhost:7777/basicInfo", {
          params: { username: userInfo.username },
        })
        .then((res) => {
          setFinishStatus(res.data.done);
        });
    }
  }, [userInfo]);

  return { dataSource, finishStatus, currentDataSource, setDataSource };
};

export const useQuestions = () => {
  const { dataSource } = useStructInfo();
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    if (dataSource) {
      setQuestions(
        dataSource.map((item) => ({
          name: item.name,
          energy: "",
          network: "",
          loadRate: "",
          powerConsumptionRate: "",
        }))
      );
    }
  }, [dataSource]);
  return questions;
};
