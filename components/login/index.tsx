import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
export interface ErrorInterface {
  username?: string;
  password?: string;
}

export const LoginForm = (props) => {
  const [errors, setErrors] = useState<ErrorInterface>({});
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const router = useRouter();
  const submit = (e) => {
    e.preventDefault();
    if (username.length === 0) {
      setErrors({ username: "用户名不能为空。" });
    } else if (password.length === 0) {
      setErrors({ password: "密码不能为空。" });
    }
    axios.post("/api/verify", { username, password }).then((res) => {
      const data = res.data;
      localStorage.setItem("userInfo", JSON.stringify(data));
      if (data.msg == "ok") {
        router.push("/admin");
      } else {
        console.log("asgdfhagfsgd,");
      }
    });
  };
  return (
    <div className="login">
      <div className="outbox">
        <div className="box" id="box">
          <h1>{props.title}登陆</h1>
          <div className="inbox">
            <form action="" onSubmit={submit}>
              <input
                type="text"
                id="user"
                placeholder="账号"
                className="text user"
                name="username"
                onChange={(e) => setUserName(e.target.value)}
                value={username}
                autoComplete="off"
              />
              {errors.username && (
                <span className="form-text text-muted">{errors.username}</span>
              )}
              <input
                type="password"
                id="pass"
                placeholder="密码"
                onChange={(e) => setPassWord(e.target.value)}
                className="text password"
                name="password"
                value={password}
                autoComplete="off"
              />
              {errors.password && (
                <span className="form-text text-muted">{errors.password}</span>
              )}
              <button value="Login" className="btn1" id="btn">
                登陆
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
