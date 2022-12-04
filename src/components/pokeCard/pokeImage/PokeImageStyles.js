import styled from "styled-components";

export const ImageContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  background-color: lightblue;
  border-radius: 12px;
  border: inset 0.3em royalblue;
  box-shadow: 1px 1px 10px black;
`;

export const ImageBoxStyles = styled.div`
  position: relative;
  width: 124px;
  height: 124px;
  text-align: center;
  & img {
    width: 162px;
    height: 162px;
    position: absolute;
    bottom: -20px;
    right: -20px;
  }
`;

export const ImageShadowStyles = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 180px;
  height: 46px;
  background: radial-gradient(
    51.76% 37.2% at 39.17% 51.96%,
    rgba(0, 0, 0, 0.24) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(6.85deg);
`;
