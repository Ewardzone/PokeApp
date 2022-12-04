import styled from "styled-components";

export const ContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleStyles = styled.p`
  width: 114px;
  margin: 5px 0;
  color: #4b4b4b;
  font-weight: 600;
  font-size: 1em;
  line-height: 28px;
  text-transform: uppercase;
`;

export const LineStyles = styled.div`
  width: 180px;
  height: 10;
  padding: 1px;
  background-color: #eeeeee;
  box-shadow: inset -1px -1px 1px rgba(255, 255, 255, 0.7),
    inset 1px 1px 2px rgba(174, 174, 192, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
`;

export const ActiveStyles = styled.div`
  margin: 0;
  width: ${(props) => (props.power > 100 ? "100%" : `${props.power}%`)};
  height: 10px;
  background: lightblue;
  box-shadow: 0px 0px 2px rgba(114, 138, 183, 0.7);
  border-radius: 12px;
`;