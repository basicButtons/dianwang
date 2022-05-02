import axios from "axios";
import { useEffect, useState } from "react";
import { reportItem, useQuestions, useUserInfo } from "../../share/fetch";

export const useDefaultRecord = () => {
  const userInfo = useUserInfo();
  const [defaultRecord, setDefaultRecord] = useState<reportItem>();
  const { setQuestions, questions } = useQuestions();

  const updateRecord = (record: reportItem) => {
    const newList = questions.map((item) => {
      if (item.key === record.key) {
        return record;
      } else {
        return item;
      }
    });
    return axios
      .post("/api/questions", { data: newList, username: userInfo.username })
      .then((res) => {
        return newList;
      });
  };

  return { defaultRecord, setDefaultRecord, updateRecord };
};
