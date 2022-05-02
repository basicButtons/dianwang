import axios from "axios";

export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      const { username, data } = req.body;
      axios
        .post("http://localhost:7777/tempStruct/", {
          username,
          data,
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
