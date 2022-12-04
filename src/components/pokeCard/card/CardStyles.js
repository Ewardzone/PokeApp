import styled from "styled-components";

export const CardContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 250px;
  margin: 0 auto;
  padding: 30px 25px;
  border-radius: 2px;
  border: 1em groove royalblue;
  background-color: rgb(200, 200, 200);
  box-shadow: 1px 1px 10px black;
`;

export const CardTextStyles = styled.div`
  text-align: center;

  & h2 {
    font-weight: 700;
    font-size: 2.3em;
    line-height: 1em;
    text-transform: uppercase;
  }

  & h3 {
    font-weight: 400;
    font-size: 2.7em;
    line-height: 1em;
    border-radius: 100px;
    width: fit-content;
    background-color: lightblue;
    padding: 2%;
    margin: 0 auto;
    border: inset 0.1em royalblue;
  }
`;

export const CardStatsStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardTypeStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & p {
    font-weight: 400;
    font-size: 0.5em;
    line-height: 0.7em;
    color: black;
  }
`;
