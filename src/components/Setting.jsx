import React from "react";
import { useContext } from "react";
import { UserContext } from "./ProtectWrapper";

const Setting = () => {
  const user = useContext(UserContext);
  return <div>Setting{user}</div>;
};

export default Setting;
