import axios from "axios";
import { useRouter } from "next/router";
const { URL } = require("url");

const getParams = (url) => {
  let paramsStr = url.split("?")[1];
  const paramPairs = paramsStr.split("&");
  const params = paramPairs.map((item) => {
    let newList = item.split("=");
    return {
      [newList[0]]: newList[1],
    };
  });
  const resParams = params.reduce((buf, item) => {
    return { ...buf, ...item };
  }, {});
  return resParams;
};

const wrapParams = (params) => {
  const res = "";
  let pairList = Object.keys(params).map((key) => {
    return key + "=" + params[key];
  });
  return "?" + pairList.join("&");
};

export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      const { username, password } = req.body;

      axios
        .get("http://localhost:7777/user/", {
          params: { username },
        })
        .then((result) => {
          let data = result.data;
          console.log(data);
          if (data[0]?.password === password) {
            res.status(200).json(data[0]);
          }
        });
  }
}
