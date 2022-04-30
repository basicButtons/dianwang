import axios from "axios";
const wrapParams = (params) => {
  const res = "";
  let pairList = Object.keys(params).map((key) => {
    return key + "=" + params[key];
  });
  return "?" + pairList.join("&");
};

export default function handler(req, res) {
  const { username, password } = req.body;

  axios
    .get(
      "http://localhost:7777/user/" +
        wrapParams({
          username,
        })
    )
    .then(res.status(200).json({ msg: "ok" }));
}
