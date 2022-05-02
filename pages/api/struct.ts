import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const wrapParams = (params) => {
  const res = "";
  let pairList = Object.keys(params).map((key) => {
    return key + "=" + params[key];
  });
  return "?" + pairList.join("&");
};
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

export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      const url = new URLSearchParams(req.url);
      const params = Object.fromEntries(url.entries());

      const { username, name, type } = params;
      axios
        .get("http://localhost:7777/struct/", { params: { username } })
        .then((data) => {
          let info = data.data;
          if (info.length === 1) {
            res.status(200).json({ data: info[0].data });
          } else {
            res.status(200).json({
              data: [
                {
                  key: uuidv4(),
                  name: name,
                  type: type,
                  generationType: "",
                  unitType: "",
                  backPressureUnit: "",
                  engage: false,
                  headting: false,
                  unitCapacity: "",
                  operatingCapacity: "",
                  children: [],
                },
              ],
            });
          }
        });
      break;
    case "POST":
      const { username: postUsername, data: recordData } = req.body;
      axios
        .post("http://localhost:7777/struct/", {
          username: postUsername,
          data: recordData,
        })
        .then((data) => {
          let info = data.data;
          res.status(200).json({
            msg: "ok",
          });
        });
    default:
      break;
  }
}
