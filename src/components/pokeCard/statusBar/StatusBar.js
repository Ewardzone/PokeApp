import React from "react";
import {
  ActiveStyles,
  ContainerStyles,
  LineStyles,
  TitleStyles,
} from "./StatusBarStyles";

const StatusBar = (props) => {

  const {
    base_stat,
    stat: { name },
    firstType,
  } = props;

  return (
    <ContainerStyles>
      <TitleStyles>{name}</TitleStyles>
      <LineStyles>
        <ActiveStyles
        power={base_stat}
        type={firstType}
        ></ActiveStyles>
      </LineStyles>
    </ContainerStyles>
  );
};

export default StatusBar;