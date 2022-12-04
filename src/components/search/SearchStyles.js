import styled from "styled-components";

export const SearchFormStyles = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 1.3rem;
  padding: 2%;
  border-radius: 25px;
  gap: 2%;
`;

export const InputStyles = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgb(200, 200, 200);
  padding: 2% 4%;
  border-radius: 25px;
  border: 0.1em royalblue solid;
  color: black;
  box-shadow: 3px 3px 1px black;

  &::placeholder {
    color: green;
    font-weight: 800;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonStyles = styled.button`
  height: max-content;
  width: 100px;
  background-color: green;
  padding: 2% 4%;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  box-shadow: 3px 3px 1px black;

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
