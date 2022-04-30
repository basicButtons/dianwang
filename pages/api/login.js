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
  const params = getParams(req.url);
  const { username, password } = params;
  axios
    .get(
      "http://localhost:7777/user/" +
        wrapParams({
          username,
        })
    )
    .then((res) => {
      let data = res.data;
      if (data.password === password) {
        res.status(200).json({ msg: "ok" });
      }
    });
}
