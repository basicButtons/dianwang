import React, { createContext, useContext } from "react";

export interface userInfo {
  username: string;
  name: string;
  type: "省调" | "地调";
  password?: string;
}
const UserInfoContext = createContext<userInfo | {}>({});
export const UserInfoContextProvider: React.FC<{
  value: userInfo;
  children: React.ReactNode;
}> = (props) => {
  return (
    <UserInfoContext.Provider value={props.value}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
