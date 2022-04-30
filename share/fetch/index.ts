import axios from "axios";
import { useEffect, useState } from "react";
import { userInfo } from "../context/index";

export const useUserInfo = (): userInfo => {
  let theUserInfo = {};
  useEffect(() => {
    let item = localStorage.getItem("userInfo");
    theUserInfo = JSON.parse(item);
  });
  return theUserInfo as unknown as userInfo;
};
