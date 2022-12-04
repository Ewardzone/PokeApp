import React from "react";
import { TypeStyles } from "./TypeStyles";

const Type = ({ typeName }) => {
  return <TypeStyles type={typeName}>{typeName}</TypeStyles>;
};

export default Type;
