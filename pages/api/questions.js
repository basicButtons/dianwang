import axios from "axios";

export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      const url = new URLSearchParams(req.url);
      const params = Object.fromEntries(url.entries());
      const { username } = params;
      axios
        .get("http://localhost:7777/questions/", { params: { username } })
        .then((data) => {
          let info = data.data[0].question;
          res.status(200).json({
            data: info,
          });
        });
      break;
    case "POST":
      const { username: name, data } = req.body;
      axios
        .patch("http://localhost:7777/questions/" + name, {
          id: name,
          username: name,
          question: data,
        })
        .then((result) => {
          res.status(200).json({ msg: "ok" });
        });
    default:
      break;
  }
}
