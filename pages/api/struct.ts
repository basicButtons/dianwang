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
      const { username, name } = getParams(req.url);
      axios
        .get(
          "http://localhost:7777/struct/" +
            wrapParams({
              username,
            })
        )
        .then((data) => {
          let info = data.data;
          console.log(info);
          res.status(200).json({ msg: "ok" });
        });
      break;
    case "POST":
      const {
        username: postUsername,
        name: postName,
        type: postType,
      } = req.body;
      console.log(req.body);
      axios
        .get(
          "http://localhost:7777/struct/" +
            wrapParams({
              username: postUsername,
            })
        )
        .then((data) => {
          let info = data.data;
          if (info.length === 1) {
            res.status(200).json({ data: info });
          } else {
            res.status(200).json({
              data: [
                {
                  key: uuidv4(),
                  name: postName,
                  username: postUsername,
                  type: postType,
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
    default:
      break;
  }
}
